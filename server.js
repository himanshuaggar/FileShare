const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

const PORT = process.env.PORT || 3000;


app.use(express.static('public'));
app.use(express.json());

const connectDB = require('./config/db');
connectDB();

// CORS
// const corsOptions = {
//     origin: "https://fileshare-himu.netlify.app",
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }

// app.use(cors(corsOptions));
// const allowedOrigins = ['https://fileshare-himu.netlify.app'];

app.use(cors());

// template engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// Routes
app.use('/api/files', require('./routes/files'));

app.use('/files', require('./routes/show'));

app.use('/files/download', require('./routes/download'))

app.listen(PORT,() =>{
    console.log(`listening on the port ${PORT}`);
})