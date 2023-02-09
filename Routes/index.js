
const eventRoutes = require("./events")
const express = require('express');
const app = express();


app.use('/api/events', eventRoutes);
module.exports = app;