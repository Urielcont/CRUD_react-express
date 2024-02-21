// login/logout
// crear token con usuario 
const passwordHash=await bcyptjs.hash(password,10)
const newUser = new User({
    username,
    email,
    gender,
    edad,
    fechaNacimiento,
    password:passwordHash,
    phone,
    lastName,
    firstName
})


jwt.sign({
    id:saveUser.username,
    phone:saveUser.phone,
    email:saveUser.email
},"utd123",{
    expiresIn:"1d",
    },(error,token)=>{
        if(error){
            console.log(error);
        }
        else{
            res.json({token});
        }
    });