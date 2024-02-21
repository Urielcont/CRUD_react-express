const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const provedorSchema = new mongoose.Schema({
    nombre:{
        type:String,

    },
    apellido:{
        type:String,

    },
    empresa:{
        type:String,

    },
    telefono:{
        type:String,
        unique:true

    },
    correo:{
        type:String,
        unique:true

    },
    idProvedor:{
        type:String,
        unique:true,
        maxlength:8
    },   
    estatus: {
        type: Boolean,
        default: true 
    },
    fechaEliminacion: {
        type: Date,
        default: null 
    }
},{timestamps:true});

const Provedor = mongoose.model('Provedor', provedorSchema);
module.exports={Provedor};
