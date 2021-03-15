const express = require('express');
const connectDB = require('./config/db');
const apiRoutes = require('./routes/api');
const path = require('path');

const app = express();

// Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect Databases
connectDB.connectSQLDB();
connectDB.connectMongoDB();

// Define routes
app.use(apiRoutes);

//serve stat assest in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
} else {
  app.get('/', (req, res) => res.send('API running'));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(console.log(`Server listening on: http://localhost:${PORT}`))
);
