const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    codigo:{
        type:String,
        required:true,
        unique:true,
    },
    nombre:{
        type:String,

    },
    descripcion:{
        type:String,

    },
    estatus:{
        type: Boolean,
        default: true
    },
    provedor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Proveedor'
    },
    fechaEliminacion: {
        type: Date,
        default: null 
    }
},{timestamps:true});

const Producto = mongoose.model('Producto', productSchema);
module.exports={Producto};
