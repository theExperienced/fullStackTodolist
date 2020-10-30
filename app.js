const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const { initDb } = require('./mongoDB/db');

const todosRouter = require('./routers/todos');

const { getError } = require('./controllers/error');

const app = express();

const PORT = process.env.PORT || 8080;
app.use(express.static('client/build'));

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
}

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/todos', todosRouter);

app.use(getError); 


app.listen(PORT); 
////mongoDB

// initDb((err, client) => {
//     if(err) {
//         throw Error(err);
//     }else {
//         console.log('connected to mongo and thus launching server', process.env.PORT);
//     }
// });