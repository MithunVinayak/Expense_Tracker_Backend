const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv');
const { db } = require('./db/db');
const {readdirSync} = require('fs')


dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

readdirSync('./routes').map((route)=>{
    app.use('/api/v1',require('./routes/'+route));
})

const server = () => {
    db();
    app.listen(PORT, () => {
      console.log("listening to Port:", PORT);
    });
  };
  

server();
