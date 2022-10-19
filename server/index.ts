import express, { Request, Response } from 'express';
import cors from 'cors';
import { appRouter } from './src/routers/app.router';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/', appRouter);

console.log('Starting Server...');
app.listen(PORT, () => {
  console.log(`Started listening on ${PORT}`);
});
