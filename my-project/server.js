const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit-form', (req, res) => {
  // process the form data here
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;

  // send a response to indicate that the form was submitted successfully
  res.send('Form submitted successfully');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});