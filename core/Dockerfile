# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install any dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose port 8080 for the application
EXPOSE 8080

# Start the application
CMD ["npm", "start"]
