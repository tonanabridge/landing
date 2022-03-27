import React, { Component } from 'react';
import { Container, Row, Col, Form, Input, Button } from "reactstrap";
import { FaMediumM, FaDiscord, FaTwitter, FaGithub } from 'react-icons/fa';
import { Link } from "react-router-dom";
//Import Images
import logolight from "../../assets/images/tonana.svg";
import logodark from "../../assets/images/tonana.svg";
//Import Icons
import SubscribeFrom from "react-mailchimp-subscribe";

 class Footer extends Component {

  
    constructor(props) {
        super(props);
        this.state = {
          grid1: [
            { title: "Chat", link: "/" },
            { title: "Membership", link: "/" },
          ],
          grid2: [
            { title: "About", link: "/" },
            { title: "Blog", link: "/" },
            { title: "Integrations", link: "/" },
            { title: "Developers", link: "/" },
            { title: "Docs", link: "/" },
          ],
        };
      }
    render() {
        return (
            <React.Fragment>
                <footer className={this.props.isLight ? "footer bg-dark" : "footer"}>
          <Container>
            <Row>
              <Col
                lg="6"
                xs="12"
                className="mb-0 mb-md-4 pb-0 pb-md-2"
                name="footercolumn"
              >
                <h5
                  className={
                    this.props.isLight
                      ? "text-dark footer-head"
                      : "text-dark footer-head"
                  }
                >
                  Sign up for the Updates
                </h5>
                <p className={this.props.isLight ? "mt-4 text-dark" : "mt-4"}>
                We'll send you fresh news about our platform, including new features and opportunities for the community.
                </p>

                <Link to="" className="logo-footer">
                  <img
                    src={this.props.isLight ? logodark : logolight}
                    height="24"
                    alt=""
                  />
                </Link> 

                <ul className={this.props.isLight ? "list-unstyled social-icon social mb-0 m t-4" : "list-unstyled social-icon foot-social-icon mb-0 mt-4"}>
                  
                  <li className="list-inline-item me-1">
                    <a href="" className="icon-hover rounded" target="_blank">
                    <FaMediumM className="fea icon-sm fea-social text-dark"/>
                    </a>
                  </li>

                  <li className="list-inline-item me-1">
                    <a href="" className="icon-hover rounded" target="_blank">
                      <FaGithub
                        icon="github"
                        className="fea icon-sm fea-social text-dark"
                      />
                    </a>
                  </li>

                  <li className="list-inline-item me-1">
                    <a href="https://twitter.com/TonanaBridge" target="_blank" className="icon-hover rounded">
                      <FaTwitter
                        icon="twitter"
                        className="fea icon-sm fea-social text-dark"
                      />
                    </a>
                  </li>

                  <li className="list-inline-item me-1">
                    <a href="" target="_blank" className="icon-hover rounded">
                      <FaDiscord
                        icon="discord"
                        className="fea icon-sm fea-social text-dark"
                      />
                    </a>
                  </li>

                </ul>
              </Col>
              

              <Col
                lg="6"
                md="6"
                xs="12"
                className="align-items-center"
                name="footercolumn"
              >
                  <div className="subcribe-form mt-4">
                    <div className="input-mailchimp mailchimp-btn subscribe-form">
                      <SubscribeFrom
                        url="https://chat.us14.list-manage.com/subscribe/post?u=63396c3932c39d351c5a97e14&id=5b38a1847d"
                      />
                    </div>
                  </div>
                
              </Col>
            </Row>
            <Row>    
            <Col
                lg="6"
                md="6"
                xs="12"
                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                name="footercolumn"
              >
              </Col>     
                 <Col
                lg="3"
                md="3"
                xs="6"
                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                name="footercolumn"
              >
                <h5
                  className={
                    this.props.isLight
                      ? "text-dark footer-head"
                      : "text-dark footer-head"
                  }
                >
                  App
                </h5>
                <ul className="list-unstyled text-dark footer-list mt-4">
                  {this.state.grid1.map((grid, key) => (
                    <li className="text-dark" key={key}>
                      <Link
                        to={grid.link}
                        className={
                          this.props.isLight ? "text-dark" : "text-foot"
                        }
                      >
                        <i className="mdi mdi-chevron-right text-dark me-1"></i>{" "}
                        {grid.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>

              <Col
                lg="3"
                md="3"
                xs="6"
                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                name="footercolumn"
              >
                <h5
                  className={
                    this.props.isLight
                      ? "text-dark footer-head"
                      : "text-dark footer-head"
                  }
                >
                  Navigation
                </h5>
                <ul className="list-unstyled footer-list mt-4">
                  {this.state.grid2.map((grid, key) => (
                    <li key={key}>
                      <Link
                        to={grid.link}
                        className={
                          this.props.isLight ? "text-dark" : "text-foot"
                        }
                      >
                        <i className="mdi mdi-chevron-right text-dark me-1 text-dark"></i>
                        {grid.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>
              </Row>

          </Container>
        </footer>
        <footer className="footer footer-bar">
          <Container className="text-center">
            <Row className="align-items-center">
              <Col sm="8">
                <div className="text-sm-start text-dark">
                  <p className="mb-0">
                    © 2022 tonana.org
                  </p>
                </div>
              </Col>

            </Row>
          </Container>
        </footer>
            </React.Fragment>
        );
    }
}
export default Footer;
