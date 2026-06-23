import "./Section-four.css";
import { oneUser } from "../Mock";

function SectionFour() {
  return (
    <section className="sectionFour">
      <div className="title">
        <h2>What other users say</h2>
      </div>
      {oneUser.map((item, index) => {
        return (
          <div className="oneUser" key={index}>
            <h3>{item.subTitle}</h3>
            <blockquote>{item.paragraph}</blockquote>
            <div className="oneUserProfile">
              <img loading='lazy' src={item.userImg} alt={item.userImg} />
              <p>{item.userName}</p>
              <span>{item.userLevel}</span>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default SectionFour;
