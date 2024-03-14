const express = require("express");

const authjwt =require("../middleware/auth.jwt.js");
const authController = require("../controller/auth.controller.js");



const router =express.Router();
// ---------RUTA PARA USUARIOS---------
// Ruta para registrarse
router.post('/register',authController.register);
// Ruta para ver los usuarios registrados
router.get('/register',authjwt.verifyToken,authController.UserRegisters)


// ---------RUTA PARA PRODUCTOS---------
// Ruta para registrar nuevo productos
router.post('/registerProducto',authController.producto);
// Ruta para ver los productos
router.get('/registerProducto',authjwt.verifyToken,authController.ProductsCreated)
// Ruta para ver producto especifico con el id
router.get('/registerProducto/:productId',authjwt.verifyToken,authController.ProductsCreatedbyId);
// Ruta para actualizar producto
router.put('/registerProducto/:productId',authjwt.verifyToken,authController.UpdateProductbyId);
// baja logica del producto
router.put('/registerProducto/:productId',authjwt.verifyToken,authController.bajaLogicaProducto);


// ---------RUTA PARA PROVEDOR---------
router.post('/registerProvedor',authController.provedor);
// Ruta para ver provedores existentes
router.get('/registerProvedor',authjwt.verifyToken,authController.ProvedorExisted)
// ruta para ver proverdor especifico
router.get('/registerProvedor/:provedorId',authjwt.verifyToken,authController.ProvedorbyId)
// ruta para actualizar provedor
router.put('/registerProvedor/:provedorId',authjwt.verifyToken,authController.UpdateProvedorbyId);
// baja logica del provedor
router.delete('/registerProvedor',authjwt.verifyToken,authController.bajaProvedor);


router.get('/login',authController.login)
router.post('/signin',authController.signin)
router.post('/create', authController.create)
// router.post('/login', );
// router.get('/login',authController.login);
module.exports = router;