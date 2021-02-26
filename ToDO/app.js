const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const mongoose = require('mongoose');

// Make use of .env for config
require('dotenv').config();

// Init Express
const app = express();

// App middlewear
app.use(express.json()) // enable this to recieve JSON data from client
app.use(morgan('dev')) // visualize api requests
app.use(cors());

// //connect database
mongoose.connect('mongodb+srv://admin:8icDcwTRmq7HeGFu@cluster0.rldxv.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology:true,         useCreateIndex: true,
});
mongoose.connection.once('open', function(){
  console.log('Connected to DB');
}).on('error', function(error){
    console.log('Error is: ', error);
});


// Import Routes
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const todoRoutes = require('./routes/todo.routes');

// Use Routes middlewear
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', todoRoutes);

// Establish Port
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))