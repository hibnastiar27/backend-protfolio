const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.header("Authorization");

  //   Periksa apakah token ada?
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      msg: "No token, Authorization denied",
    });
  }

  //   Ambil token tanpa Bearer
  const token = authHeader.split(" ")[1];

  try {
    //  Verifikasi token
    const decode = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decode;

    next();
  } catch (err) {
    res.status(401).json({
      msg: "Token is not valid",
    });
  }
};

module.exports = authMiddleware;
