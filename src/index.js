// importar conexion de la base de datos
const connectDB = require("./config/db.js");
// requerir paquetes de express
const express = require("express");
const cookieParser = require('cookie-parser');

// llamar rutas
const authRoutes = require("./routes/auth.route.js")
// Comenzar app express
const app = express();

// connectDB();
connectDB();

// middleware
app.use(cookieParser());
app.use(express.json());
app.use('/api', authRoutes);
app.use(express.static("public"))
// Asignar puerto de salida
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` conectado en el puerto ${PORT}`);
});
// Comporbar Conexion
console.log('Servidor Up');
