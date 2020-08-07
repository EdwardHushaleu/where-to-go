const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const { projects } = require('./angular.json');
const distPath = projects['where-to-go'].architect.build.options.outputPath;

const signUpHandlerPost = require('./BACKEND/api-routes/sign-up/post');
const signInHandlerPost = require('./BACKEND/api-routes/sign-in/post');
const userHandlerGet = require('./BACKEND/api-routes/user/get');
const userEventsHandlerGet = require('./BACKEND/api-routes/user/events/get');
const eventsHandlerGet = require('./BACKEND/api-routes/events/get');
const eventsHandlerPost = require('./BACKEND/api-routes/events/post');
const eventsHandlerDelete = require('./BACKEND/api-routes/events/delete');
const eventsGoHandlerPost = require('./BACKEND/api-routes/events/go/post');
const seedInitial = require('./BACKEND/helpers/seed-initial');


app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, distPath)));

// Auth routes
app.post('/api/sign-up', signUpHandlerPost);
app.post('/api/sign-in', signInHandlerPost);

// User route
app.get('/api/user', userHandlerGet);
app.get('/api/user/events', userEventsHandlerGet);

// Events routes
app.get('/api/events', eventsHandlerGet);
app.post('/api/events', eventsHandlerPost);
app.delete('/api/events', eventsHandlerDelete);
app.post('/api/events/go', eventsGoHandlerPost);

// index.html route
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, distPath + '/index.html'));
});


seedInitial();


app.listen(PORT, () =>
    console.log('Server is running on port ' + PORT)
);

