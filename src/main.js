import express from 'express'
import cors from 'cors'
import axios from 'axios'
import imageRoute from './route/imageRoute.js'
import * as dotenv from 'dotenv'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

dotenv.config()

const app = express();
const PORT = process.env.PORT;
const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

const corsOptions = {
  origin: '*'
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
  });
//  app.use(express.static(__dirname + '/views/index.html'));

app.use('/api',imageRoute);

app.listen(PORT, ()=>{
    console.log(`server started at http://localhost:${PORT}`)
})
