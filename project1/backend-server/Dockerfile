# Use a lighter-weight Node.js image as the base
FROM node:alpine AS builder

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy the rest of the application code to the working directory
COPY . .

# Second stage to create a smaller image
FROM node:alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy only the necessary files from the builder stage
COPY --from=builder /usr/src/app .

# Expose port 4000
EXPOSE 4000

# Start the application
CMD ["npm", "run", "start"]
