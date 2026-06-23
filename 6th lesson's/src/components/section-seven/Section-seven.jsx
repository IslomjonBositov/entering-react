import "./Section-seven.css";
import cellPhoneThree from "../../assets/Col (4).png";

function SectionSeven() {
  return (
    <section className="section-seven">
      <div className="start-now">
        <h2>Caption Start now and get the best services</h2>
        <p>
          Ac urna elementum purus vulputate tincidunt. Quam maecenas feugiat
          congue orci, eget tellus pellentesque aliquet. Felis fringilla morbi
          dui ac consequat risus pharetra odio pulvinar. Id pellentesque in
          tortor nec nulla cras sapien. Adipiscing nisi tellus quisque aliquet
          sit risus elementum scelerisque.
        </p>
        <button type="submit">Get Started</button>
      </div>
      <img loading="lazy" src={cellPhoneThree} alt="cell-phone" />
    </section>
  );
}
export default SectionSeven;
