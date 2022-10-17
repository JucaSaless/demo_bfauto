var mongoose = require('mongoose');
var config = require('./config/database');
mongoose.Promise = Promise;
mongoose.connect(config.database, {useMongoClient:true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB');
});


// const mongoClient = require('mongodb').MongoClient;
// mongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true },
// (error, connection) => {
//     if(error) console.log('Database connected ERROR: \n' + error.message);
//     else { 
//         global.connection = connection.db('appcarexe');    
//         console.log('Database Connected');
//     }
// });

module.exports = {};