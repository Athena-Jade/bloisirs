import "./error.css";
import { Link } from "react-router-dom";
import images from "../../constants/images";

function Error() {
  return (
    <section className="page-error">
      <h3 className="error"> Oops...! 404 page introuvable</h3>
      <div className="contenu-error">
        <div className="contenu-img-error">
          <img src={images.error} alt="page error" style={{width:"50%"}}/>
        </div>
       
        <div className="retour-accueil">
          <Link to="/">retour accueil</Link>
        </div>
      </div>
    </section>
  );
}

export default Error;
