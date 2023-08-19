// Swiper Slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

// Images
import item1 from '../../../../assets/images/portfolio/items/item1/slider_01.jpg';
import item2 from '../../../../assets/images/portfolio/items/item1/slider_03.jpg';
import item3 from '../../../../assets/images/portfolio/items/item1/slider_04.jpg';

// -------------------

function PortfolioItem1() {
  return (
    <div className="portfolio-content">
      <div className="image-slider-wrapper relative">
        <Swiper
          pagination={{ clickable: true }}
          loop={true}
          modules={[Pagination]}
          className="portfolio-item-slider"
        >
          <SwiperSlide>
            <img src={item1} alt="portfolio item 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={item2} alt="portfolio item 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={item3} alt="portfolio item 3" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="two_third">
        <h1>Living Room</h1>
        <p className="small-text">
          Bearable only through love hydrogen atoms bits of moving fluff culture
          shores of the cosmic ocean roxysm of global death rich in heavy atoms
          with miles away from sun.
        </p>
        <p>
          Bearable only through love hydrogen atoms bits of moving fluff culture
          shores of the cosmic ocean paroxysm of global death rich in heavy
          atoms with pretty stories for which there’s little good evidence
          something incredible is waiting to be known not a sunrise but a
          galaxyrise shores of the cosmic ocean inconspicuous motes of rock.
          <br />
        </p>
      </div>

      <div className="one_third last">
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

      <div className="clear"></div>
    </div>
  );
}

export default PortfolioItem1;
