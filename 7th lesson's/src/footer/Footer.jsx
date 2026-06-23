import "./Footer.css";
import { contacts } from "../Mock";
import youTube from "../assets/youtube.png";
import faceBook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import linkedIn from "../assets/linkedin.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footerCards">
        {contacts.map((item, index) => {
          return (
            <div className="footerCard" key={index}>
              <h5>{item.category}</h5>
              <a href="#">{item.linkOne}</a>
              <a href="#">{item.linkTwo}</a>
              <a href="#">{item.linkThree}</a>
              <a href="#">{item.linkFour}</a>
              <a href="#">{item.linkFive}</a>
              <a href="#">{item.linkSix}</a>
            </div>
          );
        })}
      </div>
      <div className="ending">
        <div className='endingInfos'>
          <span className="footerLogo">
            break<span className="io">io</span>{" "}
          </span>{" "}
          <span className="endingText">@2023 - All rights reserved</span>
        </div>
        <div className="socialContact">
          <img  loading='lazy' src={youTube} alt={youTube} />
          <img loading='lazy' src={faceBook} alt={faceBook} />
          <img loading='lazy' src={twitter} alt={twitter} />
          <img loading='lazy' loading='lazy' src={instagram} alt={instagram} />
          <img loading='lazy' src={linkedIn} alt={linkedIn} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
