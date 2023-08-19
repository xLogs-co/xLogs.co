// Swiper Slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

// Data
import clientsData from '../../data/clients.json';

// Images
import reviewerImg1 from '../../assets/images/clients/quote_image_02.jpg';
import reviewerImg2 from '../../assets/images/clients/quote_image_03.jpg';
import reviewerImg3 from '../../assets/images/clients/quote_image_04.jpg';
// --> Icons
import quote from '../../assets/images/quotes_image.png';
import navLeft from '../../assets/images/nav_left.png';
import navRight from '../../assets/images/nav_right.png';

// ---------------

function Clients() {
  const images: string[] = [reviewerImg1, reviewerImg2, reviewerImg3];

  return (
    <div id="clients" className="section no-page-title">
      <div className="section-wrapper block content-1170 center-relative">
        <div className="content-wrapper">
          <div className="text-slider-wrapper relative">
            <div className="text-slider-header-quotes">
              <img src={quote} />
            </div>
            <Swiper
              loop={true}
              effect={'fade'}
              fadeEffect={{
                crossFade: true,
              }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              modules={[EffectFade, Navigation]}
              className="text-slider"
              id="textSlider"
            >
              {clientsData.reviews.map((reviewer, i) => (
                <SwiperSlide
                  className="client-slide"
                  key={'clients-slide-' + i}
                >
                  <p className="text-slide-content">{reviewer.review}</p>
                  <img className="text-slide-img" src={images[i]} alt="" />
                  <div className="text-slide-info">
                    <p className="text-slide-name">{reviewer.name}</p>
                    <p className="text-slide-position">{reviewer.position}</p>
                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-button-prev">
                <img src={navLeft} />
              </div>
              <div className="swiper-button-next">
                <img src={navRight} />
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
