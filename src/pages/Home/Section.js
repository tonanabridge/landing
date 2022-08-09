import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Logo from '../../assets/images/logo.svg';
import { FaMediumM, FaDiscord, FaTwitter, FaLinkedin, FaTelegram, FaGithub } from 'react-icons/fa';

export default class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="bg-home d-flex align-items-center">
          <Container>
            <Row className="justify-content-center">
              <Col lg={6} sm={6} xs={11}>
                <div className="title-heading text-left mt-5 pt-4">
                  <h4 className="heading fw-bold color-main mb-3">
                    TONANA <span className="hero-span">DEFI</span> HUB
                  </h4>
                  <h4
                    className="fw-bold color-main text-align mb-4"
                  >
                    Community-run hackathon-born multichain dapp ecosystem
                  </h4>
                  <div className="d-flex">


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
                    {/* <a
                      href="https://github.com/tonanadao"
                      className="icon-hover rounded"
                      target="_blank"
                    >
                      <FaGithub
                        icon="github"
                        className="fea icon-sm fea-social text-dark"
                      />
                    </a> */}
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
                      href="https://linkedin.com/tonanadao"
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
                  </div>
                </div>
              </Col>
              <Col lg={6} sm={4} xs={6} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="text-md-end text-center ms-lg-4">
                  <img src={Logo} className="Tonana-logo" alt="tonana" width={500} />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
