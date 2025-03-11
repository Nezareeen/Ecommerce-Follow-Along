const express = require("express");
const bcrypt = require("bcryptjs");
const userRouter = express.Router();
const uploadUserImage = require("../middlewares/multer");
const { userModel } = require("../models/userModel"); // Corrected import

userRouter.post("/signup", uploadUserImage.single("image"), async (request, response) => {
  try {
    const { name, email, password } = request.body;
    if (!name || !email || !password) { // Corrected validation logic
      return response.status(400).send({ msg: "All fields are required" });
    }
    const user = await userModel.findOne({ email: email }); // Corrected method name
    console.log(user);
    if (user) {
      return response.status(200).send({ msg: "User already exists" });
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new userModel({ name, email, password: hash }); // Corrected to create a new model instance
    await newUser.save(); // save the new user to the database

    return response.status(200).send({ message: "User registered successfully" });
  } catch (error) {
    console.error("Signup error:", error); // Log the error for debugging
    return response.status(500).send({ msg: "Something went wrong!" });
  }
});

userRouter.post("/login", async (request, response) => { //corrected userRouter.post
  try {
    const { email, password } = request.body;
    if (!email || !password) { // Corrected validation logic
      return response.status(400).send({ msg: "All fields are required" });
    }

    const user = await userModel.findOne({ email }); // Corrected method name
    if (!user) {
      return response.status(401).send({ msg: "Entered details are wrong" }); // User not found
    }

    const matchedPass = bcrypt.compareSync(password, user.password); // Compare with stored hashed password

    if (matchedPass) {
      return response.status(200).send({ msg: "User logged in successfully" });
    }
    return response.status(401).send({ msg: "Entered details are wrong" }); // Password mismatch
  } catch (error) {
    console.error("Login error:", error); // Log the error for debugging
    return response.status(500).send({ msg: "Something went wrong!" });
  }
});

module.exports = userRouter;