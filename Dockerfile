# base image
FROM node:13.10.1-alpine3.10

# set working directory
WORKDIR /app
COPY . /app/.

RUN npm install yarn --silent
RUN yarn install

# start app
CMD ["yarn", "start"]