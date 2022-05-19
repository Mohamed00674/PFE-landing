const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const bcrypt = require("bcryptjs")



const app = express();
const port = process.env.PORT || 5000.

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended : true}));


mongoose.connect('mongodb://localhost:27017/myDatabase',{
  useNewUrlParser: true,
  useUnifiedTopology : true,
}).then( () => console.log('Connected to the database')).catch(err => console.log(err));

app.use('/api' , require('./routes/contact') )

app.listen(port , () => console.log(`server is running on http://localhost:${port}` ));

