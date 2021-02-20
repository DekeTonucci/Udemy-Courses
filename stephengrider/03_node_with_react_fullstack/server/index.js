const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const { mongoURI, cookieKey } = require('./config/keys');
require('./models/User');
require('./models/Survey');
require('./services/passport');

try {
  // Connect to the MongoDB cluster
  mongoose.connect(
    mongoURI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Successfully connected to MongoDB Atlus.")
  );
} catch (error) {
  console.log("Could not connect to MongoDB Atlus: ", error);
}

const app = express();

// BodyParser Middleware
app.use(bodyParser.json());

// Setup cookie session:
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [ cookieKey ]
  })
);

// Initialize Passport:
app.use(passport.initialize());
app.use(passport.session());

// Routes for application:
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server connected to PORT: ${PORT}`));
