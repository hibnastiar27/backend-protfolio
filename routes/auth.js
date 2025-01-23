const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Cek User Sudah Ada atau Belum
    let cekUser = await User.findOne({ email });
    if (cekUser) {
      return res.status(400).json({
        msg: "User Sudah Ada",
      });
    }

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Simpan user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // await user.save();
    res.status(201).json({
      msg: `User ${name} Berhasil Dibuat`,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      msg: "Server Error",
      err,
    });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Cari user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        msg: "User Not Found",
      });
    }

    // cek password
    const isCocok = await bcrypt.compare(password, user.password);
    if (!isCocok) {
      return res.status(400).json({
        msg: "Invalid Credentials",
      });
    }

    const JWT_SECRET = process.env.JWT_SECRET;

    // JWT
    const token = jwt.sign({ id: user._id }, JWT_SECRET, {
      algorithm: "HS256",
      expiresIn: "30m",
    });

    res.status(200).json({
      msg: "Login Successfull",
      token: token,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      msg: "Server Error",
      err,
    });
  }
});

module.exports = router;
