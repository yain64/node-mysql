require('dotenv').config();
const express = require('express')
const app = express()
const path = require('path')
const createError = require('http-errors')
const logger = require('./middlewares/logger-mw')
const expressSession = require('./middlewares/session-mw')


/************* Init ***************/
app.listen(process.env.PORT, () => { 
	console.log(process.env.HOST+':'+process.env.PORT) 
})
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, './views'))
app.locals.pretty = true
app.locals.TITLE = '도서관리시스템'


/************* Middleware ***************/
app.use(logger('common'))
app.use(express.json())	// post -> req.body
app.use(express.urlencoded({ extended: false }))
app.use(expressSession())


/************* Router ***************/
const bookRouter = require('./routes/book-router')
const authRouter = require('./routes/auth-router')
const multerRouter = require('./routes/multer-router')
app.use('/', express.static( path.join(__dirname, './public') ))
app.use('/uploads', express.static( path.join(__dirname, './storages') ))
app.use('/book', bookRouter)
app.use('/auth', authRouter)
app.use('/multer', multerRouter)


/************* Router ***************/
app.use((req, res, next) => {
	next(createError(404))
})

app.use((err, req, res, next) => {
	res.send(process.env.SERVICE == 'development' ? err : '에러')
})