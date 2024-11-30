const User = require("../models/user"); // Adjust the path as necessary
const bcrypt = require("bcrypt");
// Create user controller function
const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  const user = new User({ username, email, password });
  try {
    const savedUser = await user.save();
    res.status(201).send({
      success: true,
      messsage: "user creation successfull",
      user: {
        username: savedUser.username,
        email: savedUser.email,
      },
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

// Login user and return JWT
async function loginUser(req, res) {
  const { email, password } = req.body;
    console.log("login user");
    
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const isMatch = user.comparePassword(password);    
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = user.generateJWT();
    res.
    status(200)
    .json({
        success:true,
        message:"login successfull",
        user:{
            username:user.username,
            email:user.email
        }, 
        accesstoken:token 
        });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { createUser, loginUser };
