import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PageLogo from '../assets/images/svg/Page-logo.svg'
import { Link } from 'react-router-dom'
import MoreArrow from '../assets/images/svg/morearrow.svg'
// import HeroImg from '../assets/images/png/hero-img.png'
import HeroImg2 from '../assets/images/png/hero-img2.png'
import Dots from '../assets/images/png/dots-img.png'


const Header = () => {
    return (
        <>
            <header className='header-bg min-xl_vh-100 d-flex flex-column position-relative z-2'>
                <nav className='position-relative z-1'>
                    <Container className='custom_container d-flex align-items-center justify-content-between'>
                        <a href="#id"><img src={PageLogo} alt="Page-logo" className='Page-Logo' /></a>
                        <div className='d-flex gap-111 align-items-center'>
                            <label for='menubox' className='menu d-lg-none'>
                                <span></span>
                                <span></span>
                                <span></span>
                            </label>
                            <input type="checkbox" id='menubox' hidden />
                            <ul className='d-flex nav-ul list-unstyled gap-4 mb-0 ps-0'>
                                <li><Link to="/" className='text-white fs-16 ff-raleway fw-medium underline position-relative' >About</Link></li>
                                <li><Link to="/Supply" className='text-white fs-16 ff-raleway fw-medium underline position-relative'>IBO Event</Link></li>
                                <li><Link to="/TokenSection" className='text-white fs-16 ff-raleway fw-medium underline position-relative'> EEFI Tokenomics</Link></li>
                                <li><Link to="/Team" className='text-white fs-16 ff-raleway fw-medium underline position-relative'>Team</Link></li>
                                <li><Link to="/EcosystemPartners" className='text-white fs-16 ff-raleway fw-medium underline position-relative'>Partners</Link></li>
                                <li><Link to="/EERoadmap" className='text-white fs-16 ff-raleway fw-medium underline position-relative'>Roadmap</Link></li>
                                <li className='d-flex gap-1 '><Link to="/" className='text-white position-relative underline-2'>More</Link> <Link><img src={MoreArrow} alt="arrow" /></Link></li>
                                <li className='d-lg-none'><button className='butn fs-16 ff-raleway fw-medium light-blue bg-transparent'>Enter App</button>
                                </li>

                            </ul>
                            <button className='butn fs-16 ff-raleway fw-medium light-blue bg-transparent d-none d-xl-block'>Enter App</button>
                        </div>
                        <button className='butn fs-16 d-none d-lg-block d-xl-none ff-raleway fw-medium light-blue bg-transparent'>Enter App</button>
                    </Container>
                </nav>
                <section className="hero  d-flex flex-grow-1">
                    <Container className='custom_container d-flex'>
                        <Row>
                            <Col lg={6} className='pt-xl-5 pt-lg-4 mt-4 mt-xl-5 text-center text-lg-start mb-4 mb-lg-0'>
                                <h1 className='max-463 ff-machine-medium fs-85 text-uppercase text-white mb-4 pb-1'>Building
                                    elastic
                                    Protocol
                                </h1>
                                <p className='text-white fs-16 ff-raleway fw-normal line-150 text-capitalize mb-4'>An ecosystem of unique yield strategies that help you earn yield, amplify, and stretch it across all market conditionsz</p>
                                <h4 className='text-white  ff-raleway fw-bold text-decoration-underline fs-18 mb-0'>Audited by Omniscia</h4>
                            </Col>
                            <Col lg={6}>
                                <img src={HeroImg2} alt="img" className='w-100 hero-img h-100' />
                            </Col>
                        </Row>
                    </Container>

                </section>
                <img src={Dots} alt="Dots-img" className='d-none d-xl-block position-absolute dots-img' />
            </header>
        </>
    )
}

export default Header