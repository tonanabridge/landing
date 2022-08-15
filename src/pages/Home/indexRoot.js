// React basic and bootstrap
import React, { Component, Suspense } from 'react';
import Section from './Section';
import Main from './Main';
import BlogBox from './BlogBox';
import TeamBox from '../../components/Shared/TeamBox';
import WorkProcess from '../../components/Shared/WorkProcess';



// Scroll up button
import ScrollUpButton from 'react-scroll-up-button';

//Import Icons
import FeatherIcon from 'feather-icons-react';

// Import sub components
const Topbar = React.lazy(() => import('./Topbar'));
const Footer = React.lazy(() => import('./Footer'));

const CustomDot = () => {
  return (
    <i>
      <FeatherIcon icon="arrow-up" className="icons" />
    </i>
  );
};

class IndexRoot extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    document.body.classList = '';
    window.addEventListener('scroll', this.scrollNavigation, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById('topnav').classList.add('nav-sticky');
    } else {
      document.getElementById('topnav').classList.remove('nav-sticky');
    }
  };

  Loader = () => {
    return (
      <div id="preloader">
        <div id="status">
          <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        <Suspense fallback={this.Loader()}>
          <Topbar />
            <Section />
            <Main />
            {/* <BlogBox /> */}
          <Footer />
          <ScrollUpButton
            ContainerClassName="classForContainer"
            style={{ height: 36, width: 36 }}
            TransitionClassName="classForTransition"
          >
            <CustomDot />
          </ScrollUpButton>
        </Suspense>
      </React.Fragment>
    );
  }
}

export default IndexRoot;
