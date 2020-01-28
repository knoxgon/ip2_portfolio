import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Home from '../Home/Home';
import Portfolio from '../Portfolio/Portfolio';
import NF404 from '../NF404/NF404';
import {Links, Header, Logo, Ham} from './styledNavbar';
import HamburgerMenu from 'react-hamburger-menu';
import Api from '../Api/Api';
import Footer from '../Footer/Footer';


class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

  handleClick = () => {
    if(window.innerWidth <= 768) {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }

  render() {
    return (
      <Router>
          <Header>
            <Logo>
              <Link to="/">
                <img src={require('../assets/logo_transparent.png')} height="100" width="100" alt="logo"></img>
              </Link>
            </Logo>
            <Ham>
              <HamburgerMenu backgroundColor="white" isOpen={this.state.isOpen} menuClicked={this.handleClick} width={32} height={20} strokeWidth={5} rotate={0} color='black' borderRadius={0} animationDuration={0.5}></HamburgerMenu>
            </Ham>
            <Links isOpen={this.state.isOpen}>
              <nav>
                <div onClick={this.handleClick.bind(this)}><Link to="/">Home</Link></div>
                <div onClick={this.handleClick.bind(this)}><Link to="/api">API</Link></div>
                <div onClick={this.handleClick.bind(this)}><Link to="/portfolio">Portfolio</Link></div>
              </nav>
            </Links>
          </Header>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route path="/api" component={Api}/>
          <Route path="*" component={NF404}/>
        </Switch>
        <Footer ></Footer>
      </Router>
    );
  }
}

export default Navbar;