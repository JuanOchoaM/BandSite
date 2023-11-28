const express = require('express');
const app = express();
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Server running on port
${port}`));
const mongoose = require('mongoose');
const cors = require('cors');

//connect db
app.use(cors({origin: true, credentials: true}));
app.use(express.json({extended: false}));
app.get('/', (req,res) => res.send('Hello world!'));

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

const shirts = require('./routes/api/shirts');

app.use('/api/shirts', shirts);