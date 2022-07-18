import React, { Component } from 'react';
//import images
import { Col, Container, Row } from 'reactstrap';
import Hero from '../../assets/images/tonanachain.png';
import Connect from '../../assets/images/Connect.svg';
import * as Styled from './IntroductionBlock';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/solid';

export default class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="align-items-space-between">
            <Col lg={5} md={6}>
              <img src={Hero} className="main-ill img-fluid" alt="" />
            </Col>

            <Col lg={5} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="section-title ms-lg-5 text-light">
                <h4 className="title mb-4">What's tonana</h4>
                Tonana Defi Hub is a decentralized software-development
                organization working hand-in-hand with entrepreneurs and
                organizations inside and outside Web 3.0
                <br />
                <br />
                With rich experience in commercial blockchain development and
                participation in the blockchain community, Tonana team is
                committed to developing and testing cutting-edge ideas and
                business models that make sense.
                <br />
                <br />
                <a
                  href="https://wiki.tonana.org/"
                  className="mt-3 h6 btn btn-app btn-pills"
                >
                  Find Out More <i className="uil uil-angle-right-b"></i>
                </a>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="">
          <Row
            className="align-items-center"
            style={{ margin: '200px 0 200px 0' }}
          >
            <Col className="order-2 order-md-1 mt-4 mt-sm-0 pt-sm-0">
              <div className="section-title ">
                <h4 className="title mb-4">FAQs</h4>

                <Styled.BottomContent>
                  <Styled.Box>
                    <div>
                      <Styled.BoxHeading>
                        What is Tonana Launchpad?
                      </Styled.BoxHeading>
                      <Styled.BoxText>
                        Tonana Launchpad is a funding platform for creative and
                        research projects.
                      </Styled.BoxText>
                    </div>
                    <a
                      href={
                        'https://wiki.tonana.org/tonana-defi-hub/launchpad/whitepaper/what-is-tonana-launchpad'
                      }
                    >
                      <Styled.LearnMore>
                        <p>Learn More</p>
                        <Styled.IconWrapper>
                          <ChevronRightIcon />
                        </Styled.IconWrapper>
                      </Styled.LearnMore>
                    </a>
                  </Styled.Box>
                  <Styled.Box>
                    <div>
                      <Styled.BoxHeading>
                        How tonana bridge works?
                      </Styled.BoxHeading>
                      <Styled.BoxText>
                        Tonana cross-chain bridge uses a lock-and-mint model for
                        moving value between chains.
                      </Styled.BoxText>
                    </div>
                    <a
                      href={
                        'https://wiki.tonana.org/tonana-defi-hub/bridge/whitepaper/how-it-works'
                      }
                    >
                      <Styled.LearnMore>
                        <p>Learn More</p>
                        <Styled.IconWrapper>
                          <ChevronRightIcon />
                        </Styled.IconWrapper>
                      </Styled.LearnMore>
                    </a>
                  </Styled.Box>
                  <Styled.Box>
                    <div>
                      <Styled.BoxHeading>
                        Wich chains Tonana support?
                      </Styled.BoxHeading>
                      <Styled.BoxText>
                        Tonana DeFi hub products works with TON; SOLANA; NEAR
                        and other chains.
                      </Styled.BoxText>
                    </div>
                    <a href={'https://wiki.tonana.org/supported-chains'}>
                      <Styled.LearnMore>
                        <p>Learn More</p>
                        <Styled.IconWrapper>
                          <ChevronRightIcon />
                        </Styled.IconWrapper>
                      </Styled.LearnMore>
                    </a>
                  </Styled.Box>
                  <Styled.Box>
                    <div>
                      <Styled.BoxHeading>
                        How Tonana Launchpad works?
                      </Styled.BoxHeading>
                      <Styled.BoxText>
                        Creators can submit their project. If people like the
                        project, they can donate money to make it happen
                      </Styled.BoxText>
                    </div>
                    <a
                      href={
                        'https://wiki.tonana.org/tonana-defi-hub/launchpad/whitepaper/how-it-works'
                      }
                    >
                      <Styled.LearnMore>
                        <p>Learn More</p>
                        <Styled.IconWrapper>
                          <ChevronRightIcon />
                        </Styled.IconWrapper>
                      </Styled.LearnMore>
                    </a>
                  </Styled.Box>
                </Styled.BottomContent>
              </div>
            </Col>
            {/* <Col lg={5} md={6} className="order-1 order-md-2">
              <img src={Connect} className="main-ill img-fluid" alt="" />
            </Col> */}
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
