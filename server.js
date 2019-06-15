const express = require('express')

const app = express()


app.get('/', (req, res) => {
    res.send('Hello Dev!')
})

app.get('/dev', (req, res) => {
    res.send('Hello, this is the /dev endpoint')
})

app.get('*', (req, res) => {
    res.send('404 not found!')
})
const port = 5000

app.listen(port, () => {
    console.log(`Dev app listening on port ${port}`)
})