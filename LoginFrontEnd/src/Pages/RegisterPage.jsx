import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';

function RegisterPage() {
    const { register, handleSubmit } = useForm();
    
    const {signup,} = useAuth();

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
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>Usuario</label>
                    <input type='text' {...register('username', { required: true })} id='username' className={` border  rounded w-full py-2 bg-sky-200 text-gray-700 `} placeholder='Usuario' />
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='firstName'>Primer Nombre</label>
                    <input type='text' {...register('firstName', { required: true })} id='firstName' className={` border  rounded w-full py-2 bg-sky-200 text-gray-700 `} placeholder='Primer Nombre'/>
                    
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='lastName'>Apellido</label>
                    <input type='text' {...register('lastName', { required: true })} id='lastName' className={` border  rounded w-full py-2 bg-sky-200 text-gray-700 `} placeholder='Apellido'/>
                    
                </div>


                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='gender'>Genero</label>
                    <input type='text' {...register('gender', { required: true })} id='gender' className={` border  rounded w-full py-2 bg-sky-200 text-gray-700 `} placeholder='Genero' />
                    
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='phone'>Telefono</label>
                    <input type='text' {...register('phone', { required: true })} id='phone' className={` border  rounded w-full py-2 bg-sky-200 text-gray-700 `} placeholder='Telefono' maxLength={10} />
                    
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='fechaNacimiento'>Fecha De Nacimiento</label>
                    <input type='date' {...register('fechaNacimiento', { required: true })} id='fechaNacimiento' className={` border  rounded w-full py-2 bg-sky-200 text-gray-700 `} />
                    
                </div>


                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>Correo electrónico</label>
                    <input type='email' {...register('email', { required: true })} id='email' className={` border  rounded w-full py-2 bg-sky-200 text-gray-700 `} placeholder='Correo Electronico'/>
                    
                </div>
              

                
                <div className='mb-6'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>Contraseña</label>
                    <input type='password' {...register('password', { required: true })} id='password' className={` border  rounded w-full py-2 bg-sky-200 text-gray-700 `} placeholder='Contraseña'/>
                    
                </div>
                <div className='flex items-center justify-center'>
                    <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white  font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mb-px p-px'>Registrarse</button>
                </div>
            </form>
        </div>
    );
}

export default RegisterPage;
