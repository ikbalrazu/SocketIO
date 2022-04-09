
import React from 'react';
import { Grid, Paper, Avatar, Link, TextField, FormGroup, FormControlLabel, Checkbox, Button, Typography } from '@material-ui/core';
import {AddCircleOutline} from '@material-ui/icons';

const SignUp = () => {

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
            <AddCircleOutline/>
            </Avatar>
            <h1>Sign Up</h1>
            </Grid>
            <Grid>
            <TextField label="Name" fullWidth required/>
            <TextField label="Email" fullWidth required/>
            <TextField label="Password" type='password' fullWidth required style={{marginTop:"10px"}}/>
            <TextField label="Confirm Password" type='password' fullWidth required style={{marginTop:"10px"}}/>
            <FormGroup style={{marginTop:"5px",marginBottom:"5px"}}>
            <FormControlLabel 
            control={
            <Checkbox
            name="checkedBox"
            color="primary"  
            />
            } label="I accept the terms & condition" />
            </FormGroup>
            <Button variant="contained" color="primary" fullWidth style={{marginBottom:"15px"}}>Sign Up</Button>
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
    </Grid>
  )
}

export default SignUp