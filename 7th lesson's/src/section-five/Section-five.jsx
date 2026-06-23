import "./Section-five.css";
import { directions } from "../Mock";

function SectionFive() {
  return (
    <section className="sectionFive">
      <div className="sectionFiveTitle">
        <h2>Your favourite tools</h2>
        <blockquote>
          In risus nec molestie at in pulvinar tellus. At integer id condimentum
          gravida nisi nisl. Sem vitae porttitor arcu congue sem erat et sit
          faucibus. Sollicitudin elit gravida tellus mattis porttitor.
        </blockquote>
      </div>

      <div className="directions">
        {directions.map((item, index) => {
          return (
            <div className="direction" key={index}>
              <img loading='lazy' src={item.image} alt={item.image} />
              <h5>{item.title}</h5>
              <blockquote>{item.paragraph}</blockquote>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SectionFive;
