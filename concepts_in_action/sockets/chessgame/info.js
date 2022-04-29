1. MONGO installed and running
$>mongo
2. REDIS installed and running 
// https://redis.io/download/#installation
- being in the folder in which the source has been download:
$>make
- After the installation ends, start the server with this command:
$>src/redis-server
- You can also quickly try Redis by running the CLI:
$>src/redis-cli
$>redis> set foo bar    // OK
redis> get foo          // "bar"
