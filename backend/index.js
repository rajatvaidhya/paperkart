//Our Entry Point - index.js

const connectToMongo = require('./db')
const express = require('express')
const cors = require('cors')


connectToMongo();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', require('./routes/auth'));
app.use('/api/items', require('./routes/items'));

app.listen(process.env.PORT || 5000, () => {
    console.log(`Leshley's Backend is running at Port - http://localhost:5000`);
})