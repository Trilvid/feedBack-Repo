const path = require('path')
const express = require('express')
const app = express();
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const userRouter = require('./routers/userRouter')
const productFeedbackRoute = require('./routers/productFeedbackRoute');
const eventFeedbackRoute = require('./routers/eventFeedbackRoute');
const serviceFeedbackRoute = require('./routers/serviceFeedbackRoute')
const connectDB = require('./config/mongoose')


// log requests
app.use(morgan('tiny'))
app.use(express.urlencoded({extended: true}))
app.set('view engine', "ejs")
//defining path for express to serve our views
const publicPath = path.join(__dirname, 'public')  // I removed ../ from the from the public: '../public to serve the file in public'
const viewsPath = path.join(__dirname, './views')

// connecting to config file
dotenv.config({path:'config.env'})

//setup for our views location
app.set('views', viewsPath)


// Setup static directory to serve
app.use(express.static(publicPath))

// mongoDB connection
connectDB()

// parse requests to bodyParser
app.use(bodyParser.json())

app.use(userRouter);
app.use('/api/v1/productfeedback', productFeedbackRoute)
app.use('/api/v1/productfeedback/:id', productFeedbackRoute)
app.use('/api/v1/eventfeedback', eventFeedbackRoute)
app.use('/api/v1/eventfeedback/:id', eventFeedbackRoute)
app.use('/api/v1/servicefeedback', serviceFeedbackRoute)
app.use('/api/v1/servicefeedback/:id', serviceFeedbackRoute)


app.get('/', (request, response) => {
    response.status(200).render('index.ejs')
})

app.get('/feedback', (request, response) => {
    response.status(200).render('feedback.ejs')
})

app.get('/signup', (request, response) => {
    response.status(200).render('signup.ejs')
})


app.get('/login', (request, response) => {
    response.render('login.ejs')
})

app.get('/profile', (request, response) => {
    response.render('profile.ejs')
})

app.get('/customform', (request, response) => {
    response.render('customform.ejs')
})


app.get('/formresponsepage', (request, response) => {
    response.render('formresponsepage.ejs')
})


// app.get ('*', (req, res) => {
//     res.render('404',{
//         title: '404 page',
//         errorMessage: 'page not found'
//     })
// })

module.exports = app;

//Pending to do lists:
// Connect to the database.
// Link the authentication.
// Host our project
//Connect each feedback template to the API to enable user to perform Crud operation
//Dynamically generate unique code for each template.
//Enable each user to download