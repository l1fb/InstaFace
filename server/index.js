require ('dotenv').config();

const parser = require('body-parser')
const path = require('path'); 
const PORT = process.env.PORT; 

const express = require('express')
const app = express(); 
const routes = require('./routes'); 
const morgan = require('morgan')
const face = require('./facerecofuncs/detect.js');

app.use(parser.json()); 
app.use(parser.urlencoded({extended: true})); 
app.use(morgan('tiny')); 

app.use("/instaface", routes); 
app.use(express.static(path.resolve(__dirname, '../client/public'))); 

app.listen(3000, () => {
    console.log("app is listening on port ", PORT); 
})

console.log(face.detectFace("http://www.uni-regensburg.de/Fakultaeten/phil_Fak_II/Psychologie/Psy_II/beautycheck/english/durchschnittsgesichter/m(01-32)_gr.jpg"));


