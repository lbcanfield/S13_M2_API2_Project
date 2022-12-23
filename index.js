// require your server and launch it here
const server = require('./api/server');

const PORT = 1701;

server.listen(PORT, () => {
     console.log('Server Started on :  ', PORT);
})