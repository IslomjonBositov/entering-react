import Header from "./header/Header.jsx";
import SectionOne from "./section-one/Section-one.jsx";
import SectionTwo from "./section-two/Section-two.jsx";
import SectionThree from "./section-three/Section-three.jsx";
import SectionFour from "./section-four/Section-four.jsx";
import SectionFive from "./section-five/Section-five.jsx";
import SectionSix from "./section-six/Section-six.jsx";
import Footer from "./footer/Footer.jsx";

function App() {
  return (
    <div className="container">
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <Footer />
    </div>
  );
}

export default App;
