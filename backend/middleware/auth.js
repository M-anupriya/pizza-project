const auth = (req, res, next) => {
  const user = req.headers["user"];

  if (!user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  req.user = JSON.parse(user);
  next();
};

module.exports = auth;