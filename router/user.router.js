const { Router } = require("express");
const { register, login_user } = require("../controller/user.controler");

const userRoute = Router();

userRoute.route("/register").post(register);

userRoute.route("/login").post(login_user);

module.exports = userRoute;
