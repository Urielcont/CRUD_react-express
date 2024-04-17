import { useEffect, useState } from 'react';
import { MostrarProductos } from '../api/auth'; 
import { Link } from 'react-router-dom';


function MostrarProductosPage() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const res = await MostrarProductos();
        setProductos(res.data); 
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };

    fetchProductos();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {productos.map((producto) => (
        <div key={producto.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-black mb-2">Nombre:{producto.nombre}</div>
            <p className='text-black'>Descripcion:</p>
            <p className="text-gray-700 text-base">
              {producto.descripcion}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Codigo:{producto.codigo}</span>
           
          </div>
        </div>
      ))}

      <button><Link to='/RegistrarProducto'>AGREGAR NUEVO PRODUCTO</Link></button>
    </div>
  );
}

export default MostrarProductosPage;
