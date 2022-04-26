FROM node:lts-alpine

# Create app directory
WORKDIR /src

# Install app dependencies
COPY package*.json ./
RUN yarn --silent

# Copy app source code
COPY . .

#Expose port and start application
EXPOSE 3000
CMD ["yarn", "start"]