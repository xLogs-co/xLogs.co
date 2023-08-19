// Data
import mileData from '../../data/milestones.json';

// ------------------

function Milestones() {
  return (
    <section id="milestones" className="section">
      <div className="section-wrapper block content-1170 center-relative">
        <div className="page-title-holder">
          <p className="up-title-text">{mileData.id}</p>
          <h2 className="entry-title">{mileData.title}</h2>
          <p className="page-description">{mileData.description}</p>
        </div>

        <div className="content-wrapper">
          <ul className="milestones-holder">
            {mileData.stones.map((stone, i) => (
              <li key={'milestone-' + i} className="milestone">
                <p className="milestone-num">{stone.number}</p>
                <p className="milestone-text">{stone.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="clear"></div>
      </div>
    </section>
  );
}

export default Milestones;
