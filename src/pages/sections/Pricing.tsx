// UI Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link as RouterLink } from 'react-router-dom';

// Images
import dots2 from '../../assets/images/dots2.png';

// Icons
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

// Data
import pricingData from '../../data/pricing.json';

// ------------------

function Pricing() {
  /**
   * Returning window to (0 position) when going to single blog page
   */
  const handleClick = () => {
    window.scroll(0, 0);
  };

  return (
    <section
      id="pricing"
      className="section"
      style={{ backgroundImage: `url(${dots2})` }}
    >
      <div className="section-wrapper block content-1170 center-relative">
        <div className="page-title-holder">
          <p className="up-title-text">{pricingData.id}</p>
          <h2 className="entry-title">{pricingData.title}</h2>
          <p className="page-description">{pricingData.description}</p>
        </div>

        <div className="content-wrapper">
          {pricingData.plans.map((plan, i) => (
            <div
              key={'pricing-plan-' + i}
              className={'one_third ' + ((i + 1) % 3 === 0 ? 'last' : '')}
            >
              <div className="pricing-table">
                <div className="pricing-table-header">
                  <div className="pricing-table-title">{plan.title}</div>
                </div>
                <div className="pricing-wrapper">
                  <div className="pricing-table-price">{plan.price}</div>
                  <div className="pricing-table-desc">{plan.desc}</div>
                  <div className="pricing-table-content-holder">
                    <ul>
                      {plan.features.map((feat, j) => (
                        <li key={'feat-' + j} className="pricing-list">
                          {feat.exist ? (
                            <FontAwesomeIcon
                              icon={faCheck}
                              style={{
                                marginRight: '25px',
                                fontSize: '25px',
                                color: '#dc6041',
                              }}
                            />
                          ) : (
                            <FontAwesomeIcon
                              icon={faTimes}
                              style={{
                                marginRight: '25px',
                                fontSize: '25px',
                                color: '#808080',
                              }}
                            />
                          )}
                          {feat.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="pricing-button">
                  <RouterLink
                    to={plan.selectButton.to}
                    className="button"
                    onClick={handleClick}
                  >
                    {plan.selectButton.text}
                  </RouterLink>
                </div>
              </div>
            </div>
          ))}
          <div className="clear"></div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
