const mongoose = require('mongoose')

//const URI = 'mongodb://localhost/mern-tasks';
const URI = 'mongodb+srv://tobias:tobias3564@cluster0.7bqhw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(URI,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
    .then(db => console.log('db esta conectada'))
    .catch(err => console.error(err))

module.exports = mongoose;
