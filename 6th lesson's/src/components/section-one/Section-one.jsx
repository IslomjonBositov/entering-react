import "./Section-one.css";
import phone from "../../assets/Col.png";

function SectionOne() {
  return (
    <section className="section-one">
      <div className="building">
        <h1>Building apps just got easier</h1>
        <p>
          Aliquam vel platea curabitur sit vestibulum egestas sit id lorem.
          Aliquet neque, dui sed eget scelerisque. Non at at venenatis tortor
          amet feugiat ullamcorper in. Odio vulputate cras vel lacinia turpis
          volutpat adipiscing. Sollicitudin at velit, blandit tempus nunc in.
        </p>
        <button className="get-two">Get Started</button>
        <button className="watch">Watch Video</button>
      </div>
      <div className="img">
        <img loading="eager" src={phone} alt="phone" />
      </div>
    </section>
  );
}

export default SectionOne;
