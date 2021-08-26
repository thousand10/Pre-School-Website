const express = require("express");
const route = express.Router();

const indexController = require("../controllers/index");
const contactController = require("../controllers/contact");
const aboutController = require("../controllers/about");
const usController = require("../controllers/gallery");
const loginController = require("../controllers/login");
const signupController = require("../controllers/signup");



route.get("/", indexController)

route.get("/contact", contactController);

route.get("/about", aboutController);

route.get("/gallery", usController);

route.get("/auth", loginController);

route.get("/auth/signup", signupController);


module.exports = route;