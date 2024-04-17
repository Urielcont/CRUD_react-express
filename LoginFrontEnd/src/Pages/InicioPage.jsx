import { Link } from 'react-router-dom';


function InicioPage(){
    return(
        <div>
            <h1>INCIO</h1>
            <Link to='/login' >INCIAR SESION</Link>
        </div>
    );
}

export default InicioPage;