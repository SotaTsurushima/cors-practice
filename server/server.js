const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send("Hello")
})

app.listen(PORT, () => console.log("server is running"))