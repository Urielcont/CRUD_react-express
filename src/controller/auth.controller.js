
const {User} = require("../model/user.model.js");
const {Provedor} = require("../model/provedor.model.js");
const {Producto} = require("../model/product.model.js");
const mod_fs=require('fs');
const  jwt= require('jsonwebtoken');
const path = require('path');

require('dotenv').config();

// ---------CONTROLADOR PARA RUTA DE USUARIOS---------
// Registrar un nuevo usuario
exports.register= async (req,res)=>{
    const user= User(req.body);
    user.save().then((data) => res.json(data)).catch((error) => res.json({ message: error}));
    console.log(user)
}
exports.UserRegisters= async(req,res)=>{
    const users= await User.find()
    res.json(users)
}



// ---------CONTROLADOR PARA RUTA DE PRODUCTOS---------

// Exportar datos de producto
exports.producto=async(req,res)=>{
    // const producto= Producto(req.body);
    // producto.save().then((data) => res.json(data)).catch((error) => res.json({ message: error}));
    try {
        const { codigo, nombre, descripcion, fechaCreacion, estatus, provedor } = req.body;
        
        // Buscar el proveedor por su nombre en la base de datos
        const proveedor = await Provedor.findOne({ idProvedor: provedor });
        if (!proveedor) {
            return res.status(404).json({ message: 'Proveedor no encontrado' });
        }
        // Crear el producto relacionado
        const producto = new Producto({
            codigo,
            nombre,
            descripcion,
            fechaCreacion,
            estatus,
            provedor: proveedor._id // Establecer la relación con el ID del proveedor
        });
        await producto.save();
        res.status(201).json({ message: 'Producto creado correctamente', producto });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el producto' });
    }
}
// Mostrar kos productos creados
exports.ProductsCreated= async(req,res)=>{
    
    const products= await Producto.find()
    res.json(products)
}
// Buscar producto por el id del producto
exports.ProductsCreatedbyId= async(req,res)=>{
   try {
        const producto = await Producto.findById(req.params.productId);
        if (!producto) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }
        res.json(producto);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error en el servidor" });
    }
}
exports.MostrarProductos= async(req,res)=>{
    try {
         const producto = await Producto.find();
         if (!producto) {
             return res.status(404).json({ message: "Producto no encontrado" });
         }
         res.json(producto);
     } catch (error) {
         console.error(error);
         res.status(500).json({ message: "Error en el servidor" });
     }
 }
 
// Actualizar producto por el id
exports.UpdateProductbyId= async(req,res)=>{
    try{
        const {nombre, descripcion} =req.body;
        // Verificar si el ID del producto es válido
       
        const updateProduct = await Producto.findByIdAndUpdate(req.params.productId,{
            nombre,
            descripcion,
        }, { new: true });
        if (!updateProduct) {
            return res.status(404).json({ message: "Producto no encontrado" });
        } 
        res.status(200).json(updateProduct)
    }catch(error){
        res.status(500).json({ message: "Error al actualizar el producto" });
    }
}
// Baja logica del producto
exports.bajaLogicaProducto = async (req, res) => {
    try {
        const {estatus, fechaEliminacion} =req.body;
        const producto = await Producto.findByIdAndUpdate(req.params.productId, {
            estatus: false,
            fechaEliminacion: new Date() 
        }, { new: true });
        if (!producto) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }
        res.status(200).json({ message: "Producto dado de baja correctamente", producto });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al dar de baja el producto" });
    }
};


// ---------CONTROLADOR PARA RUTA DE PROVEDOR---------

// Exportar datos de provedor
exports.provedor=(req,res)=>{
    const provedor= Provedor(req.body);
    provedor.save().then((data) => res.json(data)).catch((error) => res.json({ message: error}));
}   
// Mostrar todos los provedores
exports.ProvedorExisted= async(req,res)=>{
    const provedor= await Provedor.find({estatus: true})
    res.json(provedor)
}

// Mpstrar provedor por id
exports.ProvedorbyId=async(req,res)=>{
    try {
        const provedor = await Provedor.findById(req.params.provedorId);
        if (!provedor) {
            return res.status(404).json({ message: "Provedor no encontrado" });
        }
        res.json(provedor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error en el servidor" });
    }
}

// Actualizar provedor
exports.UpdateProvedorbyId= async(req,res)=>{
    try{
        const {telefono, correo} =req.body;
        // Verificar si el ID del producto es válido
       
        const updateProvedor = await Provedor.findByIdAndUpdate(req.params.provedorId,{
            telefono,
            correo,
        }, { new: true });
        if (!updateProvedor) {
            return res.status(404).json({ message: "Provedor no encontrado" });
        } 
        res.status(200).json(updateProvedor)
    }catch(error){
        res.status(500).json({ message: "Error en La funcion para leer Id" });
    }
}
// baja logica de provedor
exports.bajaProvedor = async (req, res) => {
    try {
        const proveedores = await Provedor.find();
        for (const proveedor of proveedores) {
            const productosActivos = await Producto.find({ provedor: proveedor._id, estatus: true });
            if (productosActivos.length === 0) {
                await Provedor.findByIdAndUpdate(proveedor._id, { estatus: false, fechaEliminacion: new Date() });
            }
        }

        res.status(200).json({ message: "Baja lógica de proveedores" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al realizar la baja lógica de proveedores sin productos activos" });
    }
};



exports.login = async (req, res) => {
    const loginPath = path.join(__dirname, '..', 'public', 'login.html');
    res.sendFile(loginPath);
}


exports.signin = async (req, res) => {
    const { username, password } = req.body;
    try {   

        // Buscar al usuario en la base de datos
        const user = await User.findOne({ username });
        // Verificar si el usuario existe
        if (!user) {
            return res.status(401).json({ message: "Username No encontrado" });
        }
        // Verificar la contraseña
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Password Invalida " });
        }
        // Generar el token
        const accessToken = jwt.sign({ userId: user._id,username: user.username }, process.env.SECRET, { expiresIn: '45m' });
        res.cookie('access_token', accessToken, { httpOnly: true, maxAge: 2700000 });
        res.json({ message: "Inicio de sesión exitoso", token: accessToken });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error en la Base de datos" });
    }
}

exports.create=(req,res)=>{

}

