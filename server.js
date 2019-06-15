const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello Dev!')
})

app.get('/dev', (req, res) => {

    const data = JSON.stringify({
        name: "Ryan",
        age: 29,
        job: "Backend developer"
    })

    res.send(data)
})

app.get('*', (req, res) => {
    res.send('404 not found!')
})
const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Dev app listening on port ${port}`)
})