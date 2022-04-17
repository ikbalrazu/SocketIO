
import React,{useState} from 'react';
import { Grid, Paper, Avatar, Link, TextField, FormGroup, FormControlLabel, Checkbox, Button, Typography, IconButton  } from '@material-ui/core';
import {AddCircleOutline, PhotoCamera } from '@material-ui/icons';
import { styled } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const SignUp = () => {
    
    const Input = styled('input')({
        
      });

    const paperStyle= {
        padding:20,
        height: '74vh',
        width: 300,
        margin: '0 auto'
    }

    //all state
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [confirmpassword,setConfirmpassword] = useState();
    const [picture,setPicture] = useState();
    const [loading, setLoading] = useState(false);
    const [btndisable,setBtndisable] = useState(false);
    const [alert,setAlert] = useState("");

    const navigate = useNavigate();

    const handleClick = () => {

    }
    const postDetails = (picture) =>{
        // setLoading(true);
        // setBtndisable(true);
        if(picture === undefined){
            return <Alert severity="info">This is an info alert — check it out!</Alert>
        }

        if(picture.type === "image/jpeg" || picture.type === "image/png"){
            const data = new FormData();
            data.append("file",picture);
            data.append("upload_preset","MERN-Chat-Application");
            data.append("cloud_name", "iqbalraju");
            fetch("https://api.cloudinary.com/v1_1/iqbalraju/image/upload",{
                method: "post",
                body: data,
            }).then((res)=>res.json())
              .then((data)=>{
                  console.log(data);
                  console.log(data.url.toString());
                  setPicture(data.url.toString());
                // setLoading(false);
                // setBtndisable(false);
              })
              .catch((err)=>{
                  console.log(err);
                //   setLoading(false);
                //   setBtndisable(false);
              });
        }

    }
    const submitHandler = async() =>{
        if(!name || !email || !password){
            setAlert("Plz fill all the fields")
            
        }
        if(password !== confirmpassword){
            setAlert("Password do not match!")
        }

        try{

            const confiq = {
                    headers:{
                        "Content-type": "application/json",
                    },
                };

            const {data} = await axios.post("http://localhost:4000/api/user",{name,email,password,picture},confiq) 
            console.log(data);
            localStorage.setItem("userinfo",JSON.stringify(data));
            navigate("/chat");
        }catch(error){
            console.log(error);
        }

    }

  return (
    <Grid>
        <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
            <Avatar style={{backgroundColor:"green"}}>
            <AddCircleOutline/>
            </Avatar>
            <h1>Sign Up</h1>
            </Grid>
            <Grid>
            <TextField label="Name" fullWidth required onChange={(e)=>setName(e.target.value)}/>
            <TextField label="Email" fullWidth required onChange={(e)=>setEmail(e.target.value)}/>
            <TextField label="Password" type='password' onChange={(e)=>setPassword(e.target.value)} fullWidth required style={{marginTop:"10px"}}/>
            <TextField label="Confirm Password" type='password' onChange={(e)=>setConfirmpassword(e.target.value)} fullWidth required style={{marginTop:"10px"}}/>
            <Grid style={{marginTop:"10px"}}>
            <label htmlFor="icon-button-file">
                <Input accept="image/*" id="icon-button-file" type="file" onChange={(e) => postDetails(e.target.files[0])}/>
                <IconButton color="primary" aria-label="upload picture" >
                {/* <PhotoCamera /> */}
                </IconButton>
            </label>
            </Grid>
            <FormGroup style={{marginTop:"5px",marginBottom:"5px"}}>
            <FormControlLabel 
            control={
            <Checkbox
            name="checkedBox"
            color="primary"  
            />
            } label="I accept the terms & condition" />
            </FormGroup>
            <Button variant="contained" disabled={btndisable} onClick={submitHandler} color="primary" fullWidth style={{marginBottom:"15px"}}><CircularProgress variant="indeterminate" disableShrink={loading}/>Sign Up</Button>
            {/* <Typography>
                <Link href="#">
                    Forgot Password ?
                </Link>
            </Typography>
            <Typography>
                <Link href="#">
                    Do you have an account ?
                </Link>
            </Typography> */}
            
            </Grid>
            
        </Paper>
        <Alert severity="warning">{alert}</Alert>
    </Grid>
  )
}

export default SignUp