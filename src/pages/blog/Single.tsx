// Swiper Slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

// UI Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Images
import img1 from "../../assets/images/news/posts/post_image_02.jpg";
import img2 from "../../assets/images/news/posts/post_image_03.jpg";
import img3 from "../../assets/images/news/posts/post_image_04.jpg";

// Icons
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// ---------------

function Single() {
  return (
    <div
      id="content"
      className="site-content center-relative single single-post"
      style={{ marginBottom: "100px" }}
    >
      <article>
        <div className="single-post-header-content content-1170 center-relative">
          <div className="image-slider-wrapper relative">
            <Swiper
              pagination={{ clickable: true }}
              grabCursor={true}
              loop={true}
              modules={[Pagination]}
              className="portfolio-item-slider"
            >
              <SwiperSlide>
                <img src={img1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img2} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img3} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="post-wrapper content-1170 center-relative">
          <div className="single-content-wrapper center-relative">
            <h1 className="entry-title">Epochs encyclopa galactica stellar</h1>

            <div className="post-info-wrapper">
              <div className="entry-info">
                <div className="cat-links">
                  <ul>
                    <li>
                      <a href="#">CSS</a>
                    </li>
                    <li>
                      <a href="#">Video</a>
                    </li>
                  </ul>
                </div>
                <div className="entry-date published">September 10, 2018</div>
                <div className="author-nickname">
                  <a href="#" rel="author">
                    John Smith
                  </a>
                </div>
              </div>
            </div>

            <div className="entry-content">
              <p>
                Bearable only through love hydrogen atoms bits of moving fluff
                culture shores of the cosmic ocean paroxysm of global death rich
                in heavy atoms with pretty stories for which there’s little good
                evidence something incredible is waiting to be known not a
                sunrise but a galaxyrise shores of the cosmic ocean.
              </p>
              <br />
              <blockquote>
                <p>
                  Birth dispassionate terrestrial for observer star stuff est
                  harvesting light something incredible is prominant aso waiting
                  to be known descended from astronomers billions.
                </p>
              </blockquote>
              <br />
              <p>
                Galaxies network of wormholes birth extraplanetary Apollonius of
                Perga adipisci velit! Muse about descended from astronomers
                shores of the cosmic ocean across the centuries encyclopaedia
                galactica Euclid intelligent beings. As a patch of light
                Apollonius of Perga, rings of Uranus network of wormholes bits
                of moving fluff, consciousness the only home we’ve ever known.
                Galaxies, corpus callosum radio telescope. Globular star
                cluster, light years made in the interiors of collapsing stars
                cosmic ocean with pretty stories for which there’s little.
              </p>
              <br />
              <p className="video-iframe">
                <iframe src="https://player.vimeo.com/video/199192931"></iframe>
              </p>
              <br />
              <p>
                Curabitur id eros diam. Sed sit amet turpis at magna aliquam
                eleifend eu ac libero. Curabitur id finibus dolor, eget aliquet
                dui. Donec id erat dictum sapien mollis venenatis. Orci varius
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Nullam et blandit felis, non porttitor neque.
                Vivamus egestas, elit ac sagittis condimentum, nulla ipsum
                fermentum sem, sit amet hendrerit nulla purus vel eros. Etiam
                rhoncus velit a dapibus pretium. Maecenas ac turpis magna.
              </p>
              <br />
              <p className="video-iframe">
                <iframe src="https://w.soundcloud.com/player/?visual=true&amp;url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F184006547&amp;show_artwork=true&amp;maxwidth=1170&amp;maxheight=1000&amp;dnt=1"></iframe>
              </p>
              <br />
              <p>
                Nullam porttitor nisl et libero congue, id molestie lectus
                congue. Curabitur id massa tortor. Cras auctor nisl et euismod
                sodales. Quisque egestas nisl eget tempor auctor. Nullam
                viverra, massa varius molestie ornare, eros orci ornare arcu, eu
                pellentesque purus tortor vel eros. Nam tincidunt leo
                sollicitudin purus suscipit facilisis. Morbi sit amet mattis
                turpis. In congue, tellus ut consequat volutpat, ex nibh
                sagittis neque, non facilisis metus ligula ac lectus.
              </p>
            </div>
          </div>
          <div className="clear"></div>
        </div>
      </article>

      <div className="nav-links">
        <div className="content-740 center-relative post-nav-links">
          <div className="nav-previous post-navigator">
            <a href="#" className="nav-post-link">
              <FontAwesomeIcon icon={faArrowLeft} className="icon" />
              <p>Connection of paper and web makes</p>
            </a>

            <div className="cat-links">
              <ul>
                <li>
                  <a href="#">Music</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="nav-next post-navigator">
            <a href="#" className="nav-post-link">
              <FontAwesomeIcon icon={faArrowRight} className="icon" />
              <p>How to write rogue mote of dust love</p>
            </a>
            <div className="cat-links">
              <ul>
                <li>
                  <a href="#">Design</a>
                </li>
                <li>
                  <a href="#">Music</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="clear"></div>
        </div>
      </div>
    </div>
  );
}

export default Single;
