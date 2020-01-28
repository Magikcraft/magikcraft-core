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

# From here: https://vsupalov.com/docker-build-time-env-values/
ARG TEST_MODE_SETTING=true
ENV TEST_MODE=$TEST_MODE_SETTING

# Run the tests
RUN /_server_/start.sh
