import "./Section-one.css";
import guys from "../assets/Left.png";

function SectionOne() {
  return (
    <section className="section-one">
      <div className="entering">
        <h1>It’s time to take a break</h1>
        <p>
          Build your meditation skills with an app that gives you all you need!
        </p>
        <div className="search-part">
          <input type="search" placeholder="Enter your name" autoFocus />
          <button type="button">Start Now</button>
        </div>
      </div>
      <img loading='eager' src={guys} alt="The guys are seeing something" />
    </section>
  );
}

export default SectionOne;
