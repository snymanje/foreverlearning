import express, { Application } from 'express';
// Load configuration
import dotenv from 'dotenv';
dotenv.config();
import config from './config/config';

// Load uncaught exceptions handler
import './startup/uncaughtExceptionsHandler';
// Start DB
import './startup/db';

// Initialte an instance of an express app
const app: Application = express();

// Load route configurations
import routeConfig from './startup/routes';
routeConfig(app);

console.log('Before server start');
// Start application
app.listen(config.serverPort, async () => {
  console.log(`Server started on port ${config.serverPort}!`);
});
