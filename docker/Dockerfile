FROM node:14.16.0
WORKDIR /home/node/app
COPY app /home/node/app/
# we need to install the packages that coming from the app
RUN npm i
CMD npm run start
EXPOSE 3000