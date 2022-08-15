import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import ScrollspyNav from './scrollSpy';

import Logo from '../../assets/images/logo.svg';

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        {
          id: 1,
          idnm: 'about',
          navheading: 'Docs',
          href: 'https://wiki.tonana.org/',
        },
        {
          id: 2,
          idnm: 'events',
          navheading: 'Events',
          href: 'https://wiki.tonana.org/events/we-organize',
        },
        {
          id: 3,
          idnm: 'team',
          navheading: 'Team',
          href: 'https://wiki.tonana.org/tonana-defi-hub/dao/developers',
        },
        {
          id: 4,
          idnm: 'blog',
          navheading: 'Blog',
          href: 'https://twitter.com/tonana_dao',
        },
      ],
 
        
      isOpen: false,
    };
    this.toggleLine = this.toggleLine.bind(this);
  }

  toggleLine() {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    //Store all Navigationbar Id into TargetID variable(Used for Scrollspy)
    let targetId = this.state.navItems.map((item) => {
      return item.idnm;
    });
    return (
      <React.Fragment>
        <header id="topnav" className="defaultscroll sticky">
          <Container>
            <Link className="logo" to="/">
              <img src={Logo} height="60" alt="" />
            </Link>
            <div className="buy-button">
              <a
                href="https://app.tonana.org"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-app btn-pills"
              >
                Launch app
              </a>
            </div>
            <div className="menu-extras">
              <div className="menu-item">
                <Link
                  to="#"
                  onClick={this.toggleLine}
                  className={
                    this.state.isOpen ? 'navbar-toggle open' : 'navbar-toggle'
                  }
                >
                  <div className="lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </Link>
              </div>
            </div>
            <ScrollspyNav
              scrollTargetIds={targetId}
              scrollDuration="800"
              headerBackground="false"
              activeNavClass="active"
            >
              <div
                id="navigation"
                style={{ display: this.state.isOpen ? "block" : "none" }}
              >
                <ul className="navigation-menu">
                  {this.state.navItems.map((item, key) => (
                    <li key={key} className="has-submenu">
                      <a href={item.href} target="_blank"> {item.navheading}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollspyNav>
          </Container>
        </header>
      </React.Fragment>
    );
  }
}

export default Topbar;