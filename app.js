const express = require('express')
const exphbs = require('express-handlebars')
const hbshelpers = require('handlebars-helpers')
const cookieParser = require('cookie-parser')
const multihelpers = hbshelpers()

const users = require('./users.json')
const checkUser = require('./check_user')

const app = express()
const port = 3000

app.use(express.urlencoded({
  extended: true
}));

app.use(cookieParser())

// set template engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs', helpers: multihelpers }))
app.set('view engine', 'hbs')

// setting static files
app.use(express.static('public'))

// home page
app.get('/', (req, res) => {
  if (req.cookies.username) {
    res.render('loginsucceed', { user: req.cookies.username })
  } else {
    res.render('index')
  }
})

app.post('/', (req, res) => {
  const result = checkUser(users.results, req.body)
  if (result === true) {
    res.render('index', { isInvalidUser: result })
  } else {
    res.cookie('username', result)
    res.render('loginsucceed', { user: result })
  }
})

app.post('/logout', (req, res) => {
  res.clearCookie('username')
  res.redirect('/')
})

// listening
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}.`)
})