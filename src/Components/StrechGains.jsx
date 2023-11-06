import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Strechimg from '../assets/images/png/StrechGains-img.png'
// import Cloud from '../assets/images/png/Clouds-bottom.png'

const StrechGains = () => {
    return (
        <>
            <section className='strechgains-bg min-md-vh-800 min-xl_vh-100 d-flex flex-column'>
                <h2 className='ff-jakarta fs-52  fw-bold line-120 text-white text-center bg-black pt-4  mb-0'>Amplify and stretch gains</h2>
                <img src={Strechimg} alt="img" className='w-100 d-md-none' />

                <Container className='custom_container flex-grow-1 d-flex'>
                    <Row className='justify-content-center align-items-center'>
                        <Col lg={6} className='py-4'>
                            <p className='text-center bull-text py-3 py-md-0 text-white fs-14 fw-normal ff-raleway mb-0'>We take a different balanced approach to finding and creating yield opportunities in the everchanging crypto market. Our yield strategies help users stay protected and hedged during bear markets and amplify yield during bull markets without resorting to leverage or other dangerous techniques.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default StrechGains