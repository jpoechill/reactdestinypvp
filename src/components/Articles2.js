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
        source: 'kotaku',
        published: 'Nov. 20th, 2017'
      },
      {
        article: 'PvP tips',
        source: 'polygon',
        published: 'Nov. 20th, 2017'
      },
      {
        article: 'Crucible Beginner\'s Guide',
        source: 'gamespot',
        published: 'Nov. 20th, 2017'
      },
      {
        article: 'Crucible, Iron Banner, Trials of the Nine, and SRL explained',
        source: 'pcgamesn',
        published: 'Oct. 26th, 2017'
      },
      {
        article: 'The 7 Best Guns in Destiny 2\'s PVP',
        source: 'planetdestiny',
        published: 'Sept. 27th, 2017'
      },
      {
        article: 'Best PvP Classes & Subclasses, Ranked',
        source: 'twinfinite',
        published: 'Sept. 29th, 2017'
      },
      {
        article: 'Crucible PVP guide: Maps, modes, strategy tips and tactics',
        source: 'metabomb',
        published: 'Oct. 16th, 2017'
      },
      {
        article: 'The best weapons for Destiny 2 PvP',
        source: 'pcgamesn',
        published: 'Oct. 26th, 2017'
      }
    ];
    const listItems = articles.map((article, index, articles) => {
      return (
        <div>
          <Row>
            {
              (index % 2) ? (
                <Col lg={6} style={{ float: 'left', marginTop: 20, textAlign: 'right', padding: 0, padding: 0 }}>
                  <table>
                    <tr>
                      <th>article</th>
                      <td>{ article.article }</td>
                    </tr>
                    <tr>
                      <th>source</th>
                      <td><a>{ article.source }</a></td>
                    </tr>
                    <tr>
                      <th>published</th>
                      <td>{ article.published }</td>
                    </tr>
                  </table>
                </Col>
              ) : ('')
            }
            {
              (index % 2 && articles[index+1]) ? (
                <Col lg={6} style={{ float: 'left', marginTop: 20, textAlign: 'right', padding: 0, padding: 0 }}>
                  <table>
                    <tr>
                      <th>article</th>
                      <td>{ articles[index+1].article }</td>
                    </tr>
                    <tr>
                      <th>source</th>
                      <td className='titleContent'><a>{ articles[index+1].source }</a></td>
                    </tr>
                    <tr>
                      <th>published</th>
                      <td>{ articles[index+1].published }</td>
                    </tr>
                  </table>
                </Col>
              ) : ('')
            }
          </Row>
        </div>
      )
    });

    return (
      <div>
        <Row>
          { listItems }
        </Row>
      </div>
    )
  }
}

export default Articles
