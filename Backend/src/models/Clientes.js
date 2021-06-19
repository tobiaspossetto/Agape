const {Schema, model} = require('mongoose')
const bcrypt = require('bcryptjs')
const clienteSchema = new Schema({

    username:{
        type: String,
        required: true,
        trim:true,
        unique: true
    },
    nombre:{ 
        type: String,
        required: true,
        trim:true,
       
    } ,
    apellido:{ 
        type: String,
        required: true,
        trim:true,
    },
    email:{
        type: String,
        required: true,
    },

    contraseña:{
        type: String,
        required: true,
    }

   
    
    
    
    

}, {
    timestamps: true
})

clienteSchema.methods.encrypPassword = async  contraseña => {
   const salt=  await bcrypt.genSalt(10);
    return  await bcrypt.hash(contraseña, salt);
};

clienteSchema.methods.matchPassword = async function(contraseña){
    return await bcrypt.compare(contraseña, this.contraseña)
}

module.exports = model('producto', productoSchema);