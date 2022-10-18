const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 5000

app.use(cors({
  origin: "http://localhost:5500",
}))

// app.get('/', (req, res) => {
//   res.send("Hello")
// })

// response
app.get("/data", (req, res) => {
  res.json({ name: "私の名前", age: 23 })
})

app.listen(PORT, () => console.log("server is running"))