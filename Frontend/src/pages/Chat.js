
import React from 'react';
import {Container,Box,Paper,Grid, List, ListItemText, ListItem, ListItemAvatar, InputBase, Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import DirectionsIcon from '@material-ui/icons/Directions';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const Chat = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  let users = [
    {
      "name":"users1"
    },
    {
      "name":"users2"
    },
    {
      "name":"users3"
    },
    {
      "name":"users4"
    }
  ]
  return (
    <>
      <Container maxWidth="xl" style={{margin:"5px"}}>
        <Paper elevation={3} style={{padding:"4px"}}>
        <Box >
        <Grid container direction='row' alignItems="center">
        <Grid item xl={1}>
        <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            {renderMenu}
        </Grid>
        <Grid item>
        <InputBase
        className={classes.input}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
        </IconButton>
        </Grid>
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton color="primary" className={classes.iconButton} aria-label="directions">
        <DirectionsIcon />
        </IconButton>
        </Grid>
        </Box>
        </Paper>
      </Container>

      <Container maxWidth="xl" style={{margin:"5px"}}>
      <Grid container direction="row"
      justifyContent="center">
      <Grid item xl={3} lg={4} md={4} sm={4} xs={4} style={{height:"80vh"}}>
      <Paper elevation={3} style={{height:"80vh",padding:"10px",margin:"3px"}}>
        <Typography>
          All Users
        </Typography>
      <Divider/>
      <Box style={{overflow:"auto",height:"65vh",marginTop:"2px"}}>
      <List className={classes.root}>
        <ListItem button onClick={()=>console.log("clicked")}>
          <ListItemAvatar>
            <Avatar/>
          </ListItemAvatar>
          <ListItemText primary="Users"/>
        </ListItem>
      </List>
      </Box>
      </Paper>
      </Grid>

      <Grid item xl={6} lg={8} md={6} sm={6} xs={6} style={{height:"80vh",margin:"0px"}}>
      <h1>Box</h1>
      </Grid>
      </Grid>
      </Container>
    </>
  )
}

export default Chat