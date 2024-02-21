import {useForm} from 'react-hook-form'

function RegisterPage(){
    const {Register, handleSubmit}=useForm();
    return(
        <div>
            <form onSubmit={handleSubmit(values=>{
                console.log(values)
            })}>
                <input type="text" {...Register("username",{required:true})} />
                <input type="email" {...Register("email",{required:true})}/>
                <input type="password" {...Register("password",{required:true})}/>

                <button type='submit'>Registrarse</button>
            </form>
        </div>
    )
}
export default RegisterPage;