
import React from 'react';
import { Grid, Paper, Avatar, Link, TextField, FormGroup, FormControlLabel, Checkbox, Button, Typography } from '@material-ui/core';
import {Lock} from '@material-ui/icons';

const Login = ({handleChange}) => {

    const paperStyle= {
        padding:20,
        height: '70vh',
        width: 300,
        margin: '0 auto'
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
            <TextField label="Username" fullWidth required/>
            <TextField label="Password" type='password' fullWidth required style={{marginTop:"10px"}}/>
            <FormGroup style={{marginTop:"5px",marginBottom:"5px"}}>
            <FormControlLabel 
            control={
            <Checkbox
            name="checkedBox"
            color="primary"  
            />
            } label="Remember me" />
            </FormGroup>
            <Button variant="contained" color="primary" fullWidth style={{marginBottom:"15px"}}>Sign In</Button>
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