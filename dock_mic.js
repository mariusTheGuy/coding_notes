// The storage location of Docker images and containers
~/Library/Containers/com.docker.docker/Data/vms/0/
// general info
$>docker info

// 1. let's create a Docker image first
- We create a Docker file to spin up a Node Docker container

FROM    // inherit from a node version image 
WORKDIR // path we create for our wd in the container itself
COPY    // we copy the app content to the wd of the container

CMD     // execute when you run an instance of the container 
        // from that image

RUN     // when you build the image from docker file

1. create a Docker image upon the 'Dockerfile'
// - Navigate to the root directory where 'Dockerfile' is located
$>docker build -t mynodeapp .

2. Spin up a container from it
$>docker run --name mynodeapp -p 3000:3000 mynodeapp

- to stop container
$>docker stop <app-name>

- to remove container
$>docker rm <app-name>
or
$>docker rmi <app-id>

- To spin up several docker containers
// - '-d' we detached it because we just want the application to run
$>docker run -d -p 3000:3000 mynodeapp
$>docker run -d -p 3001:3000 mynodeapp
$>docker run -d -p 3002:3000 mynodeapp

- To check if there are containers running.
$>sudo docker ps                            // '-a' if we want a list of the rest

