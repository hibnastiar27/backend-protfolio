const express = require("express");
const Uer = require("../models/User");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        msg: "User Sudah Ada",
      });
    }

    user = new User({
      name,
      email,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();
    res.status(201).json({
      msg: `User ${name} Berhasil Dibuat`,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        msg: "Invalid Credentials",
      });
    }

    const isCocok = await bcrypt.compare(password, user.password);
    if (!isCocok) {
      return res.status(400).json({
        msg: "Invalid Credentials",
      });
    }

    res.status(200).json({
      msg: "Login Successfull",
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
