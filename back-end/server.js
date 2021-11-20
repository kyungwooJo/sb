
const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

// setup express
const app = express();

// setup body parser middleware to conver to JSON and handle URL encoded forms
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// connect to the mongodb database
mongoose.connect('mongodb://127.0.0.1:27017/photobomb', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

// Create a scheme for items in the museum: a title and a path to an image.
const heirSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  properties: Array
});

// Create a model for items in the museum.
const Heir = mongoose.model('Heir', heirSchema);

app.post('/api/heir', (req, res) => {
  const heir = new Heir({
    firstName: req.body.title,
    lastName:req.body.description,
    email: req.body.path,
    properties: []
  });
  properties.push(req.body.properties)
  
  try {
    await heir.save();
    res.send(heir);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
})


app.listen(3000, () => console.log('Server listening on port 3000!'));
