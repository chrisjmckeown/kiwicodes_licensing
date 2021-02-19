const express = require('express');
const connectDB = require('./config/db');
const apiRoutes = require('./routes/api');

const app = express();

// Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect Databases
connectDB.connectSQLDB();
connectDB.connectMongoDB();

app.get('/', (req, res) => res.send('API Running'));

// Define routes
app.use(apiRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(console.log(`Server listening on: http://localhost:${PORT}`))
);
