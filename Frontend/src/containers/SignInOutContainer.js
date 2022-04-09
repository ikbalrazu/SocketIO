

import React from 'react'
import Paper from '@material-ui/core/Paper';
import {Tab, Tabs, Box, Typography } from '@material-ui/core';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const SignInOutContainer = () => {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const paperStyle = {
    width:320,
    margin:"20px auto"
  }

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
      <Paper square style={paperStyle}>
      <Tabs 
      value={value} 
      onChange={handleChange} 
      aria-label="disabled tabs example"
      >
        <Tab label="Sign In" />
        <Tab label="Sign Up" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Login/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SignUp/>
      </TabPanel>
      </Paper>
  )
}

export default SignInOutContainer;
