import { useForm } from 'react-hook-form';
import { registerProvedorRequest } from '../api/auth';
// import { useAuth } from '../context/AuthContext';

function RegisterProvedor() {
    const { register, handleSubmit } = useForm();
    
    const onSubmit = async (values) => {
        const res = await registerProvedorRequest(values);
        console.log(res)
    }; 

    return (
        <div className='flex justify-center items-center '>
            <form onSubmit={handleSubmit(onSubmit)} className='bg-slate-400 shadow-md rounded px-8 pt-6 pm-3 w-200'>
                <h2 className='text-4xl text-center font-bold mb-4 text-black'>Registrar Proveedor</h2>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='nombre'>Nombre</label>
                    <input type='text' {...register('nombre', { required: true })} id='nombre' className={` border  rounded w-full py-2 bg-sky-200 text-gray-700 `} placeholder='nombre' />
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='apellido'>Apellido</label>
                    <input type='text' {...register('apellido', { required: true })} id='apellido' className={` border  rounded w-full py-2 bg-sky-200 text-gray-700 `} placeholder='Apellido'/>
                    
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='empresa'>empresa</label>
                    <input type='text' {...register('empresa', { required: true })} id='empresa' className={` border  rounded w-full py-2 bg-sky-200 text-gray-700 `} placeholder='empresa'/>
                    
                </div>


                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='telefono'>telefono</label>
                    <input type='text' {...register('telefono', { required: true })} id='telefono' className={` border  rounded w-full py-2 bg-sky-200 text-gray-700 `} placeholder='telefono' />
                    
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='idProvedor'>ID Proveedor</label>
                    <input type='text' {...register('idProvedor', { required: true })} id='idProvedor' className={` border  rounded w-full py-2 bg-sky-200 text-gray-700 `} placeholder='ID Proveedor' maxLength={10} />
                    
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='estatus'>Estatus</label>
                    <input type='text' {...register('estatus', { required: true })} id='estatus' className={` border  rounded w-full py-2 bg-sky-200 text-gray-700 `} placeholder='ID Proveedor' maxLength={10} />
                    
                </div>


                <div className='flex items-center justify-center'>
                    <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white  font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mb-px p-px'>Registrarse</button>
                </div>
            </form>
        </div>
    );
}

export default RegisterProvedor;
