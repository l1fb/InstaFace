require ('dotenv').config();

const parser = require('body-parser')
const path = require('path'); 
const PORT = process.env.PORT; 

const express = require('express')
const app = express(); 
const routes = require('./routes'); 
const morgan = require('morgan')
const detect = require('./facerecofuncs/detect.js');
const enroll = require('./facerecofuncs/enroll.js');

app.use(parser.json()); 
app.use(parser.urlencoded({extended: true})); 
app.use(morgan('tiny')); 

app.use("/instaface", routes); 
app.use(express.static(path.resolve(__dirname, '../client/public'))); 

app.listen(3000, () => {
    console.log("app is listening on port ", PORT); 
})

var url = "http://www.uni-regensburg.de/Fakultaeten/phil_Fak_II/Psychologie/Psy_II/beautycheck/english/durchschnittsgesichter/w(01-64)_gr.jpg";
enroll.enrollFace(url, "Peter", function (response) {
    console.log(response);
})
