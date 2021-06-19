const app = require('./app')
const {mongoose} = require('./database')



//start server
app.listen(app.get('port'), () => {
    console.log('Server on port: ' + app.get('port'))
})