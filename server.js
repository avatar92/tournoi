const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const tournoi = require('./route/api/tournoi')


const app = express();
const port = 5000;


app.use(bodyParser.urlencoded({ extended: false  }));
app.use(bodyParser.json());

const db="mongodb+srv://adel123:adel123@cluster0-siyog.mongodb.net/test?retryWrites=true&w=majority"

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => console.log("data base connected!!"))
  .catch(err => console.log(err));


app.get('/test',(req,res)=>{
    res.json({msg:"hello test"})
})

app.use("/api/tournoi", tournoi);


app.listen(port,()=>{
    console.log('server is up and running in port 3000')
})