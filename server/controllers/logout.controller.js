const userLogout = (req, res) => {
  if (req.session.email) {
    delete req.session.email;
  }
  res.redirect('../');
};

module.exports = { userLogout };
