import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Posts } from 'pages/web/';
import { Menu, MobileMenu } from 'components';

import helpers from 'helpers';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: helpers.isMobile() ? true : false,
      Home: Home,
      About: About,
      Posts: Posts
    }
  }

  componentDidMount() {
    const { isMobile } = this.state;

    if (isMobile) {
      import('pages/mobile/').then(({ MobileHome, MobileAbout, MobilePosts }) => {
        this.setState({
          Home: MobileHome,
          About: MobileAbout,
          Posts: MobilePosts
        });
      })
    }
  }

  render() {
    const { isMobile } = this.state;
    const { About, Home, Posts } = this.state;

    const HomeMenu = isMobile ? MobileMenu : Menu

    return (
      <div>
        <HomeMenu />
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/about/:name" component={About} />
          <Route path="/about" component={About} />
        </Switch>
        <Route path="/posts" component={Posts} />
      </div>
    )
  }
}

export default App;