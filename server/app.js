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

//
app.get('/add/cinema', async (req, res) => {
  await models.Cinema.create({
    name: 'CGV GV',
    address: '227 NVC',
  });
  res.end('inserted cineam');
});

app.get('/add/room', async (req, res) => {
  await models.Room.create({
    cinemaID: 1,
    name: 'Phong 1',
    type: '2dx',
    rowSize: 5,
    columnSize: 12,

  });
  res.end('inserted room');
});

app.get('/add/movie', async (req, res) => {
  await models.Movie.create({
    nameMovie: 'aquaman',
    genre: 'action',
    release: Date(),
    poster: 'vien/dd',
    duration: 123,
  });
  res.end('inserted movie');
});

app.get('/add/showtime', async (req, res) => {
  await models.Showtime.create({
    roomID: 4,
    movieID: 1,
    price: 10000,
    startTime: Date(),
    endTime: Date(),
  });

  res.end('insterted showtime');
});

app.get('/add/ticket', async (req, res) => {
  await models.Ticket.create({
    bookingID: '04673cba-2023-42f5-acc5-80c8f316f064',
    rowOfSeatID: 6,
    colOfSeatID: 1,
    price: 1239,
  });

  res.end('insterted ticket');
});

app.get('/add/booking', async (req, res) => {
  await models.Booking.create({
    showtimeID: '41f15c5c-2378-4b41-8b7e-ab0df2a6a636',
    userID: 123,
    timeBooking: Date(),
    totalPrice: 1200,

  });

  res.end('insterted booking');
});

models.sequelize.sync().then(() => {
  app.listen(port);
});
