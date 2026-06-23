import "./Section-six.css";
import { links } from "../Mock";

function SectionSix() {
  return (
    <section className="sectionSix">
      <div className="frequently">
        <h2>Frequently asked questions</h2>
        <blockquote>
          Et pulvinar nec interdum integer id urna molestie porta nullam. A,
          donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor
          pharetra sed in mauris elementum sollicitudin.
        </blockquote>
      </div>

      <div className="links">
        {links.map((link, index) => {
          return (
            <div className="link" key={index}>
              <a href="#" >{link.link}</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SectionSix;
