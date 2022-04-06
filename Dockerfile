# set to improve site performance
# does not install "dev" dependencies
ARG NODE_ENV=production

### STAGE 1 - CLIENT ###

# base image
FROM node:14.18

# set working directory
WORKDIR /usr/src/client

# copy package*.json
COPY client package*.json ./

# install dependencies
RUN npm ci

# copy contents
COPY client .

# build production folder
RUN npm run build

### STAGE 2 - SERVER ###

# base image
FROM node:14.18

# set working directory
WORKDIR /usr/src/server

# copy package*.json
COPY server package*.json ./

# install server dependencies
RUN npm ci

# copy server constents into image
COPY server .

# mkdir for client build folder
RUN mkdir -p ../client/build

# bring in client build contents
COPY --from=0 /usr/src/client/build ../client/build

# run-time container network port.
EXPOSE 8080

# run the app
CMD ["npm", "start"]

# non-root user
USER node

