# Use a lighter version of Node as a parent imageFrom mhart/alpine-node:8.11.4

# Set the working directory to /clientWORKDIR /client

# copy package.json into the container at /clientCOPY package*.json /client/

# install dependenciesRUN npm install

# Copy the current directory contents into the container at /clientCOPY . /client/

# Make port 3000 available to the world outside this containerEXPOSE 3000

# Run the app when the container launchesCMD ["npm", "start"]