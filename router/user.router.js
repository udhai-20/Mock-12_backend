const { Router } = require("express");
const {
  register,
  login_user,
  calculate,
  profile,
} = require("../controller/user.controler");

const userRoute = Router();

userRoute.route("/register").post(register);

userRoute.route("/login").post(login_user);

userRoute.route("/profile/:id").get(profile);

userRoute.route("/calculate").post(calculate);

module.exports = userRoute;
