import "./Section-three.css";
import cellPhone from "../../assets/Col (1).png";

function SectionThree() {
  return (
    <section className="section-three">
      <div className="all-the">
        <h2>All the essential tools</h2>
        <p>
          Odio vulputate cras vel lacinia turpis volutpat adipiscing.
          Sollicitudin at velit, blandit tempus nunc in.
        </p>
      </div>

      <div className="sem-augue">
        <img loading="lazy" src={cellPhone} alt="cell-phone" />

        <div className="tempus">
          <p className="sem">Sem augue tempus</p>
          <p className="venenatis">
            Venenatis blandit habitasse nunc, sapien enim elit in. Arcu,
            pharetra, et cursus sit senectus in blandit. Aliquet enim fermentum
            non semper nibh ut neque. Pellentesque ut tincidunt vitae arcu
            bibendum malesuada lorem sapien volutpat.
          </p>
          <p className="habitant">Habitant integer interdum a</p>
          <p className="natoque">Tempus natoque id</p>
        </div>
      </div>
    </section>
  );
}

export default SectionThree;
