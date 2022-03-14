### STAGE 1 - CLIENT ###

# set to improve site performance
ARG NODE_ENV=production

# base image
FROM node:14.18 AS client

# set working directory
WORKDIR /client

# copy client contents into image
COPY client .

# install dependencies and build
RUN npm install && npm run build



### STAGE 2 - SERVER ###

# base image
FROM node:14.18 AS server

# set working directory
WORKDIR /server

# copy server constents into image
COPY server .

# mkdir for client code
RUN mkdir -p ../client/build

# bring in client build contents
COPY --from=client /client/build ../client/build

# run the app
CMD ["node", "./server/bin/www"]