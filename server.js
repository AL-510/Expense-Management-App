const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/connectDB");

dotenv.config();

connectDB();

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());


app.use('/api/v1/users', require('./routes/userRoute'))
app.use('/api/v1/transactions', require('./routes/transactionRoute'))

const PORT = 8080;

app.listen(PORT, () => {
    console.log('Server running');
})
