import "./Section-five.css";
import girls from "../../assets/Col (3).png";
import dots from "../../assets/Slider Cues.png";

function SectionFive() {
  return (
    <section className="section-five">
      <img className='girl' loading="lazy" src={girls} alt="girl" />
      <div className="success">
        <h5>Success Stories</h5>
        <p className="urna">
          “ Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis
          est velit in. Nibh in purus sit convallis phasellus ut. At vel erat
          ultricies commodo. Neque suspendisse a habitasse commodo. ”
        </p>

        <p className="biograpgy">
          Marie Poirot, <br />
          <span className="bigapp">Bigapp</span>
        </p>
        <img loading='lazy' src={dots} alt="dots" />
      </div>
    </section>
  );
}

export default SectionFive;
