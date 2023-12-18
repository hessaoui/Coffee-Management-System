const express = require('express');
const connection = require('../connection');
const router = express.Router();
const ejs = require('ejs');
const path = require('path');
const fs = require('fs').promises;
const pdf = require('html-pdf');
const uuid = require('uuid');
const auth = require('../services/authentification');

router.post('/generateReport', auth.authentificateToken, async (req, res) => {
  const generatedUuid = uuid.v1();
  const orderDetails = req.body;
  const productDetailsReport = JSON.parse(orderDetails.productDetails);

  const pdfDirectory = path.resolve(__dirname, '../generated_pdf/');
  const pdfFilePath = path.join(pdfDirectory, generatedUuid + '.pdf');

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
});

module.exports = router;
