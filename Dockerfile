# Use the official Node.js image as the parent image
FROM node:16

# Set the working directory in the Docker container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) into the working directory
COPY package*.json ./

# Install any dependencies
RUN npm install

# Copy the rest of the Node.js application into the container
COPY . .

# Make your service's port available to the outside
EXPOSE 8080

# Run your application
CMD ["node", "server.js"]
