const express = require('express');

const app = express();
const session = require('express-session');

const port = process.env.PORT || 5000;

// caching disabled for every route
app.use((req, res, next) => {
  res.set(
    'Cache-Control', 'no-cache, private, no-store, must-revalidaste, max-stale=0, post-check=0, pre-check=0',
  );
  next();
});

// using session
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 60 * 24 },
}));

// Routes
const indexRouter = require('./routes/index.route');
const loginRouter = require('./routes/login.route');
const logoutRouter = require('./routes/logout.route');
const registerRouter = require('./routes/register.route');

// using route
app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/logout', logoutRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
