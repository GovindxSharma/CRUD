import mongoose from "mongoose"
const Connection= async(username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@crud-app.9kzvdlv.mongodb.net/?retryWrites=true&w=majority`;
    try{
        
         await mongoose.connect(URL);

        console.log('Database connected Successfully')
    }catch(error){
        console.log('Error while connecting to DataBase',error)
    }
}

export default Connection;