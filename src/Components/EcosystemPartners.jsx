import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PartnerOne from '../assets/images/svg/first-partner.svg'
import PartnerTwo from '../assets/images/svg/second-partner.svg'
import PartnerThree from '../assets/images/svg/third-partner.svg'
import PartnerFour from '../assets/images/svg/fourth-partner.svg'
import PartnerFive from '../assets/images/svg/fifth-partner.svg'
import PartnerSix from '../assets/images/svg/sixth-partner.svg'


const EcosystemPartners = () => {
    return (
        <>
            <section className='bg-white py-124'>
                <Container>
                    <h2 className='light-blue ff-machine-light fw-bold line-120 text-capitalize fs-46 text-center'>Ecosystem Partners</h2>
                    <Row className='pt-63'>
                        <Col lg={4} sm={6} className='mb-42'>
                            <img src={PartnerOne} alt="partner-one" className='w-100 partner' />
                        </Col>
                        <Col lg={4} sm={6} className='mb-42'>
                            <img src={PartnerTwo} alt="partner-two" className='w-100 partner' />
                        </Col>
                        <Col lg={4} sm={6} className='mb-42'>
                            <img src={PartnerThree} alt="partner-three" className='w-100 partner' />
                        </Col>
                        <Col lg={4} sm={6} className='mb-4 mb-sm-0'>
                            <img src={PartnerFour} alt="partner-four" className='w-100 partner' />
                        </Col>
                        <Col lg={4} sm={6} className='mb-4 mb-sm-0'>
                            <img src={PartnerFive} alt="partner-five" className='w-100 partner' />
                        </Col>
                        <Col lg={4} sm={6} className='mb-4 mb-sm-0'>
                            <img src={PartnerSix} alt="partner-six" className='w-100 partner' />
                        </Col>
                    </Row>
                    <div className='d-flex justify-content-center'>
                        <button className='partner-btn light-blue fs-16 ff-raleway fw-semibold'>More To Be Announced</button>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default EcosystemPartners