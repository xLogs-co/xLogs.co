// Images
import img1 from '../../../../assets/images/portfolio/items/item4/item_img_02b.jpg';
import img2 from '../../../../assets/images/portfolio/items/item4/item_img_02c.jpg';

// -------------------

function PortfolioItem4() {
  return (
    <div className="portfolio-content">
      <div className="one_half margin-0">
        <img src={img1} alt="" />
      </div>
      <div className="one_half last margin-0">
        <img src={img2} alt="" />
      </div>
      <div className="clear"></div>
      <br />

      <div className="one_third">
        <br />
        <br />
        <div className="info-code">
          <p className="info-code-title">PROJECT</p>
          <p className="info-code-content">Corporate Branding</p>
        </div>
        <div className="info-code">
          <p className="info-code-title">CLIENT</p>
          <p className="info-code-content">Envato Studio</p>
        </div>
        <div className="info-code">
          <p className="info-code-title">DATE</p>
          <p className="info-code-content">September 2018</p>
        </div>
        <div className="info-code">
          <p className="info-code-title">DESIGNER</p>
          <p className="info-code-content">John Petters</p>
        </div>
      </div>
      <div className="two_third last">
        <h1>Architecture</h1>
        <p className="small-text">
          Bearable only through love hydrogen atoms bits of moving fluff culture
          shores of the cosmic ocean roxysm of global death rich in heavy atoms
          with miles away from sun.
        </p>
        <br />
        <p>
          Bearable only through love hydrogen atoms bits of moving fluff culture
          shores of the cosmic ocean paroxysm of global death rich in heavy
          atoms with pretty stories for which there’s little good evidence
          something incredible is waiting to be known not a sunrise but a
          galaxyrise shores of the cosmic ocean inconspicuous motes of rock.
        </p>
      </div>
      <div className="clear"></div>
    </div>
  );
}

export default PortfolioItem4;
