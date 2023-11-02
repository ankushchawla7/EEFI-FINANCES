import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MemberOne from '../assets/images/png/member-one.png'
import MemberTwo from '../assets/images/png/member-two.png'
import MemberThree from '../assets/images/png/member-three.png'
import { Discord, Line, Linkdin, Twitter } from './Icons'

const Team = () => {
    return (
        <>
            <section className='Team-section '>
                <Container className='custom_container'>
                    <h2 className='fs-46 ff-machina-bold line-120 text-capitalize text-white text-center pt-132 pb-73'>our Team</h2>

                    <Row className='justify-content-center gap-xl-50'>
                        <Col xl={3} md={4} sm={6} className='mb-4 mb-md-0 col-10'>
                            <div className="card-box d-flex flex-column gap-20">
                                <img src={MemberOne} alt="member-one" className='w-100 member-img' />
                                <div className='d-flex flex-column align-items-center gap-20'>
                                    <div className='d-flex gap-11 flex-column align-items-center'>
                                        <h3 className='fs-24 ff-raleway fw-medium text-black text-capitalize  line-120 text-center mb-0'>Davoice</h3>
                                        <p className='ff-raleway mb-0  fw-normal line-120 text-capitalize text-black text-center'>co-founder</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <Twitter />
                                        <Line />
                                        <Discord />
                                    </div>
                                </div>

                            </div>
                        </Col>
                        <Col xl={3} md={4} sm={6} className='mb-4 mb-md-0 col-10'>
                            <div className="card-box d-flex flex-column gap-20">
                                <img src={MemberTwo} alt="member-one" className='w-100 member-img' />
                                <div className='d-flex flex-column align-items-center gap-20'>
                                    <div className='d-flex gap-11 flex-column align-items-center'>
                                        <h3 className='fs-24 ff-raleway fw-medium text-black text-capitalize  line-120 text-center mb-0'>Solomon Adekale</h3>
                                        <p className='ff-raleway mb-0  fw-normal line-120 text-capitalize text-black text-center'>co-founder</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <Twitter />
                                        <Line />
                                        <Discord />
                                        <Line />
                                        <Linkdin />
                                    </div>
                                </div>

                            </div>
                        </Col>
                        <Col xl={3} md={4} sm={6} className='mb-4 mb-md-0 col-10'>
                            <div className="card-box d-flex flex-column gap-20">
                                <img src={MemberThree} alt="member-one" className='w-100 member-img' />
                                <div className='d-flex flex-column align-items-center gap-20'>
                                    <div className='d-flex gap-11 flex-column align-items-center'>
                                        <h3 className='fs-24 ff-raleway fw-medium text-black text-capitalize  line-120 text-center mb-0'>Anton</h3>
                                        <p className='ff-raleway mb-0  fw-normal line-120 text-capitalize text-black text-center'>Co-Founder | Lead Developer</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <Twitter />
                                        <Line />
                                        <Discord />
                                        <Line />
                                        <Linkdin />
                                    </div>
                                </div>

                            </div>
                        </Col>
                    </Row>

                </Container>
            </section>
        </>
    )
}

export default Team