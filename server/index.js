import express  from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv'
import Router from './routes/route.js';
import cors from 'cors'
import bodyParser from 'body-parser';
import path from 'path'

const app=express();


dotenv.config({path:'server/.env'});
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());



//  app.get("/", (req, res) => {
//    res.send("API is running..");
//  });


app.use('/api',Router)

// ------------------------------DEPLOYMENT---------------------------------//

const __dirname1 = path.resolve() 
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

//   ------------------------------DEPLOYMENT---------------------------------//

const port =process.env.PORT ||8000;


Connection();
app.listen(port,()=>console.log(`Server is Up at port:${port}`))