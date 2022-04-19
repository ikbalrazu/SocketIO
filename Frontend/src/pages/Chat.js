
import React from 'react';
import {Container,Drawer,Badge,TextField,Backdrop,Fade,Button,Modal,Box,Paper,Grid, List, ListItemText, ListItem, ListItemAvatar, InputBase, Avatar, Typography } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import CreateIcon from '@material-ui/icons/Create';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {useNavigate} from 'react-router-dom';
import { ChatState } from '../Context/ChatProvider';
import CloseIcon from '@material-ui/icons/Close';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SideDrawer from '../components/SideDrawer';


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
  Accountmodal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Accountpaper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid white',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height:"auto",
  },
  drawer:{
    width: 250,
  },
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

//search autocomplete
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 }
];


const Chat = () => {
  const userInfo = JSON.parse(localStorage.getItem("userinfo"));
  const {user} = ChatState();

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const [openAccount, setOpenAccount] = React.useState(false);

  const MyAccount = () => {
    handleMenuClose();
    setOpenAccount(true);
  };

  const handleClose2 = () => {
    setOpenAccount(false);
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
      <MenuItem onClick={MyAccount}>My Profile</MenuItem>
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

  const [state,setState] = React.useState(false);
  const toggleDrawer = (open) => (event) =>{
    setState(open);
  }

  const list = () =>{
    <List className={classes.drawer}>
      <ListItem>iT WORKS,fgdfgdddgggggggg WELL DONE</ListItem>
    </List>
  }

  

  return (
    <>
      {/* {user && <SideDrawer/>} */}

      
      
      {/* modal for My Account */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.Accountmodal}
        open={openAccount}
        onClose={handleClose2}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openAccount}>
          <div className={classes.Accountpaper}>
            <Grid container alignContent='center' direction='column' spacing={1}>
              
              <Grid item>
              <div style={{position:"relative",float:"right"}}>
              <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleClose2}
              color="inherit"
              >
              <CloseIcon/>
              </IconButton>
              </div>
              </Grid>

              <Grid item style={{border:"2px solid white"}}>
              <Avatar src={userInfo.picture} style={{height:"220px",width:"220px"}}/>
              </Grid>
              
              <Grid item>
                <Typography>
                  {userInfo.name}
                </Typography>
              </Grid>
              <Grid item>
                <Typography>
                  {userInfo.email}
                </Typography>
              </Grid>
            
            </Grid>
            
          
          </div>
        </Fade>
      </Modal>

      {/* modal for rename group */}
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

        <Grid item style={{position:"relative",float:"right"}}>
        {/* <InputBase
        className={classes.input}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search google maps' }}
        /> */}
        <IconButton type="submit" onClick={toggleDrawer(true)} className={classes.iconButton} aria-label="search">
        <SearchIcon />
        <Typography>
          Search
        </Typography>
        </IconButton>
        <Drawer
        anchor={'left'}
        open={state}
        onClose={toggleDrawer(false)}
        >
        <List className={classes.drawer}>
          <ListItem button>
          <div style={{ width: 300 }}>
          <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={top100Films.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search input"
              margin="normal"
              variant="outlined"
              InputProps={{ ...params.InputProps, type: 'search' }}
            />
          )}
          />
          </div>
          </ListItem>
        </List>
        </Drawer>
        </Grid>
        
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton color="primary" className={classes.iconButton} aria-label="directions" onClick={logoutHandler}>
        <ExitToAppIcon />
        </IconButton>

          
          <Grid item>
          <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={1} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Grid>

        <Grid item xl={1}>
        <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              {/* <AccountCircle src={userInfo.picture}/> */}
              <StyledBadge
              overlap="circular"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              variant="dot"
            >
              <Avatar alt="Remy Sharp" style={{height:"30px",width:"30px"}} src={userInfo.picture} />
            </StyledBadge>
            </IconButton>
            {renderMenu}
        </Grid>
       
        
        
        
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
              <Avatar src={userInfo.picture}/>
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