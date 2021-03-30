const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World! Have a good evening!')
})

app.listen(port, () => {
  console.log(`Example app is really listening at http://localhost:${port}`)
})
