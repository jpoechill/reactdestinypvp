import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'

class Posts extends Component {
  static propTypes = {
    // books: PropTypes.array.isRequired,
  }

  render() {
    const posts = [
      {
        post: 'The Racemond Callout System',
        source: 'reddit.com',
        published: 'Nov. 24th, 2017'
      },
      {
        post: 'Destiny 2 In-Depth Trials of the Nine - PvP Guide',
        source: 'reddit.com',
        published: 'Nov. 23rd, 2017'
      },
      {
        post: 'How to use Hand Cannons effectively. Gameplay + commentary.',
        source: 'reddit.com',
        published: 'Nov. 22nd, 2017'
      }
    ];
    const listItems = posts.map((post, index, posts) => {
      return (
        <span style={{ fontSize: 40, lineHeight: 1.2, paddingRight: 8 }}>
          <strong>post:</strong> <a>{ post.post }</a> <strong>source:</strong> <a className='source-link'>{ post.source }</a> <strong>published:</strong> { post.published }
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

export default Posts
