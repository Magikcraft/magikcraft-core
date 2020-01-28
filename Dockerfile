FROM magikcraft/scriptcraft:latest

# Setup the working directory
RUN mkdir /srv/github-actions-app
WORKDIR /_server_/scriptcraft-plugins/@magikcraft/core/

# Send over the dependency definitions to the container
COPY package.json ./
# Install the dependencies
RUN npm i
# Copy the whitelisted files
COPY . .

# From here: https://vsupalov.com/docker-build-time-env-values/
ARG TEST_MODE_SETTING=true
ARG EULA_SETTING=true
ENV TEST_MODE=$TEST_MODE_SETTING
ENV MINECRAFT_EULA_ACCEPTED=$EULA_SETTING

RUN mkdir /_server_/worlds && curl https://sitapatis-sydney-storage.s3.amazonaws.com/MCT1/mct1-worlds-0.2.0.zip --output /_server_/worlds/mct1-worlds-0.2.0.zip && \
   unzip mct1-worlds-0.2.0.zip
# Run the tests
RUN /_server_/start.sh
