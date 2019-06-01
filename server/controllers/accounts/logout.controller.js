const userLogout = (req, res) => {
  if (req.session.email) {
    delete req.session.email;
    return res.send({ error: false });
  }
  return res.send({ error: true });
};

module.exports = { userLogout };
