const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello Dev!')
})

app.get('/devInformation', (req, res) => {

    const data = {
        name: "Ryan",
        age: 29,
        job: "Backend developer",
        portfolioUrl: "https://ryangonz.com"
    }

    res.send(data)
})

app.get('*', (req, res) => {
    res.send('404 not found!')
})
const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Dev app listening on port ${port}`)
})