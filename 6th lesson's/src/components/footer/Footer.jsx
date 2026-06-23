import "./Footer.css";
import logo from "../../assets/Appy.png";
import youtube from "../../assets/youtube.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="categories">
        <div className="category">
          <h5>Categories</h5>
          <a href="">User Interface</a>
          <a href="">User Experience</a>
          <a href="">Digital Media</a>
          <a href="">Lifestyle</a>
          <a href="">Programming</a>
          <a href="">Animation</a>
        </div>
        <div className="category">
          <h5>Product</h5>
          <a href="">Pricing</a>
          <a href="">Overview</a>
          <a href="">Browse</a>
          <a href="">Accessibility</a>
          <a href="">Five</a>
          <a href="">Changelog</a>
        </div>
        <div className="category">
          <h5>Solutions</h5>
          <a href="">Brainstorming</a>
          <a href="">Ideation</a>
          <a href="">Wireframing</a>
          <a href="">Research</a>
          <a href="">Design</a>
          <a href="">Concept</a>
        </div>
        <div className="category">
          <h5>Resources</h5>
          <a href="">Help Center</a>
          <a href="">Blog</a>
          <a href="">Tutorials</a>
          <a href="">FAQs</a>
          <a href="">Community</a>
          <a href="">Events</a>
        </div>
        <div className="category">
          <h5>Support</h5>
          <a href="">Contact Us</a>
          <a href="">Developers</a>
          <a href="">Documentation</a>
          <a href="">Integrations</a>
          <a href="">Reports</a>
          <a href="">Webinar</a>
        </div>
        <div className="category">
          <h5>Company</h5>
          <a href="">About</a>
          <a href="">Press</a>
          <a href="">Events</a>
          <a href="">Careers</a>
          <a href="">Customers</a>
          <a href="">Partners</a>
        </div>
      </div>

      <div className="ending">
        <img loading="lazy" src={logo} alt="logo" />
        <p>@ 2023 All rights reserved.</p>
        <div className="social-contact">
          <img src={youtube} alt="youtube" />
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={instagram} alt="instagram" />
          <img src={linkedin} alt="linkedin" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
