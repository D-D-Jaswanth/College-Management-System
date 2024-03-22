const express = require('express')
const cors = require('cors')
const routes = require('./View/Routes')

const app = express();
app.use(cors({ origin: '*' }))

const port = 5000;

app.use(express.json())
app.use(routes)

app.listen(port, () => {
    console.log(`Server is Listening ${port}`)
})

const mongoDB = require('./mongo')
mongoDB();