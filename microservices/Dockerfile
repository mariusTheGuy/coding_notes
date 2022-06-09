FROM node:14.16.0
WORKDIR /home/node/app
COPY app /home/node/app/
# we need to install the packages that coming from the app
RUN npm i
CMD npm run start
# we don't need to expose the port in microservice because we will use 
# isolated internal containers that we as an external entity has not access to
# we will have access to the load balancer instead
# EXPOSE 3000