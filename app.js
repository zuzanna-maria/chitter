const express = require('express')
const app = express()
const port = 3000
const session = require('express-session')
const methodOverride = require('method-override')

app.use(express.urlencoded({ extended: true }))
app.use(session({secret: 'keyboard cat', resave: true, saveUninitialized: false, cookie: {secure: false}}))
app.use(methodOverride('_method'))
app.set('view engine', 'ejs')

const indexController = require('./controllers/index.js')
const chitterController = require('./controllers/chitter.js')
const signupController = require('./controllers/signup.js')
const signinController = require('./controllers/signin.js')
const newpostController = require('./controllers/newpost.js')

function validateSessionId (req, res, next) {
    if (req.session.userId) {
    next()
  } else {
    console.log(req.session.userId)
    console.log('incorrect redirect!')
    res.redirect('/')
  }
}



app.use((req,res,next) => {
  res.locals.userId = req.session.userId
  next()
})


app.use('/', indexController)
app.use('/signup', signupController)
app.use('/signin', signinController)
app.use('/homepage', validateSessionId, chitterController)
app.use('/newpost', validateSessionId, newpostController)



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
