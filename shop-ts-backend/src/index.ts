import http from 'http';
import { config } from 'dotenv';

import { redisConnect } from './servises/redis';
import { insertMockData } from './servises/postgres';

import app from './app';

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

const startServer = async () => {
  config();
  await redisConnect();
  await insertMockData();
  server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
};

startServer();
