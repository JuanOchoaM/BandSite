const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 3001;
//app.listen(port, () => console.log(`Server running on port
//${port}`));

//connect db
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('Hello world!'));

const conn_str = 'mongodb+srv://JuanOchoa:Soccerrage64@cluster0.czmayyh.mongodb.net/';
mongoose.set('strictQuery', false);
mongoose.connect(conn_str)
    .then(() => {
        app.listen(port)
        console.log('MongoDB Connection Suceeded...')
    })
    .catch(err => {
        console.log('Error in DB connection ${err}');
    });

const items = require('./routes/api/items');
const users = require('./routes/api/users');

app.use('/api/items', items);
app.use('/api/users', users);

