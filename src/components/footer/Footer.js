import "./footer.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import FastfoodIcon from "@mui/icons-material/Fastfood";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import ForestIcon from "@mui/icons-material/Forest";
import BathroomIcon from "@mui/icons-material/Bathroom";

export default function Footer() {
  return (
    <>
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>Nos coordonnées</h3>
            <p>
              <LocalPhoneIcon style={{ fontSize: "1.80rem", color: "blue" }} />
              <i>0123456789</i>
            </p>
            <br></br>

            <p>
              <LocationOnIcon style={{ fontSize: "1.80rem", color: "blue" }} />
              <i>MontMerveilleux Base de loisirs</i>
            </p>
            <br></br>

            <p>
              <EmailIcon style={{ fontSize: "1.80rem", color: "blue" }} />
              <i>montmerveilleux@gmail.fr </i>
            </p>
          </div>

          <div className="box">
            <h3>Suivez-nous</h3>
            <div className="contenu-box2">
              <p>
                Facebook
                <FacebookIcon
                  style={{
                    fontSize: "1.50rem",
                    color: "blue",
                    backgroundColor: "white",
                    float: "right",
                  }}
                />
              </p>

              <p>
                Twitter
                <TwitterIcon
                  style={{
                    fontSize: "1.50rem",
                    color: "blue",
                    backgroundColor: "white",
                    float: "right",
                  }}
                />
              </p>

              <p>
                GitHub
                <GitHubIcon
                  style={{
                    fontSize: "1.50rem",
                    color: "blue",
                    backgroundColor: "white",
                    float: "right",
                  }}
                />
              </p>

              <p>
                LinkedIn
                <LinkedInIcon
                  style={{
                    fontSize: "1.55rem",
                    color: "blue",
                    backgroundColor: "white",
                    float: "right",
                  }}
                />
              </p>
              
            </div>
          </div>
        </div>

        <div className="contenu-services">
          <div className="fastf">
            <FastfoodIcon
              className="logo-fast"
              style={{ fontSize: "2.5rem" }}
            />
            <p className="service-texte">Restauration rapide</p>
          </div>

          <div className="electri">
            <ElectricalServicesIcon
              className="logo-electri"
              style={{ fontSize: "2.5rem" }}
            />
            <p className="service-texte">Prise électrique</p>
          </div>

          <div className="forest">
            <ForestIcon
              className="logo-forest"
              style={{ fontSize: "2.5rem" }}
            />
            <p className="service-texte">Cadre agréable</p>
          </div>

          <div className="bath">
            <BathroomIcon
              className="logo-bath"
              style={{ fontSize: "2.5rem" }}
            />
            <p className="service-texte">Sanitaires propres</p>
          </div>
        </div>
      </section>
    </>
  );
}
