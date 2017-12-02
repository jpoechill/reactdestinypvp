import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'

class Articles extends Component {
  static propTypes = {
    // books: PropTypes.array.isRequired,
  }

  render() {
    const articles = [
      {
        article: 'The Best And Worst Of Destiny PvP',
        source: 'kotaku.com',
        published: 'Nov. 20th, 2017'
      },
      {
        article: 'PvP tips',
        source: 'polygon.com',
        published: 'Nov. 20th, 2017'
      },
      {
        article: 'Crucible Beginner\'s Guide',
        source: 'gamespot.com',
        published: 'Nov. 20th, 2017'
      },
      {
        article: 'Crucible, Iron Banner, Trials of the Nine, and SRL explained',
        source: 'pcgamesn.com',
        published: 'Oct. 26th, 2017'
      },
      {
        article: 'The 7 Best Guns in Destiny 2\'s PVP',
        source: 'planetdestiny.com',
        published: 'Sept. 27th, 2017'
      },
      {
        article: 'Best PvP Classes & Subclasses, Ranked',
        source: 'twinfinite.com',
        published: 'Sept. 29th, 2017'
      },
      {
        article: 'Crucible PVP guide: Maps, modes, strategy tips and tactics',
        source: 'metabomb.com',
        published: 'Oct. 16th, 2017'
      },
      {
        article: 'The best weapons for Destiny 2 PvP',
        source: 'pcgamesn.com',
        published: 'Oct. 26th, 2017'
      }
    ];
    const listItems = articles.map((article, index, articles) => {
      return (
        <span style={{ fontSize: 40, lineHeight: 1.2, paddingRight: 8 }}>
          <strong>article:</strong> <a>{ article.article }</a> <strong>source:</strong> <a className='source-link'>{ article.source }</a> <strong>published:</strong> { article.published }
        </span>
      )
    });

    return (
      <div>
        <Row>
          <Col lg={12}>
            { listItems }
          </Col>
        </Row>
      </div>
    )
  }
}

export default Articles
