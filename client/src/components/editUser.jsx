import styled from "@emotion/styled";
import { FormGroup,FormControl,InputLabel,Input, Typography, Button } from "@mui/material";
import { useState,useEffect } from "react";
import { editUser, getUser } from "../service/api";
import {useNavigate, useParams} from 'react-router-dom'



const Container=styled(FormGroup)`
width:40%;
margin: 40px auto 0 auto;
& > div{
    margin-top:20px;
}`

const defaultValue={
    name:"",
    username:"",
    email:"",
    phone:""
}

const EditUser =()=>{
    const [user,setUser]=useState(defaultValue)
    const navigate=useNavigate();
    const {id}=useParams();
    useEffect(()=>{
        loadUserDetails();
    },[])
   

    const loadUserDetails=async()=>{
        const response=await getUser(id)
        // console.log(response.data)
        setUser(response.data)
    }

    const onValueChange=(e)=>{
        // console.log(e.target.value)
        setUser({...user,[e.target.name]:e.target.value})
        // console.log(user)
    }
    const editUserDetails=async()=>{
        await editUser(user,id);
        navigate('/all')
    }

    return(
       <Container>
       <Typography variant="h4">Edit User</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e)=>onValueChange(e)} name="name" value={user.name}/>
        </FormControl>
        <FormControl>
            <InputLabel>Username</InputLabel>
            <Input onChange={(e)=>onValueChange(e)} name="username" value={user.username}/>
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={(e)=>onValueChange(e)} name="email" value={user.email}/>
        </FormControl>
        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={(e)=>onValueChange(e)} name="phone" value={user.phone}/>
        </FormControl>
        <FormControl>
            <Button variant="contained" onClick={()=>editUserDetails()} >Edit User</Button>
        </FormControl>
       </Container>
    )
}

export default EditUser;