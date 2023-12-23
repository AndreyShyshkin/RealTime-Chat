const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const app = express();

const route = require('./route');
app.use(cors({ origin: '*' }));
app.use(route);

const server = http.createServer(app);
server.listen(5000, () => {
  console.log('Server running on port 5000');
});
