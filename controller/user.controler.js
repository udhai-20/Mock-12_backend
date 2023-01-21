const { generateToken } = require("../helper/genratetoken");
const { UserModel } = require("../model/user.model");

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(name, email);
    const userPresent = await UserModel.findOne({ email });
    if (userPresent) {
      res.status(400).send("User Already Exists");
    }
    const user = await UserModel.create({ name, email, password });
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        message: "registerd successfully",
      });
    } else {
      res.status(400).send("Error Occured");
    }
  } catch (err) {
    console.log("err", err);
  }
};
const login_user = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await UserModel.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      res.status(201).send({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
        pic: user.pic,
      });
    } else {
      res.status(400).send("Invalid Email or Password");
      throw new Error("Invalid Email or Password");
    }
  } catch (err) {
    console.log("err", err);
  }
};

module.exports = { register, login_user };
