import { Link as LinkScroll } from "react-scroll";

const HomeButton = () => {
  return (
    <LinkScroll
      to="home"
      spy={true}
      smooth={true}
      duration={1000}
      className="btn btn-outline py-2 px-5 sm:px-8 border-blue-200 text-blue-200 bg-white-500 hover:bg-azulpathbooks hover:text-blue-200 transition-all hover:shadow-azulpathbooks"
    >
      <img src="/assets/icon/backhome.png" alt="Icono" style={{ maxWidth: "20px" }} />
      Regresar a Inicio
    </LinkScroll>
  );
};

export default HomeButton;