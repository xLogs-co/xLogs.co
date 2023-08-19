// UI Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Images
import member1 from "../../assets/images/team/team_image_01.jpg";
import member2 from "../../assets/images/team/team_image_02.jpg";
import member3 from "../../assets/images/team/team_image_03.jpg";
import dots from "../../assets/images/dots.png";

// Icons
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faVimeo,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";

// Data
import teamData from "../../data/team.json";

// ------------------

function Team() {
  const images: string[] = [member1, member2, member3];

  return (
    <section
      id="team"
      className="section"
      style={{ backgroundImage: `url(${dots})` }}
    >
      <div className="section-wrapper block content-1170 center-relative">
        <div className="page-title-holder">
          <p className="up-title-text">{teamData.id}</p>
          <h2 className="entry-title">{teamData.title}</h2>
          <p className="page-description">{teamData.description}</p>
        </div>

        <div className="content-wrapper">
          {teamData.members.map((member, i) => (
            <div
              key={"team-member-" + i}
              className={"member " + member.className}
            >
              <div className="member-wrapper">
                <div className="member-image-holder">
                  <img src={images[i]} alt="" />
                </div>
                <div className="member-info">
                  <div className="member-name">{member.name}</div>
                  <p className="member-postition">{member.position}</p>
                  <div className="member-content">
                    <p>{member.desc}</p>
                    <div className="member-social-holder">
                      <div className="social">
                        <a href="#">
                          <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                      </div>
                      <div className="social">
                        <a href="#">
                          <FontAwesomeIcon icon={faTwitter} />
                        </a>
                      </div>
                      <div className="social">
                        <a href="#">
                          <FontAwesomeIcon icon={faInstagram} />
                        </a>
                      </div>
                      <div className="social">
                        <a href="#">
                          <FontAwesomeIcon icon={faVimeo} />
                        </a>
                      </div>
                      <div className="social">
                        <a href="#">
                          <FontAwesomeIcon icon={faBehance} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="clear"></div>
      </div>
    </section>
  );
}

export default Team;

/*
function member() {
  return (
    <div className="member-wrapper">
      {member.className.includes("member-right") ? (
        <>
          <div className="member-info">
            <div className="member-name">{member.name}</div>
            <p className="member-postition">{member.position}</p>
            <div className="member-content">
              <p>{member.desc}</p>
              <div className="member-social-holder">
                <div className="social">
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </div>
                <div className="social">
                  <a href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </div>
                <div className="social">
                  <a href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
                <div className="social">
                  <a href="#">
                    <FontAwesomeIcon icon={faVimeo} />
                  </a>
                </div>
                <div className="social">
                  <a href="#">
                    <FontAwesomeIcon icon={faBehance} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="member-image-holder">
            <img src={images[i]} alt="" />
          </div>
        </>
      ) : (
        <>
          <div className="member-image-holder">
            <img src={images[i]} alt="" />
          </div>
          <div className="member-info">
            <div className="member-name">{member.name}</div>
            <p className="member-postition">{member.position}</p>
            <div className="member-content">
              <p>{member.desc}</p>
              <div className="member-social-holder">
                <div className="social">
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </div>
                <div className="social">
                  <a href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </div>
                <div className="social">
                  <a href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
                <div className="social">
                  <a href="#">
                    <FontAwesomeIcon icon={faVimeo} />
                  </a>
                </div>
                <div className="social">
                  <a href="#">
                    <FontAwesomeIcon icon={faBehance} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
*/
