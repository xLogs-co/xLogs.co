// UI Components
import { Link as RouterLink } from 'react-router-dom';

// Images
import img1 from '../../assets/images/news/blog_img_01.jpg';
import img2 from '../../assets/images/news/blog_img_02.jpg';
import img3 from '../../assets/images/news/blog_img_03.jpg';

// Data
import newsData from '../../data/news.json';

// ---------------

function News() {
  const images: string[] = [img1, img2, img3];

  /**
   * Returning window to (0 position) when going to single blog page
   */
  const handleClick = () => {
    window.scroll(0, 0);
  };

  return (
    <section id="news" className="section">
      <div className="section-wrapper block content-1170 center-relative">
        <div className="page-title-holder">
          <p className="up-title-text">{newsData.id}</p>
          <h2 className="entry-title">{newsData.title}</h2>
          <p className="page-description">{newsData.description}</p>
        </div>

        <div className="content-wrapper">
          <div className="blog-holder-scode latest-posts-scode block center-relative">
            {newsData.articles.map((post, i) => (
              <article
                key={'post-' + i}
                className="relative blog-item-holder-scode"
              >
                <div className="post-thumbnail">
                  <RouterLink to={post.to} onClick={handleClick}>
                    <div
                      className="latest-posts-background-featured-image-holder"
                      style={{ backgroundImage: `url(${images[i]})` }}
                    ></div>
                  </RouterLink>
                </div>
                <div className="cat-links">
                  <ul>
                    {post.tags.map((tag, i) => (
                      <li key={tag + i}>
                        <a href="#">{tag}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <h4 className="entry-title">
                  <RouterLink to={post.to} onClick={handleClick}>
                    {post.info.title}
                  </RouterLink>
                </h4>
                <span className="entry-date published">{post.info.date}</span>
                <span className="by">by</span>
                <span className="author-nickname">
                  <a href="#" title="Posts by John Smith" rel="author">
                    {post.info.author}
                  </a>
                </span>
              </article>
            ))}

            <div className="clear"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;
