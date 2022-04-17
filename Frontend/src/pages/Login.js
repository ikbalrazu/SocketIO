
import React,{useState} from 'react';
import { Grid, Paper, Avatar, Link, TextField, FormGroup, FormControlLabel, Checkbox, Button, Typography } from '@material-ui/core';
import {Lock} from '@material-ui/icons';
import Chat from './Chat';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Login = ({handleChange}) => {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const paperStyle= {
        padding:20,
        height: '70vh',
        width: 300,
        margin: '0 auto'
    }

    const history = useNavigate();

    const submitHandler = async ()=>{
        try{
            const confiq = {
                headers:{
                    "Content-type": "application/json",
                },
            };

            const {data} = await axios.post("http://localhost:4000/api/user/login",{email,password},confiq);
            console.log(data); 
            localStorage.setItem("userinfo",JSON.stringify(data));
            history("/chat");
        }catch(error){
            console.log(error);
        };
    }
  return (
    <Grid>
        <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
            <Avatar style={{backgroundColor:"green"}}>
            <Lock/>
            </Avatar>
            <h1>Sign In</h1>
            </Grid>
            <Grid>
            <TextField label="Email" onChange={(e)=>setEmail(e.target.value)} fullWidth required/>
            <TextField label="Password" onChange={(e)=>setPassword(e.target.value)} type='password' fullWidth required style={{marginTop:"10px"}}/>
            <FormGroup style={{marginTop:"5px",marginBottom:"5px"}}>
            <FormControlLabel 
            control={
            <Checkbox
            name="checkedBox"
            color="primary"  
            />
            } label="Remember me" />
            </FormGroup>
            <Button onClick={submitHandler} variant="contained" color="primary" fullWidth style={{marginBottom:"15px"}}>Sign In</Button>
            <Typography>
                <Link href="#">
                    Forgot Password ?
                </Link>
            </Typography>
            <Typography>
                <Link href="#" onClick={()=>handleChange("event",1)}>
                    Do you have an account ?
                </Link>
            </Typography>
            </Grid>
            
        </Paper>
    </Grid>
  )
}

export default Login