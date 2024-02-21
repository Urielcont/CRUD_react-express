
const { User } = require('../model/user.model');
const  jwt= require('jsonwebtoken');
require('dotenv').config();

exports.verifyToken= async (req,res,next)=>{
 try{
       const accessToken = req.cookies['access_token'];
        console.log("Token recibido:", accessToken);
        if(!accessToken) return res.status(403).json({message: 'Token invalido o expirado'});

        const decoded= jwt.verify(accessToken,process.env.SECRET)
        req.userId = decoded.userId;

        const user = await User.findById(req.userId);
        console.log(user)
        if(!user) return res.status(404).json({message: 'No se encontro usuario'})
        next()
 }catch(error){
        console.log(error)
        return res.status(401).json({message: 'No autorizado'});
 }
}