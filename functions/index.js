const functions = require("firebase-functions");
const express = require('express')
const cors = require("cors");
const {getNfts,importNfts} = require('./src/nfts.js')
//App config
const app = express();
// middleware
app.use(cors({origin: true}));
app.use(express.json());

// api points
app.get('/nfts',getNfts) // gets from a db
app.post('/nfts',importNfts) // puts nfts into db


const sdk = require('api')('@opensea/v1.0#19a5bb1rkww6af9l');

sdk['retrieving-assets-rinkeby']({order_direction: 'desc', offset: '0', limit: '20'})
  .then(res => console.log(res))
  .catch(err => console.error(err));
  
// Listen command
exports.api = functions.https.onRequest(app)

