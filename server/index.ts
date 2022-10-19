import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

console.log('Starting Server...');
app.listen(PORT, () => {
  console.log(`Started listening on ${PORT}`);
});
