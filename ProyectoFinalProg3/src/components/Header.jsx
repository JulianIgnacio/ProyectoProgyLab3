import "../css/Header.css"                                                      // importamos el css para los estilos del componente Header
import LogoFerreteria from '../assets/LogoFerreteria.png'                           // importamos el logo de la empresa alojado en la carpeta Assets
import Carrusel from "./Carousel"




const Header = () => {
  return (
    <header className="header">

      
      <img src={LogoFerreteria} alt="" className="logo" />                          {/* de este modo llamamos para mostrar el logo importado */}
     

      <nav className="navbar">                                                      {/* creamos el navbar para navegar por la pagina */}
        
        <a href={"*"}>Contacto</a>
        <a href={"*"}>Ayuda</a>
      </nav>
      


    </header>
   
  )
}

export default Header