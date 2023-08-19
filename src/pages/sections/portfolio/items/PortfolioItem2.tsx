// Images
import img1 from '../../../../assets/images/portfolio/items/item2/item_img_03.jpg';
import img2 from '../../../../assets/images/portfolio/items/item2/item_img_03b.jpg';
import img3 from '../../../../assets/images/portfolio/items/item2/item_img_03c.jpg';

// -------------------

function PortfolioItem2() {
  return (
    <div className="portfolio-content">
      <h1 className="center-text">Nice Fonts</h1>
      <br />
      <div className="one_half">
        With a warning label this big, you know they gotta be fun. Bring me the
        forms I need to fill out to have her taken away. I decline the title of
        iron cook and accept the lesser title of zinc saucier.
      </div>
      <div className="one_half last">
        You probably haven’t heard of them before they sold out scenester
        literally readymade. Trust fund Thundercats flexitarian, aesthetic
        Tumblr banjo freegan semiotics.
      </div>
      <div className="clear"></div>
      <br />
      <div className="margin-0">
        <img src={img1} alt="" />
      </div>
      <div className="one_half margin-0">
        <img src={img2} alt="" />
      </div>
      <div className="one_half last margin-0">
        <img src={img3} alt="" />
      </div>
      <div className="clear"></div>
      <br />
    </div>
  );
}

export default PortfolioItem2;
