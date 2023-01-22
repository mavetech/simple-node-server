const express = require('express')
const app = express()
const ejs = require('ejs')

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { title: 'My Webpage', message: 'Hello World!' })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
