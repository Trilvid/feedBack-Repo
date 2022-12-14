const app = require('./src/app')
const port = process.env.PORT || 9999


app.listen(port, () => {
	console.log('Server up at '+ port)
})