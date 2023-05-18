import React from "react";
import images from "../../constants/images";
import { Link } from "react-router-dom";
import Products from "../../components/products/Products";

import Tyrolienne from "../../components/Tyrolienne";
import Sautelastique from "../../components/Sautelastique";
import Paddle from "../../components/Paddle";
import Canoe from "../../components/Canoe";
import "./home.css";

function Home() {
  return (
    <>
      <section className="home">
        <div className="contenu-home">
          <div className="img-about">
            <img src={images.homeBg3} alt="paysage d'une montagne" />
          </div>
        </div>
        <div className="content-text">
          <h1 className="titre1">Venez expérimenter</h1>          
          <p className="para-home">
            Nos nombreux activités sur terre, dans les airs ou sur
            l'eau.
          </p>

          <button className="lire-suite">
            <Link to="/packages">
              <h4> Lire la suite</h4>
            </Link>
          </button>
        </div>
      </section>

      <section className="categories">
        <h1 className="categoriesh1">NOS ACTIVITES</h1>
        <div className="nos-cat">
          <div className="saut">
            <img className="img-cat" src={images.cat1} alt="saut elastique" />
            <spn className="price-category">
              <h4>100€/seance</h4>
            </spn>
            <Products
              name="SAUT ELASTIQUE"
              description="Vous êtes amateur de sports extrêmes? lancez-vous dans le vide du haut de 220 mètres d'altitude, adrénaline assurée!"
            />
            <Sautelastique />
          </div>

          <div className="tyrolienne">
            <img className="img-cat" src={images.cat2} alt="tyrolienne" />
            <spn className="price-category">
              <h4>80€/seance</h4>
            </spn>
            <Products
              name="TYROLIENNE"
              description="duo en tyrolienne descente le long d'un câble qui s'apparente à un vol plané, dépassant les 100km par heure."
            />
            <Tyrolienne />
          </div>

          <div className="paddle">
            <img className="img-cat" src={images.cat3} alt="paddle" />
            <spn className="price-category">
              <h4>75€/heure</h4>
            </spn>
            <Products
              name="PADDLE"
              description="Envie de détente sur l'eau? surfer sur une planche à l'aide d'une rame et naviguez à votre rythme"
            />
            <Paddle />
          </div>

          <div className="canoe">
            <img className="img-cat" src={images.cat4} alt="canoe" />
            <spn className="price-category">
              <h4>65€/heure</h4>
            </spn>
            <Products
              name="CANOE"
              description="Besoin de tranquilité, voguer paisiblement sur un canoë, à la découverte des magnifiques paysages"
            />
            <Canoe />
          </div>
        </div>
      </section>

      <section className="peace" id="peaceful">
        <div className="image">
          <img src={images.aboutImg} alt="paysage montagne" />
        </div>

        <div className="content">
          <h2>Inoubliables moments de repos bien mérités! </h2>
          <p>
            Après avoir apenté des montées, franchis des cours d'eaux et
            traversé des forêts... Vous voilà au sommet de la montagne! Vous
            méritez bien un petit repos afin de contempler votre récompense.
          </p>

          <button className="lire-suite">
            <Link className="lien-packages" to="/packages">
              <h4>Lire la suite</h4>
            </Link>
          </button>
        </div>
      </section>
    </>
  );
}

export default Home;
