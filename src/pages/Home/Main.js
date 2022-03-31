import React, { Component } from 'react';
//import images
import { Col, Container, Row } from 'reactstrap';
import Hero from '../../assets/images/hero.png';
import Connect from '../../assets/images/Connect.svg';

export default class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col lg={7} md={6}>
              <img src={Hero} className="main-ill img-fluid" alt="" />
            </Col>

            <Col lg={5} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="section-title ms-lg-5">
                <h4 className="title mb-4">What's tonana</h4>
                <ul className="list-unstyled text-main text-dark">
                  <li className="mb-0">
                    <span className="text-warning h4 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    Fast <span className="text-warning h4 me-2">cross-chain</span>
                    integration
                  </li>
                  <li className="mb-0">
                    <span className="text-warning h4 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    Wrapped assets <span className="text-warning">swapping</span>
                  </li>
                  <li className="mb-0">
                    <span className="text-warning h4 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    NFTs as a tool <span className="text-warning">for less commision</span> 
                  </li>
                  <li className="mb-0">
                    <span className="text-warning h4 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    GameFi <span className="text-warning">aggregator</span>
                  </li>
                </ul>
                <a
                  href="https://www.notion.so/f4f76f23b29f41fe9d4aee3c745a7202?v=f02e74972f594f358eec4a7cffb2741c"
                  className="mt-3 h6 btn btn-warning btn-pills"
                >
                  Find Out More <i className="uil uil-angle-right-b"></i>
                </a>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col
              lg={7}
              md={6}
              className="order-2 order-md-1 mt-4 mt-sm-0 pt-sm-0"
            >
              <div className="section-title me-lg-5">
                <h4 className="title mb-4">WHY Tonana</h4>
                <ul className="list-unstyled text-main text-dark">
                  <li className="mb-0">
                    <span className="text-warning h5 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    Community
 <span className="text-warning"> </span> 
                    driven
                  </li>
                  <li className="mb-0">
                    <span className="text-warning h5 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    Hackaton
                    <span className="text-warning"> </span>
                    created
                  </li>
                  <li className="mb-0">
                    <span className="text-warning h5 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    First cross-chain payment gateway 
                  </li>
                </ul>
                <a
                  href="https://www.notion.so/f4f76f23b29f41fe9d4aee3c745a7202?v=f02e74972f594f358eec4a7cffb2741c"
                  className="mt-3 h6 btn btn-warning btn-pills"
                >
                  Find Out More <i className="uil uil-angle-right-b"></i>
                </a>
              </div>
            </Col>

            <Col lg={5} md={6} className="order-1 order-md-2">
              <img src={Connect} className="main-ill img-fluid" alt="" />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
