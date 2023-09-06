const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer=require('nodemailer');
const otpGenerator = require('otp-generator')
const path=require('path');
const { userModel } = require("../models/user.model");
const { UserOTP } = require("../models/otp.model");
require('dotenv').config()


// user registration router function 
const registerUser = async (req, res) => {
  const {email,password}=req.body;
  const user=await userModel.find({email});
 
  //console.log(Phone_No)
  try {
      
      // console.log(user)
      if(user.length===0){
          const hash = await bcrypt.hash(password, 5);
          let userp= new userModel({...req.body, password:hash, verify:false});
           await userp.save();
          let OTP= otpGenerator.generate(6, { upperCaseAlphabets: true, specialChars: true }); //otp generation;
              let otp=new UserOTP({Useremail:email,otp:OTP,createdAt:new Date(),expireAt:new Date()+86400000});
              otp.save();                                                                          // saving the otp in backend
              let tokenOTP=jwt.sign({'Useremail':email},'masai');                    // token genration to pass unique email for verification through otp
              sendOTPforverification(email,OTP);                                                  //  sending email
              res.status(200).send({msg:"Please verify your email !","token":tokenOTP});         // response     
      }
      else{
          if(user[0].verify){
              res.status(400).send({msg:"user already exist please Login!"})
          }else{
              res.status(400).send({msg:"user already exist please verify your email !"})
          }
          
      }
  } catch (error) {
      console.log(error.message);
      res.status(400).send({msg:"error can't register the user"})
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const data = await userModel.findOne({ email });
    if (data) {
      if(data.verify){
        let checker = bcrypt.compareSync(password, data.password);
        if (checker) {
          return res.status(200).json({
            success: true,
            msg: "login successfull",
            data,
            token: jwt.sign({ userId: data._id }, process.env.access_token, {
              expiresIn: "3h",
            }),
          });
        } else {
          return res.status(400).send({ msg: "wrong password" });
        }
      }else{
        return res.status(404).json({
          msg: "verify your email first!"
        })
      }
    } else {
      return res.status(400).json({ msg: "invalid email" });
    }
  } catch (error) {
    return res.status(404).json({ err: error.message });
  }
};



// verify the opt sent on the users email

const optVerifier = async(req,res)=>{
  const {Useremail,otp}=req.body;
  // console.log(req.body);
  const user=await userModel.find({email:Useremail});
  const databaseotp=await UserOTP.find({Useremail});
   try {
      //if(databaseotp.length>0){
          // console.log("otp",otp)
     if(otp==databaseotp[0].otp){
      await userModel.findByIdAndUpdate(user[0]._id, { verify: true });
      await UserOTP.deleteMany({Useremail});
      return res.status(200).json({msg:"Email verified", success: true});
     }else{
      res.status(200).json({msg:"Wrong otp !"});
     }
   } catch (error) {
    console.log(error.message || error);
      res.status(500).send({msg:"Network error !"});
   }   
}



function sendOTPforverification(email,otp){
  transporter
  .sendMail({
     from:process.env.mailer,
     to:email,
     subject:"Verify your Email for registraion on LawLink",
     text:"hey it's",
     html:`<h1>OTP for email verification:${otp}</h1>`
  })
  .then(()=>{
     console.log("mail sent succesfully")
  })
  .catch((err)=>{
     console.log(err)
  })
}

const transporter = nodemailer.createTransport({
  service:'gmail',
  host: 'smtp.gmail.email',
  port: 587,
  secure:false,
  auth: {
      user: process.env.mailer,
      pass: 'qywxxoqbegsepgku'
  }
});


// google registration
const googlRegister = async (req, res) => {
  try {
    const data = req.body;
    const isUser = await userModel.findOne({email: data.email});
    if(isUser){
      return res.status(201).json({
        success: true
      })
    }
    const hash = await bcrypt.hash(password, 5);
    const userData = new userModel({...data, password: hash, verify: true});
    await userData.save();
    return res.status(200).json({
      success: true
    })
  } catch (error) {
    return res.status(500).json({
      msg: error.message
    })
  }
}

module.exports = { registerUser, loginUser, optVerifier, googlRegister };
