import React from 'react'
import { Container } from 'react-bootstrap'
import FooterLogo from '../assets/images/svg/footer-logo.svg'
import { Link } from 'react-router-dom'
import { IconEight, IconFive, IconFour, IconNine, IconOne, IconSeven, IconSix, IconThree, IconTwo} from './Icons'

const Footer = () => {
    return (
        <>
            <section className="footer bg-white">
                <Container>
                    <div className='text-center pt-5'>
                        <img src={FooterLogo} alt="img" className='footer-logo' />
                    </div>
                    <p className='text-center ff-raleway fs-16 fw-normal light-blue pt-3'>Join Our Community</p>
                    <ul className='d-flex gap-4 justify-content-center flex-wrap list-unstyled'>
                        <li><Link className='ff-raleway fs-16 fw-normal text-black op7 footer-link'>About</Link></li>
                        <li><Link className='ff-raleway fs-16 fw-normal text-black op7 footer-link'>IBO Event</Link></li>
                        <li><Link className='ff-raleway fs-16 fw-normal text-black op7 footer-link'>EEFI Tokenomics</Link></li>
                        <li><Link className='ff-raleway fs-16 fw-normal text-black op7 footer-link'>Team</Link></li>
                        <li><Link className='ff-raleway fs-16 fw-normal text-black op7 footer-link'>Roadmap</Link></li>
                        <li><Link className='ff-raleway fs-16 fw-normal text-black op7 footer-link'>Partners</Link></li>
                        <li><Link className='ff-raleway fs-16 fw-normal text-black op7 footer-link'>Contact Us</Link></li>
                    </ul>
                    <div className='d-flex gap-4 justify-content-center pt-4 flex-wrap'>
                        <IconOne />
                        <IconTwo/>
                        <IconThree/>
                        <IconFour/>
                        <IconFive/>
                        <IconSix/>
                        <IconSeven/>
                        <IconEight/>
                        <IconNine/>
                    
                    </div>
                    <div className='d-flex justify-content-between align-items-center pt-85'>
                        <p className='fs-14 ff-raleway fw-normal text-black op7 mb-2 pb-1'>@Copyright 2023</p>
                        <p className='fs-14 ff-raleway fw-normal text-black op7 mb-2 pb-1'>Privacy policy</p>
                    </div>


                </Container>
            </section>
        </>
  )
}

export default Footer