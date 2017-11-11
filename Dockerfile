FROM mhart/alpine-node:8

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install the app dependencies
COPY package.json /usr/src/app/
RUN npm config set registry http://registry.npmjs.org/ && npm install

# Bundle app source
COPY . /usr/src/app
RUN npm run build



EXPOSE 8080

CMD ["npm", "start"]
