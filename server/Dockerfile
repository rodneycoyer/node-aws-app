# improves site performance
ARG NODE_ENV=production

# Base image
FROM node:14.18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json with wildcard
COPY --chown=node:node package*.json ./

# Install dependencies
RUN npm install --silent

# Bundle app source contents inside image
COPY --chown=node:node . .

# Run the app
CMD ["npm", "start"]

# non-root
USER node