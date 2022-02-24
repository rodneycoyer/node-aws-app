# imporves site performance
ARG NODE_ENV=production

# Base image
FROM node:14.18

# non-root
USER node

# Set the working directory
WORKDIR /home/node

# Copy package.json into the container with wildcard
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle App source contents into container
COPY . .

# Run the App
CMD npm start