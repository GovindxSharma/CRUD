import mongoose from "mongoose";

const userSchema=mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        }, 
        index: {
            type: Number,
            autoIncrement: true // something like this?
        }
    }
)

const user=mongoose.model('user',userSchema)

export default user;