# Use a lighter-weight Node.js image as the base
FROM node:18 AS builder

# Install the Angular CLI globally
RUN npm install -g @angular/cli

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json /app/

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 4200
EXPOSE 4200

# Start Nginx
CMD ["ng", "serve", "--host", "0.0.0.0"]
