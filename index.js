const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./connection');

// connect to database
connectDB();


const app = express();

app.use(bodyParser.json());
app.use(express.json());


// Routes
app.use('/api', require('./routes'));


app.listen(process.env.PORT|| 3000, () => {
    console.log('Server running on port 9999');
    }
)