const express = require('express')
const app = express()

app.get('/', (req, res) => {
  return res.send('Home Page')
});

app.get('/about', (req,res) => {
  res.send('This is the about page');
});

app.get('/contact', (req,res) => {
  res.send('This is the contact page');
});


app.get('/checkout', (req,res) => {
  res.send('This is the checkout page');
});

app.listen(3000, () => {
  console.log('listening very attentively on port 3000');
})