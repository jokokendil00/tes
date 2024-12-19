

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
})

app.listen(3000, () => console.log('Server ready on port 3000.'));

module.exports = app;