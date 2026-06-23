import "./Section-four.css";
import cellPhoneTwo from "../../assets/Col (2).png";

function Sectionfour() {
  return (
    <section className="section-four">
      <div className="focus-on">
        <h2>Focus on what matters</h2>
        <p>
          Eget at purus mauris euismod metus vitae eget. Diam massa venenatis
          pellentesque facilisis nunc, varius.
        </p>
      </div>

      <div className="bibendum">
        <img loading="lazy" src={cellPhoneTwo} alt="cell-phone" />
        <div className="garvida">
          <p className="binen">Bibendum gravida dolor egestas aliquam</p>
          <p className="egestas">
            Egestas tincidunt hendrerit nibh platea sit vivamus aenean rhoncus
            etiam. Tristique amet, sed ac ac dolor habitant. Mauris duis neque
            molestie venenatis nibh hendrerit pharetra. Tortor suscipit leo sit
            tellus ac scelerisque gravida sem.
          </p>
          <p className="lorem">Egestas lorem eget</p>
          <p className="eget">Tellus eget feugiat sit</p>
        </div>
      </div>
      <button type="submit">Get Started</button>
    </section>
  );
}

export default Sectionfour;
