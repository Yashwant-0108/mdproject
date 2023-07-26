# Use the official Node.js 18.x image as the base image
# FROM node:14-alpine
FROM node


# Install git
RUN apk add --no-cache git

# Install Node.js and npm
# RUN apt-get update && apt-get install -y curl
# RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
# RUN apt-get install -y nodejs

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Clear npm cache and install Vitepress v1.0.0-beta.6 and other dependencies
RUN npm install 
RUN npm install vitepress@1.0.0-beta.6

# Install specific packages @popperjs/core, moment, and lodash
RUN npm install @popperjs/core moment lodash

# Copy the rest of the project files
COPY . .

# Build the Vitepress project
# RUN npm run build

# Expose the port that Vitepress will run on (port 5000)
EXPOSE 5000

# Start the Vitepress development server on port 5000
CMD ["npm", "run", "docs:dev", "--", "--host", "0.0.0.0", "--port", "5000"]
