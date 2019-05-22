const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(`${__dirname}/public`));

const indexRouter = require('./routes/index.route.js');

app.use('/', indexRouter);


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
