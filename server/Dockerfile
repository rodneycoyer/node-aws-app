# improves site performance
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

# Bundle app source contents into the container
COPY . .

# Run the app
CMD npm start