import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'

class Players extends Component {
  static propTypes = {
    // books: PropTypes.array.isRequired,
  }

  render() {
    const players = [
      {
        player: 'Kraftyy',
        social: 'twitch, twitter'
      },
      {
        player: 'one_second_kill',
        social: 'twitch, twitter'
      },
      {
        player: 'bames123',
        social: 'twitch, twitter'
      },
      {
        player: 'sotanahT_Reverse',
        social: 'twitch, twitter'
      },
      {
        player: 'Deadfall',
        social: 'twitch, twitter'
      },
      {
        player: 'Aristotle Aston',
        social: 'twitch, twitter, youtube'
      },
      {
        player: 'CtonioVS',
        social: 'twitch, twitter, youtube'
      },
      {
        player: 'Evosite',
        social: 'twitch, twitter, youtube'
      },
      {
        player: 'Rebuken#11995',
        social: 'twitch, twitter'
      },
      {
        player: 'Skysofrenla',
        social: 'twitch, twitter, youtube'
      },
      {
        player: 'Kraftyy',
        social: 'twitch, twitter, youtube'
      }
    ];
    const listItems = players.map((player) => {
      return (
        <span style={{ fontSize: 40, lineHeight: 1.2, paddingRight: 8 }}>
          <strong>player:</strong> <a>{ player.player }</a> <strong>social:</strong> <a className='source-link'>{ player.social }</a>
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

export default Players
