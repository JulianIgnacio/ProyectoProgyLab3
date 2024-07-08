import "../css/Header.css"
import LogoFerreteria from '../assets/LogoFerreteria.png'       
import {Link} from 'react-router-dom'

const HeaderMain = () => {
  return (
    <header className="header">

      
      <img src={LogoFerreteria} alt="" className="logo" />                          {/* de este modo llamamos para mostrar el logo importado */}
      

      <nav className="navbar">                                                      {/* creamos el navbar para navegar por la pagina */}
        
        <Link to='/' className='btn btn-danger'>Cerrar Sesion</Link>                {/* creamos un boton (Link) para poder cerrar la sesion y que nos deposite en la ruta raiz */}
        <a href={'*'}>Contacto</a>
        <a href={'*'}>Ayuda</a>
      </nav>

    </header>
  )
}

export default HeaderMain