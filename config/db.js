require('dotenv').config();
const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect(process.env.MONGO_CONNECTION_URL , {
        useNewUrlParser: true,
    useUnifiedTopology: true
    });
    const connection = mongoose.connection;

    connection.once('open', () =>{
        console.log('Database Connected');
    })
    .on('error', function (err) {
        console.log(err);
    });
}

module.exports = connectDB;

// require('dotenv').config();
// const mongoose = require('mongoose');
// function connectDB() {
//     // Database connection 🥳
//     mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });
//     const connection = mongoose.connection;
//     connection.once('open', () => {
//         console.log('Database connected 🥳🥳🥳🥳');
//     })
//     // .catch(err => {
//     //     console.log('Connection failed ☹️☹️☹️☹️');
//     // });
// }

// module.exports = connectDB;