# Use a lighter version of Node as a parent imageFROM mhart/alpine-node:8.11.4
FROM node:14

# improves site performance
ENV NODE_ENV=production

# Set the working directory
WORKDIR /server

# Copy package.json into the container with wildcard
COPY package*.json ./

# Install dependenciesRUN npm install
# If for production - RUN npm ci --only=production
RUN npm install

# Bundle app source contents into the container
COPY . .

# Make output 8080 available outside container
EXPOSE 8080

# Run the app with the container CMD ["npm", "start"]
CMD [ "npm", "run", "start" ]