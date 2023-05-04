import express from 'express'
import cors from 'cors'
import axios from 'axios'
import imageRoute from './route/imageRoute.js'
import * as dotenv from 'dotenv'
dotenv.config()

const app = express();
const PORT = process.env.PORT;

app.use(cors());

app.use('/api',imageRoute);

app.listen(PORT, ()=>{
    console.log(`server started at http://localhost:${PORT}`)
})
