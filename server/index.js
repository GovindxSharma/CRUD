import express  from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv'
import Router from './routes/route.js';
import cors from 'cors'
import bodyParser from 'body-parser';

const app=express();


dotenv.config();
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
app.use('/' ,Router)
const port =8000;
const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;

Connection(username,password);
app.listen(port,()=>console.log(`Server is Up at port:${port}`))