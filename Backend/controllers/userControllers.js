const asynchandler = require('express-async-handler');
const generateToken = require('../confiq/generateToken');
const User = require('../models/userModel');
const registerUser = asynchandler (async(req,res) => {

    const {name, email, password, picture} = req.body;
    if(!name || !email || !password){
        res.status(400);
        throw new Error("Please Enter all the fields");
    }

    const userExists = await User.findOne({email});

    if(userExists){
        res.status(400);
        throw new Error("User already exists");
    }

    const user = await User.create({
        name,
        email,
        password,
        picture,
    })

    if(user){
        res.status(200).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            picture:user.picture,
            token: generateToken(user._id),
        });
    }else{
        res.status(400);
        throw new Error("Failed to create the user");
    }

});

const authUser = asynchandler(async(req,res)=>{
    const {email,password} = req.body;

    const user = await User.findOne({email});

    if(user && (await user.matchPassword(password))){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            picture:user.picture,
            token: generateToken(user._id),
        })
    }else{
        res.status(401);
        throw new Error("Invalid email & password");
    }
})

// /api/user?search=iqbal
const allUsers = asynchandler(async (req, res) => {
    const keyword = req.query.search
      ? {
          $or: [
            { name: { $regex: req.query.search, $options: "i" } },
            { email: { $regex: req.query.search, $options: "i" } },
          ],
        }
      : {};
  
    const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
    res.send(users);
  });

module.exports = {registerUser, authUser, allUsers};