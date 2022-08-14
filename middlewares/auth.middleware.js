const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const authHeaders = req.headers["authorization"];

  const token = authHeaders && authHeaders.split(" ")[1];

  if (!token)
    return res.status(401).json({
      messeage: "no token provider",
    });
  try {
    const payload = jwt.verify(token, "jwtKeyUser");

    req.user = payload;

    next();
  } catch (error) {
    res.status(500).json({
      messeage: "token is notvalid",
    });
  }
};
