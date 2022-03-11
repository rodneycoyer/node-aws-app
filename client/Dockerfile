# imporves site performance
ARG NODE_ENV=production

# Base image
FROM node:14.18

# Set the working directory
WORKDIR /home/node

# Copy package.json into the container with wildcard
COPY --chown=node:node package*.json ./

# Install dependencies
RUN npm install --silent

# Bundle App source contents into container
COPY --chown=node:node . .

# Run the App
CMD [ "npm", "start"]

# non-root user
USER node