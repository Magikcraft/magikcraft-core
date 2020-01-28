FROM magikcraft/scriptcraft:latest

# Setup the working directory
RUN mkdir /srv/github-actions-app
WORKDIR /_server_

# Send over the dependency definitions to the container
COPY package.json ./
# Install the dependencies
RUN npm i
# Copy the whitelisted files
COPY . ./scriptcraft-plugins/@magikcraft/core/
TEST_MODE=true
# Run the tests
RUN /_server_/start.sh
