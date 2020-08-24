const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const PORT = process.env.PORT || 3000;

const homeRouter = require('./routes/home-routes');
app.use('/', homeRouter);

app.listen(PORT, () => {
  console.log(`App is running. Listening on port ${PORT}`);
});
