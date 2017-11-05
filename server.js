const express = require('express')
const app = express()

app.get('/', (req, res) => {
  return res.send('Home Page')
})
app.listen(3000, () => {
  console.log('listening very attentively on port 3000');
})