import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ColIconFive, ColIconFour, ColIconOne, ColIconThree, ColIconTwo } from './Icons'

const TokenSection = () => {
    return (
        <>
            <section className='token position-relative d-none d-lg-block'>
                <div className="container custom_container py-178">
                    <Row className='justify-content-between'>
                        <Col lg={5} className='mb-4'>
                            <div>
                                <h2 className='fs-46 text-black ff-machine-light font-bold mb-3 pb-1'>EEFI Tokenomics</h2>
                                <p className='fs-16 ff-raleway line-160 text-black fw-normal mb-4 pb-2'>EEFI is the special rewards token of the protocol that is minted and distributed in a decentralized fashion. It produces amplified yield during uptrends and protects from downside action during downtrends.</p>
                                <button className='fs-16 fw-medium ff-raleway text-white view-contact-btn mb-5'>View Contract Address</button>
                                <h3 className='fs-24 fw-bold ff-machine-light text-black line-120 text-capitalize mb-4 pb-1'>IBO TOKENOMICS</h3>
                                <h4 className='fs-18 fw-bold ff-raleway line-134 text-black pb-3 mb-0'>IBO Round 1 Price</h4>
                                <p className='fs-16 fw-semibold ff-raleway light-blue line-134 pb-3 mb-1'>1 EEFI = $12</p>
                                <h4 className='fs-18 fw-bold ff-raleway line-134 text-black pb-3 mb-0'>IBO Round 2 Price</h4>
                                <p className='fs-16 fw-semibold ff-raleway light-blue line-134 pb-3 mb-1'>1 EEFI = $12</p>
                                <h4 className='fs-18 fw-bold ff-raleway line-134 text-black pb-3 mb-0'>IBO Round 3 Price</h4>
                                <p className='fs-16 fw-semibold ff-raleway light-blue line-134 pb-3 mb-1'>1 EEFI = $12</p>
                                <h4 className='fs-18 fw-bold ff-raleway line-134 text-black pb-3 mb-0'>total supply</h4>
                                <p className='fs-16 fw-semibold ff-raleway light-blue line-134 mb-0'>17,000</p>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className='d-flex flex-column gap-31'>
                                <div className='d-flex align-items-center'>
                                    <span><ColIconOne /></span>
                                    <div className='d-flex flex-column'>
                                        <h5 className='fs-24 ff-machine-light fw-bold text-white line-120 text-capitalize'>Decentralized Yield</h5>
                                        <p className='fs-16 ff-raleway fw-normal line-183 op8 text-white mb-0'>Protocol’s native utility | rewards token</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <span><ColIconTwo /></span>
                                    <div className='d-flex flex-column'>
                                        <h5 className='fs-24 ff-machine-light fw-bold text-white line-120 text-capitalize'>Extra Value</h5>
                                        <p className='fs-16 ff-raleway fw-normal line-183 op8 text-white mb-0'>Can be highly deflationary during market uptrends</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <span><ColIconThree /></span>
                                    <div className='d-flex flex-column'>
                                        <h5 className='fs-24 ff-machine-light fw-bold text-white line-120 text-capitalize'>Smart Index</h5>
                                        <p className='fs-16 ff-raleway fw-normal line-183 op8 text-white mb-0'>Token can be viewed as an index of all strategy performance on the protocol</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <span><ColIconFour /></span>
                                    <div className='d-flex flex-column'>
                                        <h5 className='fs-24 ff-machine-light fw-bold text-white line-120 text-capitalize'>Social Coordination (E,E)</h5>
                                        <p className='fs-16 ff-raleway fw-normal line-183 op8 text-white mb-0'>Promotes hyper social coordination around all strategies on the protocol (E,E) (makes hedging fun and working together produces more benefits to all vault users)</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <span><ColIconFive /></span>
                                    <div className='d-flex flex-column'>
                                        <h5 className='fs-24 ff-machine-light fw-bold text-white line-120 text-capitalize'>Expansive Utility Dimensions</h5>
                                        <p className='fs-16 ff-raleway fw-normal line-183 op8 text-white mb-0'>EEFI’s utility will expand as more strategies are added to the protocol.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            <section className='white-token d-lg-none'>
                <Container className='custom_container py-5'>
                    <div>
                        <h2 className='fs-46 text-black ff-machine-light font-bold mb-3 pb-1'>EEFI Tokenomics</h2>
                        <p className='fs-16 ff-raleway line-160 text-black fw-normal mb-4 pb-2'>EEFI is the special rewards token of the protocol that is minted and distributed in a decentralized fashion. It produces amplified yield during uptrends and protects from downside action during downtrends.</p>
                        <button className='fs-16 fw-medium ff-raleway text-white view-contact-btn mb-5'>View Contract Address</button>
                        <h3 className='fs-24 fw-bold ff-machine-light text-black line-120 text-capitalize mb-4 pb-1'>IBO TOKENOMICS</h3>
                        <h4 className='fs-18 fw-bold ff-raleway line-134 text-black pb-3 mb-0'>IBO Round 1 Price</h4>
                        <p className='fs-16 fw-semibold ff-raleway light-blue line-134 pb-3 mb-1'>1 EEFI = $12</p>
                        <h4 className='fs-18 fw-bold ff-raleway line-134 text-black pb-3 mb-0'>IBO Round 2 Price</h4>
                        <p className='fs-16 fw-semibold ff-raleway light-blue line-134 pb-3 mb-1'>1 EEFI = $12</p>
                        <h4 className='fs-18 fw-bold ff-raleway line-134 text-black pb-3 mb-0'>IBO Round 3 Price</h4>
                        <p className='fs-16 fw-semibold ff-raleway light-blue line-134 pb-3 mb-1'>1 EEFI = $12</p>
                        <h4 className='fs-18 fw-bold ff-raleway line-134 text-black pb-3 mb-0'>total supply</h4>
                        <p className='fs-16 fw-semibold ff-raleway light-blue line-134 mb-0'>17,000</p>
                    </div>
                </Container>
            </section>
            <section className="blue-token d-lg-none">
                <Container className='custom_container py-5'>
                    <div className='d-flex flex-column gap-31'>
                        <div className='d-flex align-items-center'>
                            <span><ColIconOne /></span>
                            <div className='d-flex flex-column'>
                                <h5 className='fs-24 ff-machine-light fw-bold text-white line-120 text-capitalize'>Decentralized Yield</h5>
                                <p className='fs-16 ff-raleway fw-normal line-183 op8 text-white mb-0'>Protocol’s native utility | rewards token</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center'>
                            <span><ColIconTwo /></span>
                            <div className='d-flex flex-column'>
                                <h5 className='fs-24 ff-machine-light fw-bold text-white line-120 text-capitalize'>Extra Value</h5>
                                <p className='fs-16 ff-raleway fw-normal line-183 op8 text-white mb-0'>Can be highly deflationary during market uptrends</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center'>
                            <span><ColIconThree /></span>
                            <div className='d-flex flex-column'>
                                <h5 className='fs-24 ff-machine-light fw-bold text-white line-120 text-capitalize'>Smart Index</h5>
                                <p className='fs-16 ff-raleway fw-normal line-183 op8 text-white mb-0'>Token can be viewed as an index of all strategy performance on the protocol</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center'>
                            <span><ColIconFour /></span>
                            <div className='d-flex flex-column'>
                                <h5 className='fs-24 ff-machine-light fw-bold text-white line-120 text-capitalize'>Social Coordination (E,E)</h5>
                                <p className='fs-16 ff-raleway fw-normal line-183 op8 text-white mb-0'>Promotes hyper social coordination around all strategies on the protocol (E,E) (makes hedging fun and working together produces more benefits to all vault users)</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center'>
                            <span><ColIconFive /></span>
                            <div className='d-flex flex-column'>
                                <h5 className='fs-24 ff-machine-light fw-bold text-white line-120 text-capitalize'>Expansive Utility Dimensions</h5>
                                <p className='fs-16 ff-raleway fw-normal line-183 op8 text-white mb-0'>EEFI’s utility will expand as more strategies are added to the protocol.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default TokenSection