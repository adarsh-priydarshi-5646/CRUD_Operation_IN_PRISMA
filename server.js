require('dotenv').config()
const express = require('express')
const cors = require('cors');
const userRoutes = require('./routes/userRoutes.js')
const postRoutes = require('./routes/postRoutes.js')

const app = express()
app.use(express.json())
app.use(cors())

app.use('/users',userRoutes)
app.use('/posts',postRoutes)


const PORT = process.env.PORT || 5000

app.listen(PORT,() => {
    console.log(`server running on port ${PORT}`)
})
