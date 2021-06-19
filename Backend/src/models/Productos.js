const {Schema, model} = require('mongoose')

const productoSchema = new Schema({
    nombre:{ 
        type: String,
        required: true
    } ,
    descripcion:{ 
        type: String,
        required: true
    },

    img:{ 
        type: String,
        required: true
    },
    
    stock:{  type: Number,
            required: true
        }
    
    

}, {
    timestamps: true
})

module.exports = model('producto', productoSchema);