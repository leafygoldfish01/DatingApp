import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import debug from 'debug';
const debugServer = debug('app:Server');
import {ping, getPeople} from './database.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('reactApp/dist'));
const port = process.env.PORT || 2023;

//API
app.get('/api/people/list', async (req, res) => {
  try{
    const people = await getPeople();
    res.status(200).json(people);
  }catch(error){
    console.log(error);
    res.status(500).json({message: "Error getting people"});
  }
});

app.listen(port, () => {
  debugServer(`Server running at http://localhost:${port}`);
});