const mongoose = require(`mongoose`);


mongoose.connect('mongodb+srv://shivamdeswal2004:j4hhZ5NROhhA7HCM@cluster01.ss0gkvu.mongodb.net/MarketPlace?retryWrites=true&w=majority',
{useNewUrlParser:true});

const connection = mongoose.connection;


module.exports = connection;