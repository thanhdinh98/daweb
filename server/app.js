const express = require('express');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');
const models = require('./models');

const app = express();
const port = process.env.PORT || 5000;

// caching disabled for every route
app.use((req, res, next) => {
  res.set(
    'Cache-Control', 'no-cache, private, no-store, must-revalidaste, max-stale=0, post-check=0, pre-check=0',
  );
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 60 * 24 },
}));

// using route
app.use('/api/account', require('./routes/account.route'));
app.use('/api/movie', require('./routes/movie.route'));

models.sequelize.sync({ force: true }).then(() => {
  app.listen(port);
});
