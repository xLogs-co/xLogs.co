// UI Components
import { Link as ScrollLink } from 'react-scroll';

// Images
import aboutImage from '../../assets/images/about/about_image_01.jpg';

// Hooks and Functions
import { markdownToHTML } from '../../utils/converter';

// Data
import aboutData from '../../data/about.json';
import { Fragment } from 'react';

// ------------------

function About() {
  return (
    <section id="about" className="section">
      <div className="section-wrapper block content-1170 center-relative">
        <div className="page-title-holder">
          <p className="up-title-text">{aboutData.id}</p>
          <h2 className="entry-title">{aboutData.title}</h2>
          <p className="page-description">{aboutData.description}</p>
        </div>

        <div className="content-wrapper">
          <p>
            <img src={aboutImage} alt="" />
          </p>
          <br />
          <h3
            className="medium-text"
            dangerouslySetInnerHTML={{
              __html: markdownToHTML(aboutData.mediumText),
            }}
          />
          <br />

          <div className="one_half">
            <p
              className="small-text"
              dangerouslySetInnerHTML={{
                __html: markdownToHTML(aboutData.smallText),
              }}
            />
            {aboutData.paragraphs.map((p, i) => (
              <Fragment key={'about-paragraph-' + i}>
                <p dangerouslySetInnerHTML={{ __html: markdownToHTML(p) }} />
                <br />
              </Fragment>
            ))}
            <div className="button-holder text-left">
              <ScrollLink
                className="button"
                smooth
                to={aboutData.internalLink.to}
                offset={-77}
              >
                {aboutData.internalLink.text}
              </ScrollLink>
            </div>
          </div>

          <div className="one_half last">
            <ul className="timeline-holder">
              {aboutData.events.map((e, i) => (
                <li key={'about-event-' + i} className="timeline-event">
                  <span className="timeline-circle"></span>
                  <div className="timeline-event-content">{e.content}</div>
                  <div className="timeline-event-date">{e.date}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className="clear"></div>
        </div>
      </div>
    </section>
  );
}

export default About;
