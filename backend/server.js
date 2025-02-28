const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const userRoutes = require('./routes/users');  
const recipeRoutes = require('./routes/recipes'); 

app.use('/users', userRoutes);  
app.use('/recipes', recipeRoutes); 

const PORT = 3000;
mongoose.connect(process.env.MONGO_URL).then(
    ()=> console.log("DB connected successfully.")
).catch(
    (err) => console.log(err)
);

app.get('/', (req, res) => {
    res.send("<h1 >Welcome !!</h1>")
});

app.listen(PORT, (err)=>{
    if(err)
    {
        console.log(err)
    }
    console.log("Server is running on port :" + PORT)
});