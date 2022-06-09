--- START REDIS INSTANCE ---
- It needs to listen into a port

// 1. check if docker is installed
$>docker 
// check and/or download this example image
$>docker run hello-world 

// 2. initialize Redis DB container in Docker
$>docker run --name 
<name of the > 
-p <host machine port>:<container port> 
<name of the image on the docker hub>

$>docker run --name rdb -p 6379:6379 redis

// 3. Open Redis CLI
- Open a new terminal
$>docker exec -it rdb redis-cli

REDIS
1. Set a key-value pair
$>set name "Emily"
2. Get a key value
$>get name
3. Set temporary value which expires in 5 seconds
$>set nameTemp "Cristina" EX 5
4. Check if a key exists
$>exists name
5. Delete
$>del name
6. Append
$>append name "Hablond"

REDIS: Publish / Subscribe Model
- We create a channel
$>subscribe newvideos
- Publish a new video, Open new Terminal
$>docker exec -it rdb redis-cli
$>publish newvideos "This message will be broadcast!"

Redis in Docker is a persisted model by default, you can check it:
- close Docker Redis instance
- Restart the DB
$>docker start rdb 				(to close it: docker stop rdb)
- Go to the 2nd tab
$>docker exec -it rdb redis-cli
$>get name

