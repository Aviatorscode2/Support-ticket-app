// Express server setup
const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;
const app = express();
const {errorHandler} = require('./middleware/errorMiddleware');

app.use(express.json());
app.use(express.urlencoded({extended: false}));


// Creating a route with express
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the support desk API'
    });
})

app.use('/api/users', require('./routes/userRoutes'));
app.use(errorHandler)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));


