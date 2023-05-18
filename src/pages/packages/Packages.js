import React from "react";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import "./packages.css";

function Packages() {
  return (
    <>
      <section className="packages">
        <div className="contenu-packages">
          <div className="contenu-gauche">
            <h1 className="titreh1">Nos formules</h1>
            <p className="para1">
              Choisissez votre activité <br></br> préférée parmi notre liste{" "}
              <br></br> et contactez-nous pour <br></br> plus d'informations.
            </p>
            <button className="box-para-contact">
              <Link to="/contact">
                <h3 className="contacth4">Contactez-nous</h3>
              </Link>
            </button>
          </div>

          <div className="contenu-droite">
            <div className="box-droite">
              <div className="img-packages">
                <img src={images.g8} alt="tente" />
                <div className="texte-droite">
                  <span className="camper">Camper dans la forêt</span>
                  <p className="para2">Location d'une tente tout confort</p>
                  
                  <span className="price">50€/nuit</span>
                </div>
              </div>
           
              <div className="img-packages">
                <img src={images.g7} alt="mongolfière" />
                <div className="texte-droite">
                  <span className="balade">Ballade en mongolfiere</span>
                  <p className="para2">Balade d'une heure</p>
                  
                  <span className="price">80€/heure</span>
                </div>
              </div>
            </div>

            <div className="box-droite">
              <div className="img-packages">
                <img src={images.img4} alt="montagne" />
                <div className="texte-droite">
                  <span className="randonnee">Faire une randonnée </span>
                  <p className="para2">Visite guidée avec un guide</p>
                  
                  <span className="price">50€/heure</span>
                </div>
              </div>
            
              <div className="img-packages">
                <img src={images.img5} alt="surfer" />
                <div className="texte-droite">
                  <span className="surfer">Surfer sur les vagues</span>
                  <p className="para2">Location de la planche</p>
                 
                  <span className="price">50€/heure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Packages;
