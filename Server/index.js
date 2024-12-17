const express = require('express');
const cors = require("cors");
const app = express();
const port = 5000;

const connectdb = require('./Configs/db.config')


app.use(cors());
app.use(express.json());

connectdb();

const userRoutes = require('./Routes/userRoutes');
const adminRoutes = require('./Routes/adminRoutes')

app.use('/api',userRoutes);
app.use('/api/admin',adminRoutes);



module.exports = app;