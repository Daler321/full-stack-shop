import express from 'express';
import cors from 'cors';
import path from 'path';

import api from './routes/api';

const app = express();

app.use(
  cors({
    origin: '*',
  })
);

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/v1', api);

// app.get('/', (req, res) => {
//   res.send('<h1>Hellooooooooooo!</h1>');
// });

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

export default app;
