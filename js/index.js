const express = require('express');
const app = express();
const port = 3000; // TODO check if port is correct

// TODO more needed?
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
