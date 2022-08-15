import React, { Component } from 'react';
import { Container, Row, Col, Form, Input, Button } from 'reactstrap';
import { FaMediumM, FaDiscord, FaTwitter, FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
//Import Images
import logolight from '../../assets/images/logo.svg';
import logodark from '../../assets/images/logo.svg';
//Import Icons
import SubscribeFrom from 'react-mailchimp-subscribe';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/solid';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid1: [
        { title: 'Chat', link: '/' },
        { title: 'Membership', link: '/' },
      ],
      grid2: [
        { title: 'About', link: '/' },
        { title: 'Blog', link: '/' },
        { title: 'Integrations', link: '/' },
        { title: 'Developers', link: '/' },
        { title: 'Docs', link: '/' },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <footer className={this.props.isLight ? 'footer bg-dark' : 'footer'}>
          <Container>
            <Row>
              <Col
                lg="6"
                xs="12"
                className="mb-0 mb-md-4 pb-0 pb-md-2"
                name="footercolumn"
              >
                <h5
                  className="text-second"
                >
                  Sign up for the Updates
                </h5>
                <p className='mt-4 color-main'>
                  We'll send you fresh news about our platform, including new
                  features and opportunities for the community.
                </p>

                <Link to="" className="logo-footer">
                  {/* <img
                    src={this.props.isLight ? logodark : logolight}
                    height="24"
                    alt=""
                  /> */}
                </Link>

                <ul
                  className={
                    this.props.isLight
                      ? 'list-unstyled social-icon social mb-0 m t-4'
                      : 'list-unstyled social-icon foot-social-icon mb-0 mt-4'
                  }
                >
                  {/* <li className="list-inline-item me-1">
                    <a href="" className="icon-hover rounded" target="_blank">
                      <FaMediumM className="fea icon-sm fea-social text-dark" />
                    </a>
                  </li> */}

                  <li className="list-inline-item me-1">
                    <a
                      href="https://github.com/tonanadao"
                      className="icon-hover rounded"
                      target="_blank"
                    >
                      <FaGithub
                        icon="github"
                        className="fea icon-sm fea-social color-main  "
                      />
                    </a>
                  </li>

                  <li className="list-inline-item me-1">
                    <a
                      href="https://twitter.com/Tonanadao"
                      target="_blank"
                      className="icon-hover rounded"
                    >
                      <FaTwitter
                        icon="twitter"
                        className="fea icon-sm fea-social color-main"
                      />
                    </a>
                  </li>
                  
                  <li className="list-inline-item me-1">
                    <a
                      href="https://www.linkedin.com/company/tonana/"
                      target="_blank"
                      className="icon-hover rounded"
                    >
                      <FaLinkedin
                        icon="linkedin"
                        className="fea icon-sm fea-social color-main"
                      />
                    </a>
                  </li>
                  <li className="list-inline-item me-1">
                    <a
                      href="https://t.me/tonanadao"
                      target="_blank"
                      className="icon-hover rounded"
                    >
                      <FaTelegram
                        icon="telegram"
                        className="fea icon-sm fea-social color-main"
                      />
                    </a>
                  </li>

                  {/* <li className="list-inline-item me-1">
                    <a href="" target="_blank" className="icon-hover rounded">
                      <FaDiscord
                        icon="discord"
                        className="fea icon-sm fea-social text-dark"
                      />
                    </a>
                  </li> */}

                </ul>
              </Col>

              <Col
                lg="6"
                md="6"
                xs="12"
                className="align-items-left"
                name="footercolumn"
              >
                <div
                  className="buy-button"
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    padding: '0 24px 0 0',
                  }}
                >
                  <div className="subcribe-form mt-4">
                    <div className="input-mailchimp mailchimp-btn subscribe-form">
                      <SubscribeFrom
                        url="https://tonana.us17.list-manage.com/subscribe/post?u=dee8fa21addcdbaff28096df7&id=a54c0269c1"
                      />
                    </div>
                  </div>
                
                </div>
                
              </Col>
            </Row>
          </Container>

        </footer>
        <footer className="footer footer-bar">
          <Container className="text-center">
            <Row className="align-items-center">
              <Col sm="8">
                <div className="text-sm-start text-light">
                  <p className="mb-0">© 2022 tonana.org</p>
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
