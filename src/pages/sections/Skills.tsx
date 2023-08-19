// Hooks and Functions
import { markdownToHTML } from '../../utils/converter';

// Data
import skillsData from '../../data/skills.json';

// ------------------

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-wrapper block content-1170 center-relative">
        <div className="page-title-holder">
          <p className="up-title-text">{skillsData.id}</p>
          <h2 className="entry-title">{skillsData.title}</h2>
          <p className="page-description">{skillsData.description}</p>
        </div>

        <div className="content-wrapper">
          <div className="one_third">
            <h3
              className="medium-text white-text"
              dangerouslySetInnerHTML={{
                __html: markdownToHTML(skillsData.heading),
              }}
            />
            <br />
            <p
              className="white-text"
              dangerouslySetInnerHTML={{
                __html: markdownToHTML(skillsData.paragraph),
              }}
            />
          </div>

          <div className="two_third last">
            <div className="skills-holder">
              {skillsData.progress.map((prog, i) => (
                <div key={'skills-prog-' + i} className="skill-holder">
                  <div className="skill-percent">{prog.percentage}%</div>
                  <div className="skill-text">
                    <span>{prog.title}</span>
                    <div className="skill">
                      <div
                        className="skill-fill"
                        style={{
                          width: `${prog.percentage}%`,
                          height: `${prog.percentage}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="clear"></div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
