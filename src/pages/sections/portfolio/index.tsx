import { useState } from 'react';

// UI Components
import PortfolioItem1 from './items/PortfolioItem1';
import PortfolioItem2 from './items/PortfolioItem2';
import PortfolioItem3 from './items/PortfolioItem3';
import PortfolioItem4 from './items/PortfolioItem4';
// --> Style images
import dots from '../../../assets/images/dots.png';
import closeLeftArrow from '../../../assets/images/close-left-arrow.png';

// Data
import portfolioData from '../../../data/portfolio.json';
import { markdownToHTML } from '../../../utils/converter';

// Images
import portfolio1 from '../../../assets/images/portfolio/portfolio_item_01.jpg';
import portfolio2 from '../../../assets/images/portfolio/portfolio_item_03.jpg';
import portfolio3 from '../../../assets/images/portfolio/portfolio_item_02.jpg';
import portfolio4 from '../../../assets/images/portfolio/portfolio_item_04.jpg';

// --------------

function Portfolio() {
  const images: string[] = [portfolio1, portfolio2, portfolio3, portfolio4];

  // Portfolio item to be shown (change rendered different components in item folder)
  const [portfolioItem, setPortfolioItem] = useState<number>(0);

  /**
   * Opening portfolio item that the user clicked
   *
   * @param num portfolio item to be open
   */
  const handleOpenItem = (num: number) => {
    const element: HTMLElement | null =
      document.getElementById('portfolio-wrapper');
    if (element) {
      element.scrollIntoView();
    }

    setPortfolioItem(num);
  };

  /**
   * Close Opened portfolio item and show the portfolio grid images
   */
  const handlCloseItem = () => {
    const element: HTMLElement | null =
      document.getElementById('portfolio-wrapper');
    if (element) {
      element.scrollIntoView();
      console.log('SCROLLED');
    }

    setPortfolioItem(0);
  };

  return (
    <section
      id="portfolio"
      className="section"
      style={{
        background: `url(${dots})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'calc(50% + 430px) 0',
      }}
    >
      <div className="section-wrapper block content-1170 center-relative">
        <div className="page-title-holder">
          <p className="up-title-text">{portfolioData.id}</p>
          <h2 className="entry-title">{portfolioData.title}</h2>
          <p className="page-description">{portfolioData.description}</p>
        </div>

        <div className="content-wrapper">
          <div className="one_half">
            <h3
              className="medium-text"
              dangerouslySetInnerHTML={{
                __html: markdownToHTML(portfolioData.pargraph1),
              }}
            />
            <p className="small-text">{portfolioData.pargraph2}</p>
          </div>

          <div className="one_half last">{portfolioData.pargraph3}</div>
          <div className="clear"></div>
          <br />

          <div id="portfolio-wrapper">
            {portfolioItem === 0 ? (
              <div className="grid" id="portfolio-grid">
                <div className="grid-sizer"></div>

                {portfolioData.portfolioItems.map((item, i) => (
                  <div
                    key={'portfolio-item-' + i}
                    id="p-item-1"
                    className={`grid-item element-item ${item.className}`}
                  >
                    <a
                      className="item-link ajax-portfolio"
                      style={{ position: 'relative' }}
                      onClick={() => handleOpenItem(item.order + 1)}
                    >
                      <img src={images[i]} alt="" />
                      <div className="portfolio-text-holder">
                        <p className="portfolio-desc">{item.info.desc}</p>
                        <p className="portfolio-title">{item.info.title}</p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <div className="portfolio-load-content-holder">
                <div className="close-icon" onClick={handlCloseItem}>
                  <img src={closeLeftArrow} />
                </div>
                {portfolioItem === 1 ? (
                  <PortfolioItem1 />
                ) : portfolioItem === 2 ? (
                  <PortfolioItem2 />
                ) : portfolioItem === 3 ? (
                  <PortfolioItem3 />
                ) : portfolioItem === 4 ? (
                  <PortfolioItem4 />
                ) : (
                  <></>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
