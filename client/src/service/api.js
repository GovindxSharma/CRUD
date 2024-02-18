import axios from 'axios'

// const URL = "http://127.0.0.1:8000";
export const addUser =async(data)=>{
    try{
        return await axios.post(`/api/add`,data)
    }catch(error){
        console.log('Error while calling addUser Api',error)
    }
}

export const getUsers =async(data)=>{
    try{
        return await axios.get(`/api/all`,data)
    }catch(error){
        console.log('Error while calling addUser Api',error)
    }
}

export const getUser=async(id)=>{
    try{
        return await axios.get(`/api/${id}`)
    }catch(error){
        console.log('Error while calling getUser Api',error)
    }
}

export const editUser =async(data,id)=>{
    try{
        return await axios.put(`/api/${id}`,data)
    }catch(error){
        console.log('Error while calling editUser Api',error)
    }
}

export const delUser =async(id)=>{
    try{
        return await axios.delete(`/api/${id}`)
    }catch(error){
        console.log('Error while calling delUser Api',error)
    }
}
