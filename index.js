const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

{process.env.DB_USER}
{process.env.DB_PASS}



app.get('/', (req, res) => {
    res.send('Coffee making server is running')
  })
  
  
  app.listen(port, () => {
    console.log(`Practice Coffee server is running on port : ${port}`)
  })