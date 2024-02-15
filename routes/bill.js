const express = require('express');
const connection = require('../connection');
const router = express.Router();
const ejs = require('ejs');
const path = require('path');
const util = require('util'),
    request = util.promisify(require('request')),
    rfs = require('fs');
const fs = rfs.promises;
const pdf = require('html-pdf');
const uuid = require('uuid');
const auth = require('../services/authentification');
const { restart } = require('nodemon');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

router.post('/generateReport', auth.authentificateToken, async (req, res) => {
    const generatedUuid = uuid.v1();
    const orderDetails = req.body;
    const productDetailsReport = JSON.parse(orderDetails.productDetails);

    const pdfDirectory = path.resolve(__dirname, '../generated_pdf/');
    const pdfFilePath = path.join(pdfDirectory, generatedUuid + '.pdf');

    const csvFilePath = path.join(pdfDirectory, generatedUuid + '.csv');

    try {
        await fs.mkdir(pdfDirectory, { recursive: true });
        console.log('PDF directory created successfully:', pdfDirectory);

        const query =
            'INSERT INTO bill(name, uuid, email, contactNumber, paymentMethod, total, productDetails, createdBy) VALUES (?,?,?,?,?,?,?,?)';
        connection.query(
            query,
            [
                orderDetails.name,
                generatedUuid,
                orderDetails.email,
                orderDetails.contactNumber,
                orderDetails.paymentMethod,
                orderDetails.totalAmount,
                orderDetails.productDetails,
                res.locals.email,
            ],
            async (err, results) => {
                if (err) {
                    console.error('Database query error:', err);
                    return res.status(500).json(err);
                }

                console.log('Database query results:', results);

                const htmlContent = await ejs.renderFile(
                    path.join(__dirname, '', 'report.ejs'),
                    {
                        productDetails: productDetailsReport,
                        name: orderDetails.name,
                        email: orderDetails.email,
                        contactNumber: orderDetails.contactNumber,
                        paymentMethod: orderDetails.paymentMethod,
                        totalAmount: orderDetails.totalAmount,
                    }
                );

                console.log('Rendered HTML:', htmlContent);

                // Use html-pdf to generate PDF from HTML content
                pdf.create(htmlContent).toFile(pdfFilePath, (pdfErr, pdfRes) => {
                    if (pdfErr) {
                        console.error('Error creating PDF:', pdfErr);
                        return res.status(500).json({ error: 'Internal Server Error' });
                    }

                    console.log('PDF creation successful:', pdfFilePath);
                    return res.status(200).json({ uuid: generatedUuid });
                });
            }
        );
    } catch (mkdirError) {
        console.error('Error creating PDF directory:', mkdirError);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
})

router.post('/getPdf', auth.authentificateToken, async function (req, res) {
    const orderDetails = req.body;
    const pdfPath = './generated_pdf/' + orderDetails.uuid + '.pdf';

    try {
        await fs.access(pdfPath);
        // File exists, serve it
        res.contentType("application/pdf");
        rfs.createReadStream(pdfPath).pipe(res);
    } catch (error) {
        if (error.code === 'ENOENT') {
            // File does not exist, generate it
            var productDetailsReport = JSON.parse(orderDetails.productDetails);
            const htmlContent = await ejs.renderFile(path.join(__dirname, '', "report.ejs"), {
                productDetails: productDetailsReport,
                name: orderDetails.name,
                email: orderDetails.email,
                contactNumber: orderDetails.contactNumber,
                paymentMethod: orderDetails.paymentMethod,
                totalAmount: orderDetails.totalAmount
            }, (err, results) => {
                if (err) {
                    return res.status(500).json(err);
                } else {
                    pdf.create(htmlContent).toFile(pdfPath, function (pdfErr, pdfRes) {
                        if (pdfErr) {
                            console.error('Error creating PDF:', pdfErr);
                            return res.status(500).json({ error: 'Internal Server Error' });
                        }
    
                        console.log('PDF creation successful:', pdfPath);
                        res.contentType("application/pdf");
                        fs.createReadStream(data.filename).pipe(res);

                        return res.status(200).json({ uuid: generatedUuid });

                    });
                }
            });
        } else {
            // Other error occurred
            console.error('Error checking file existence:', error);
            return res.status(500).json(error);
        }
    }
})

router.get('/getBills', auth.authentificateToken, (req, res, next) => {
    var query = "select * from bill order by id DESC";
    connection.query(query, (err, results) => {
        if (!err) {
            return res.status(200).json(results);
        } else {
            return res.status(500).json(err);
        }
    })
})

router.delete('/delete/:id', auth.authentificateToken, (req, res, next) => {
    const id = req.params.id;
    var query = "delete from bill where id=?";
    connection.query(query, [id], (err, results) => {
        if (!err) {
            if (results.affectedRows == 0) {
                return res.status(404).json({ message: "Bill id not found" });
            }
            return res.status(200).json({ message: "Bill deleted successfully !" });
        } else {
            return res.status(500).json(err);
        }
    })
})


module.exports = router;
