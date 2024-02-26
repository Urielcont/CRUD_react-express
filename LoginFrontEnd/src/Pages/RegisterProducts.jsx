import { useForm } from 'react-hook-form';
import { registerProductRequest } from '../api/auth';
// import { useAuth } from '../context/AuthContext';

function RegisterProducts() {
    const { register, handleSubmit } = useForm();
    
    

    const onSubmit = async (values) => {
        const res = await registerProductRequest(values);
        console.log(res)
    }; 

    return (
        <div className='flex justify-center items-center '>
            <form onSubmit={handleSubmit(onSubmit)} className='bg-slate-400 shadow-md rounded px-8 pt-6 pm-3 w-200'>
                <h2 className='text-4xl text-center font-bold mb-4 text-black'>Registrar Producto</h2>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='codigo'>Codigo</label>
                    <input type='text' {...register('codigo', { required: true })} id='codigo' className={` border  rounded w-full py-2 bg-sky-200 text-gray-700 `} placeholder='Codigo' />
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='nombre'>Nombre</label>
                    <input type='text' {...register('nombre', { required: true })} id='nombre' className={` border  rounded w-full py-2 bg-sky-200 text-gray-700 `} placeholder='Nombre'/>
                    
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='descripcion'>Descripcion</label>
                    <input type='text' {...register('descripcion', { required: true })} id='descripcion' className={` border  rounded w-full py-2 bg-sky-200 text-gray-700 `} placeholder='Descripcion'/>
                    
                </div>


                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='estatus'>Estatus</label>
                    <input type='text' {...register('estatus', { required: true })} id='estatus' className={` border  rounded w-full py-2 bg-sky-200 text-gray-700 `} placeholder='Estatus' />
                    
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='provedor'>Proveedor</label>
                    <input type='text' {...register('provedor', { required: true })} id='provedor' className={` border  rounded w-full py-2 bg-sky-200 text-gray-700 `} placeholder='Proveedor' maxLength={10} />
                    
                </div>


                <div className='flex items-center justify-center'>
                    <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white  font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mb-px p-px'>Registrarse</button>
                </div>
            </form>
        </div>
    );
}

export default RegisterProducts;
