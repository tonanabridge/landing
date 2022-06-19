import React, { Component } from 'react';
//import images
import { Col, Container, Row } from 'reactstrap';
import Hero from '../../assets/images/hero.png';
import Connect from '../../assets/images/Connect.svg';
import * as Styled from './IntroductionBlock';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/solid';

export default class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="align-items-space-between">
            <Col lg={5} md={6} style={{ margin: '-40px 20px 0 80px' }}>
              <img src={Hero} className="main-ill img-fluid" alt="" />
            </Col>

            <Col lg={5} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="section-title ms-lg-5">
                <h4 className="title mb-4">What's tonana</h4>
                Tonana Defi Hub is a decentralized software-development
                organization working hand-in-hand with entrepreneurs and
                organizations inside and outside Web 3.0
                <br />
                <br />
                With rich experience in commercial blockchain development and
                participation in the blockchain community, Tonan's team is
                committed to developing and testing cutting-edge ideas and
                business models that make sense.
                <br />
                <br />
                <a
                  href="https://wiki.tonana.org/"
                  className="mt-3 h6 btn btn-warning btn-pills"
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
                        What is Community Funding
                      </Styled.BoxHeading>
                      <Styled.BoxText>
                        Before getting started, let's dig into Tonana Launchpad
                        and what it stands for
                      </Styled.BoxText>
                    </div>
                    <Styled.LearnMore>
                      <p>Learn More</p>
                      <Styled.IconWrapper>
                        <ChevronRightIcon />
                      </Styled.IconWrapper>
                    </Styled.LearnMore>
                  </Styled.Box>
                  <Styled.Box>
                    <div>
                      <Styled.BoxHeading>
                        Proof-of-work Vesting System
                      </Styled.BoxHeading>
                      <Styled.BoxText>
                        Get to know more about the Tonana Security of Investment
                      </Styled.BoxText>
                    </div>
                    <Styled.LearnMore>
                      <p>Learn More</p>
                      <Styled.IconWrapper>
                        <ChevronRightIcon />
                      </Styled.IconWrapper>
                    </Styled.LearnMore>
                  </Styled.Box>
                  <Styled.Box>
                    <div>
                      <Styled.BoxHeading>How to get started</Styled.BoxHeading>
                      <Styled.BoxText>
                        Time for action! This guide enlights you on your crypto
                        investment path
                      </Styled.BoxText>
                    </div>
                    <Styled.LearnMore>
                      <p>Learn More</p>
                      <Styled.IconWrapper>
                        <ChevronRightIcon />
                      </Styled.IconWrapper>
                    </Styled.LearnMore>
                  </Styled.Box>
                  <Styled.Box>
                    <div>
                      <Styled.BoxHeading>
                        Research & Develoment
                      </Styled.BoxHeading>
                      <Styled.BoxText>
                        Learn how to use DeFi, DAO and Blockchain to fund
                        startup development in the article.
                      </Styled.BoxText>
                    </div>
                    <Styled.LearnMore>
                      <p>Learn More</p>
                      <Styled.IconWrapper>
                        <ChevronRightIcon />
                      </Styled.IconWrapper>
                    </Styled.LearnMore>
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
