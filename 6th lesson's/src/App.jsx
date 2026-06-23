import Header from "./components/header/Header.jsx";
import SectionOne from "./components/section-one/Section-one.jsx";
import SectionTwo from "./components/section-two/Section-two.jsx";
import SectionThree from "./components/section-three/Section-three.jsx";
import SectionFour from "./components/section-four/Section-four.jsx";
import SectionFive from "./components/section-five/Section-five.jsx";
import SectionSix from "./components/section-six/Section-six.jsx";
import SectionSeven from "./components/section-seven/Section-seven.jsx";
import Footer from "./components/footer/Footer.jsx";

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
      <SectionSeven />
      <Footer />
    </div>
  );
}

export default App;
