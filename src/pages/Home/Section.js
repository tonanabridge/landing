    import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap';
import Tonana from '../../assets/images/tonana.png';

export default class Section extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="bg-home d-flex align-items-center">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={6} sm={6} xs={12}>
                        <div className="title-heading text-left mt-5 pt-4">
                            <h4 className="heading fw-bold text-dark title-dark mb-3">the first bridge between <span className='hero-span'>Solana</span> and <span className='hero-span'>Ton</span> </h4>
                            <div className="d-flex justify-content-left">
                                <a href="https://app.tonana.org" className="btn btn-warning btn-pills">Launch app</a>
                            </div>

                        </div>
                    </Col>
                    <Col lg={6} sm={4} xs={6} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="text-md-end text-center ms-lg-4">
                  <img src={Tonana} className="Tonana-logo" alt="" />
                </div>
              </Col>
                </Row>
            </Container>
        </section>
            </React.Fragment>
        )
    }
}