import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'

class Articles extends Component {
  static propTypes = {
    // books: PropTypes.array.isRequired,
  }

  render() {
    const videos = [
      {
        video: 'The Best And Worst Of Destiny PvP',
        source: 'youtube.com',
        published: 'Nov. 20th, 2017'
      },
      {
        video: 'PvP tips',
        source: 'youtube.com',
        published: 'Nov. 20th, 2017'
      },
      {
        video: 'Crucible Beginner\'s Guide',
        source: 'youtube.com',
        published: 'Nov. 20th, 2017'
      },
      {
        video: 'Crucible, Iron Banner, Trials of the Nine, and SRL explained',
        source: 'youtube.com',
        published: 'Oct. 26th, 2017'
      },
      {
        video: 'The best weapons for Destiny 2 PvP',
        source: 'youtube.com',
        published: 'Oct. 26th, 2017'
      }
    ];
    const listItems = videos.map((video, index, articles) => {
      return (
        <span style={{ fontSize: 40, lineHeight: 1.2, paddingRight: 8 }}>
          <strong>video:</strong> <a>{ video.video }</a> <strong>source:</strong> <a className='source-link'>{ video.source }</a> <strong>published:</strong> { video.published }
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
