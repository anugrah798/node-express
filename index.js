const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Home page')
})

app.get('/about-us', (req, res) => {
    res.send('About page')
})


app.get('/contact-us', (req, res) => {
    res.send('Contact page')
})

app.listen(5000, () => {
    console.log('server Running')
})
