// Images
import img1 from '../../../../assets/images/portfolio/items/item3/image_13.jpg';
import img2 from '../../../../assets/images/portfolio/items/item3/image_09.jpg';
import img3 from '../../../../assets/images/portfolio/items/item3/item_img_04.jpg';

// -------------------

function PortfolioItem3() {
  return (
    <div className="portfolio-content">
      <h1 className="center-text">Creative</h1>
      <br />
      <p>
        <img className="aligncenter bottom-50" src={img1} alt="" />
        <img className="aligncenter bottom-50" src={img2} alt="" />
        <img className="aligncenter" src={img3} alt="" />
      </p>
      <br />
      <div className="button-holder center-text">
        <a href="#" className="button">
          DOWNLOAD
        </a>
      </div>
      <br />
    </div>
  );
}

export default PortfolioItem3;
