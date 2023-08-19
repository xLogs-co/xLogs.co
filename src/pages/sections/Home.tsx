// Data
import homeData from "../../data/home.json";

// Images
import dots from "../../assets/images/dots.png";
import iconLogo from "../../assets/images/icon_logo.png";
import mainImage01 from "../../assets/images/home/main_img_01.jpg";
import { markdownToHTML } from "../../utils/converter";
import { Link as ScrollLink } from "react-scroll";

// ---------------

function Home() {
  return (
    <section id="home" className="section no-page-title">
      <div className="section-wrapper block content-1170 center-relative">
        <div className="content-wrapper">
          <h1
            className="entry-title big-title"
            dangerouslySetInnerHTML={{
              __html: markdownToHTML(homeData.welcomeText),
            }}
          />
          <p
            className="site-description"
            dangerouslySetInnerHTML={{
              __html: markdownToHTML(homeData.description),
            }}
          />
          <br />
        </div>
      </div>
      <div
        className="home-full-width"
        style={{
          backgroundImage: `url(${mainImage01})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          height: "100vh",
        }}
      >
        <img className="dots" src={dots} alt="Dots" />
        <ScrollLink
          className="button home-button"
          smooth
          to={"contact"}
          offset={-77}
        >
          CONTACT US
        </ScrollLink>
        <div className="home-full-width-background">
          <img className="logo-icon" src={iconLogo} alt="Meelo Icon" />
        </div>
      </div>
    </section>
  );
}

export default Home;
