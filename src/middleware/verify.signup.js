// const { registerSchema, loginSchema } = require( "../validator/auth.schema");

// exports.validarRegistro = (data, next, res) => {
//     try {
//         registerSchema.parse(data);
//         next();
//     } catch (error) {
//         return res.status(400).json({ error });

//     }
// };

// exports.validarInicioSesion = (data, next, res) => {
//     try {
//         loginSchema.parse(data);
//         next();
//     } catch (error) {
//         return res.status(400).json({ error: error.errors.map((error) => error.message) });
//     }
// };