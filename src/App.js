import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { Link, Route } from 'react-router-dom'
import Articles from './components/Articles'
import Videos from './components/Videos'
import Posts from './components/Posts'
import Players from './components/Players'

class App extends Component {
  state = {
    links: [
      {
        icon: '✍️',
        name: 'articles',
        component: Articles,
        link: '/articles',
        active: true
      },
      {
        icon: '🎥',
        name: 'videos',
        component: Videos,
        link: '/videos',
        active: false
      },
      {
        icon: '📃',
        name: 'posts',
        component: Posts,
        link: '/posts',
        active: false
      },
      {
        icon: '🤺',
        name: 'players',
        component: Players,
        link: '/players',
        active: false
      }
    ]
  }

  handleClick = (linkName) => {
    const links = this.state.links
    links.map((link) => {
      link.active = (link.name === linkName)
      return link
    })

    this.setState({ links });
  }

  render() {
    const links = this.state.links

    const listItems = links.map((link) => {
      return (
        <span style={{ fontWeight: 600, marginLeft: 20, wordSpacing: 'normal', fontSize: 40 }}>
          { link.icon } <Link to={ link.link } onClick={() => this.handleClick(link.name)} className={ link.active ? 'active' : 'header-link'}> { link.name }</Link>
        </span>
      )
    });

    return (
      <div>
        <Grid style={{ marginBottom: 22 }}>
          <Row style={{ marginBottom: 10 }}>
            <Col lg={12}>
              <span style={{ fontSize: 40, fontWeight: 600, backgroundColor: '#333', letterSpacing: 1, paddingTop: 6, paddingBottom: 6, paddingLeft: 10, paddingRight: 10 }}>
                <a href="/" className='title' style={{ color: '#fff' }}>destinyPVP</a>
              </span>
              { listItems }
            </Col>
          </Row>
          <Route exact path='/' render={() => (
            <Articles />
          )}/>
          <Route exact path='/articles' render={() => (
            <Articles />
          )}/>
          <Route exact path='/videos' render={() => (
            <Videos />
          )}/>
          <Route exact path='/posts' render={() => (
            <Posts />
          )}/>
          <Route exact path='/players' render={() => (
            <Players />
          )}/>
        </Grid>
      </div>
    );
  }
}

export default App;
