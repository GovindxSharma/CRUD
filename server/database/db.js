import mongoose from "mongoose";

const Connection = async (username, password) => {
    const dbName = process.env.MONGODB_NAME; // Retrieve the database name from environment variables
    const URL = `mongodb+srv://${username}:${password}@crud-app.9kzvdlv.mongodb.net/${dbName}?retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true, // These options are optional but recommended for better handling of MongoDB connections
            useUnifiedTopology: true
        });
        console.log('Database connected Successfully');
    } catch (error) {
        console.log('Error while connecting to DataBase', error);
    }
}

export default Connection;
