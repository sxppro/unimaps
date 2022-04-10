const express = require('express');
const app = express();
const port = 3000;

const {UserRouter} = require('./accounts/UserRoute.js');
const {EventRouter} = require('./maps/EventRoute.js');
const {MapRouter} = require('./maps/MapRoute.js');
const cors = require('cors');
const bodyParser = require('body-parser'); // parser middleware

app.use(cors());
app.use(
    bodyParser.urlencoded({extended: false})
);
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/user', UserRouter);
app.use('/event', EventRouter);
app.use('/map', MapRouter);

app.listen(port, () => {
    console.log(`MacSpicy app listening on port ${port}`);
});