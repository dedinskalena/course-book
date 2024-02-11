const bcrypt=require('bcrypt')
const User=require('../models/User')

exports.register=(userData)=>{
    if(userData.rePasword!==userData.password){
        throw new Error('Password missmatch')
    }
    return User.create(userData)
}

exports.login=async ({email,password})=>{
    //get user from db
    const user=await User.findOne({email})
     if(!user){
        throw new Error('Email or Password is invalid')
     }
    //check password
     const isValid=await bcrypt.compare(password,user.password)
     if(!isValid){
        throw new Error('Email or Password is invalid')
     }
    //ganerate token

    //return token
}