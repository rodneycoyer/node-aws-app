# set to improve site performance
ARG NODE_ENV=production

### STAGE 1 - CLIENT ###

# base image
FROM node:14.18 AS client

# set working directory
WORKDIR /usr/src/client

# copy client contents into image
COPY client .

# install dependencies and build
RUN npm ci && npm run build

### STAGE 2 - SERVER ###

# base image
FROM node:14.18 AS server

# set working directory
WORKDIR /usr/src/server

# copy server constents into image
COPY server .

# install server dependencies
RUN npm ci

# mkdir for client bundle
RUN mkdir -p ../client/build

# bring in client build contents
COPY --from=client /usr/src/client/build ../client/build

# run the app
CMD ["node", "./bin/www"]