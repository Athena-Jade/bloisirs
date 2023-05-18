import "./services.css";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import ForestIcon from "@mui/icons-material/Forest";
import BathroomIcon from "@mui/icons-material/Bathroom";

function Services() {

  return (
    <section className="services">
      <div className="contenu-services">
        <div className="fastf">
          <FastfoodIcon className="logo-fast" style={{fontSize:"1.5rem"}}/>
          <p className="service-texte">Restauration rapide</p>
        </div>

        <div className="electri">
          <ElectricalServicesIcon className="logo-electri"  style={{fontSize:"1.65rem"}}/>
          <p className="service-texte">Prise électrique</p>
        </div>

        <div className="forest">
          <ForestIcon className="logo-forest"  style={{fontSize:"1.5rem"}}/>
          <p className="service-texte">Cadre agréable</p>
        </div>

        <div className="bath">
          <BathroomIcon className="logo-bath"  style={{fontSize:"1.5rem"}}/>
          <p className="service-texte">Sanitaires propres</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
