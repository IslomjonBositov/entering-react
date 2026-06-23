import "./Section-two.css";
import laptop from "../assets/Desktop.png";
import phone from "../assets/Mobile-App-Placeholder-1.png";
import imgsInfo from "../assets/Col.png";

function SectionTwo() {
  return (
    <section className="section-two">
      <div className="get-better">
        <h2>Get better everyday</h2>
        <blockquote>
          Et pulvinar nec interdum integer id urna molestie porta nullam. A,
          donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor
          pharetra sed in mauris elementum sollicitudin.
        </blockquote>
        <button type="button">Start Now</button>
      </div>
      <div className="imgs">
        <img loading='lazy' className="laptop" src={laptop} alt={laptop} />
        <img loading='lazy' className="phone" src={phone} alt={phone} />
        <img loading='lazy' className="imgInfo" src={imgsInfo} alt={imgsInfo} />
      </div>
    </section>
  );
}

export default SectionTwo;
