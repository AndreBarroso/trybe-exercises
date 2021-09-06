
function getPing (_req, res) {
  res.status(201).json({ message: "pong!" });
}

module.exports = {
  getPing,
}