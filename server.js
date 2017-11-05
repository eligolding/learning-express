const express = require('express')
const app = express()

app.get('/', (req, res) => {
  return res.send('Home Page')
});

app.get('/about', (req,res) => {
  res.send('This is the about page');
});

app.listen(3000, () => {
  console.log('listening very attentively on port 3000');
})