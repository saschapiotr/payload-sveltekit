import express from 'express';
import payload from 'payload';

require('dotenv').config();
const app = express();

// Initialize Payload

payload.init({
  secret: process.env.PAYLOAD_SECRET,
  mongoURL: `mongodb://${process.env.MONGO_CONTAINER_NAME}:27017${process.env.MONGODB_URL}`,
  express: app,
  onInit: () => {
    payload.logger.info(`Mongo URL: mongodb://${process.env.MONGO_CONTAINER_NAME}:27017${process.env.MONGODB_URL}`);
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
  },
});

// Add your own express routes here

app.listen(process.env.PAYLOAD_PORT);