import {useForm} from "react-hook-form";
import { Link } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

function Loginpage() {
    const{register, handleSubmit, formState:{errors}} = useForm();
    const {sigin, isAuthenticated} = useAuth();
    const navigate = useNavigate();
    useEffect(()=>{
        if (isAuthenticated) navigate("/VerProductos");
    }, [isAuthenticated])
    const onSubmit= handleSubmit((data) => {
        sigin(data);
    });

  return (
    <div className="flex justify-center items-center">
      <h1>Iniciar session</h1>
      <form onSubmit={onSubmit} className="'bg-slate-400 shadow-md rounded px-8 pt-6 pm-3 w-200">
        <input className={` border  rounded w-full py-2 bg-sky-200 text-gray-700 `}
          type="text"
          {...register("username", { required: true })}
          placeholder="Nombre de usuario"
        />
        {errors.username && <p className="error">Este campo es requerido</p>}
        <input type="password" 
        className={` border  rounded w-full py-2 bg-sky-200 text-gray-700 `}
        {...register("password", { required: true })} 
        placeholder="Contraseña" />
        {errors.password && <p className="error">Este campo es requerido</p>}
        <button type="submit">Iniciar sesion</button>
      </form>
      <Link className="regresar" to="/">Inicio</Link>
    </div>
  );
}

export default Loginpage;
