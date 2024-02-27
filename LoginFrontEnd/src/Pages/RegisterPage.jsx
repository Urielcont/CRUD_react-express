import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

function RegisterPage() {
    const { register, handleSubmit,formState: { errors } } = useForm();
    const {signup, isAuthenticated} = useAuth();
    const navigate = useNavigate();
    useEffect(()=>{
        if (isAuthenticated) navigate("/VerProductos");
    }, [isAuthenticated])
    const onSubmit = async (values) => {
        try {
            const res = await signup(values);
            console.log(res);
        } catch (error) {
            console.error("Error al registrar usuario:", error);
        }
    }; 

    return (
        <div className='flex justify-center items-center '>
            <form onSubmit={handleSubmit(onSubmit)} className='bg-slate-400 shadow-md rounded px-8 pt-6 pm-3 w-200'>
                <h2 className='text-4xl text-center font-bold mb-4 text-black'>Registrar Usuario</h2>

                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>Username</label>
                    <input type='text' {...register('username', { required: true })} id='username' className={` border  rounded w-full py-2 bg-sky-200 text-gray-700 `} placeholder='Username'/>
                    {
                    errors.username && (
                        <p className='text-red-500'>Username es Requerido</p>
                    )
                }
                </div>
               

                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='firstName'>Primer Nombre</label>
                    <input type='text' {...register('firstName', { required: true })} id='firstName' className={` border  rounded w-full py-2 bg-sky-200 text-gray-700 `} placeholder='Primer Nombre'/>
                    {
                    errors.firstName && (
                        <p className='text-red-500'>Primer Nombre es Requerido</p>
                    )
                }
                </div>

                


                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='lastName'>Apellido</label>
                    <input type='text' {...register('lastName', { required: true })} id='lastName' className={` border  rounded w-full py-2 bg-sky-200 text-gray-700 `} placeholder='Apellido'/>
                    {
                    errors.lastName && (
                        <p className='text-red-500'>Apellido es Requerido</p>
                    )
                }

                </div>

                

                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='gender'>Genero</label>
                    <input type='text' {...register('gender', { required: true })} id='gender' className={` border  rounded w-full py-2 bg-sky-200 text-gray-700 `} placeholder='Genero' />
                    {
                    errors.gender && (
                        <p className='text-red-500'>Genero es Requerido</p>
                    )
                }
                </div>

                


                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='phone'>Telefono</label>
                    <input type='text' {...register('phone', { required: true })} id='phone' className={` border  rounded w-full py-2 bg-sky-200 text-gray-700 `} placeholder='Telefono' maxLength={10} />
                    {
                    errors.phone && (
                        <p className='text-red-500'>Telefono es Requerido</p>
                    )
                }
                </div>

                

                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='fechaNacimiento'>Fecha De Nacimiento</label>
                    <input type='date' {...register('fechaNacimiento', { required: true })} id='fechaNacimiento' className={` border  rounded w-full py-2 bg-sky-200 text-gray-700 `} />
                    {
                    errors.fechaNacimiento && (
                        <p className='text-red-500'>Fecha de Nacimiento es Requerido</p>
                    )
                }
                </div>


               


                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>Correo electrónico</label>
                    <input type='email' {...register('email', { required: true })} id='email' className={` border  rounded w-full py-2 bg-sky-200 text-gray-700 `} placeholder='Correo Electronico'/>
                    {
                    errors.email && (
                        <p className='text-red-500'>Email es Requerido</p>
                    )
                }
                </div>
              

                


                
                <div className='mb-6'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>Contraseña</label>
                    <input type='password' {...register('password', { required: true })} id='password' className={` border  rounded w-full py-2 bg-sky-200 text-gray-700 `} placeholder='Contraseña'/>
                    {
                    errors.password && (
                        <p className='text-red-500'>Contraseña es Requerido</p>
                    )
                }
                </div>


               


                <div className='flex items-center justify-center'>
                    <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white  font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mb-px p-px'>Registrarse</button>
                </div>
            </form>
        </div>
    );
}

export default RegisterPage;
