import express from 'express';
import router from './src/router';

const app = express();

if (!process.env.PORT) {
  require('dotenv').config();
}

app
  .use(express.json({limit: '50mb'}))
  .use('/api', router);

app.listen(process.env.PORT, () => {
  console.log(`server listing on port ${process.env.PORT}`);
});