const express = require('express')
const path = require('path')
const morgan = require('morgan')
const exphbs  = require('express-handlebars')
const app = express()
const port = 3000

app.use(morgan('combined')) // Dò lỗi phục vụ cho debug

// template engine
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');


app.set('views', path.join(__dirname, '/resource/views'));
app.get('/news', function (req, res) {
  res.render('news');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})