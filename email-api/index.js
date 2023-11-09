const express = require('express')
const cors = require('cors')

const router = require('./src/routes/routes')

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

const PORT = 4000

app.listen(PORT, () =>{
    console.log(`App is running on port: http://localhost:${PORT}`)
})

app.get('/', (req, res) => {
    res.send('hello world')
})