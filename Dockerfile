# Use an official Node.js runtime as a parent image
FROM node:14-alpine AS builder

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the rest of the application code to the container
COPY . .

# Build the React app
RUN npm run build

# Use a lighter base image for the final stage
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy build artifacts from the previous stage
COPY --from=builder /app .

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["npm", "start"]