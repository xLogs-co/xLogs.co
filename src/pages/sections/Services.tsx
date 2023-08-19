// Data
import { Fragment } from 'react';
import servicesData from '../../data/services.json';

// -----------------------

function Services() {
  return (
    <section id="services" className="section">
      <div className="section-wrapper block content-1170 center-relative">
        <div className="page-title-holder">
          <p className="up-title-text">{servicesData.id}</p>
          <h2 className="entry-title">{servicesData.title}</h2>
          <p className="page-description">{servicesData.description}</p>
        </div>

        <div className="content-wrapper">
          {servicesData.servicesBoxes.map((serv, i) => (
            <Fragment key={'service-box-' + i}>
              <div
                className={`one_third ${
                  (i + 1) % 3 === 0 ||
                  servicesData.servicesBoxes.length === i + 1
                    ? 'last'
                    : ''
                }`}
              >
                <div
                  className={`service-holder ${
                    serv.bottomSpace ? 'bottom-50' : ''
                  }`}
                >
                  <p className="service-num">{serv.order}</p>
                  <div className="service-txt">
                    <h4>{serv.servTitle}</h4>
                    <p>{serv.desc}</p>
                  </div>
                </div>
              </div>
              {((i + 1) % 3 === 0 ||
                servicesData.servicesBoxes.length === i + 1) && (
                <div className="clear"></div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
