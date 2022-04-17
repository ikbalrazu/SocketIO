
import React from 'react';
import {Container,TextField,Backdrop,Fade,Button,Modal,Box,Paper,Grid, List, ListItemText, ListItem, ListItemAvatar, InputBase, Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import CreateIcon from '@material-ui/icons/Create';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {useNavigate} from 'react-router-dom';

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
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Chat = () => {
  const userInfo = JSON.parse(localStorage.getItem("userinfo"));

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
      <MenuItem onClick={handleMenuClose}>{userInfo.name}</MenuItem>
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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("userinfo");
    navigate("/");
  }

  
  console.log(userInfo);

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <TextField label="Group Name" fullWidth required/>
          <TextField label="Add Users" fullWidth required/>
          <Button
        variant="contained"
        className={classes.button}
        startIcon={<CreateIcon />}
        style={{marginLeft:"15px"}}
        onClick={handleClose}
      >
      
      </Button>
          </div>
        </Fade>
      </Modal>
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
        <IconButton color="primary" className={classes.iconButton} aria-label="directions" onClick={logoutHandler}>
        <ExitToAppIcon />
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
        <div style={{display:"flex"}}>
        <Typography>
          All Users
        </Typography>

        <Button
        variant="contained"
        className={classes.button}
        startIcon={<CreateIcon />}
        style={{marginLeft:"15px"}}
        onClick={handleOpen}
      >
      
      </Button>
      </div>
      <Divider/>
      <Box style={{overflow:"auto",height:"65vh",marginTop:"2px"}}>
      <List className={classes.root}>
        {users.map((data,index)=>{
          return(
            <ListItem button onClick={()=>console.log("clicked")}>
            <ListItemAvatar>
              <Avatar/>
            </ListItemAvatar>
            <ListItemText primary={data.name}/>
            </ListItem>
          )
          
        })}
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