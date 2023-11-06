import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const ContactUs = () => {
    return (
        <>
            <section className='contact-bg'>
                <Container className='custom_container contact-py'>
                    <h2 className='text-white ff-machine-light fs-46 fw-bold text-center text-capitalize line-120 pb-3 mb-1 '>Contact Us</h2>
                    <p className='fs-16 fw-normal ff-raleway line-160 text-white op8 text-center pb-4 mb-3'>Have a question or want to contribute? Reach out to us.</p>
                    <Row className='justify-content-center'>
                        <Col lg={10}>
                            <div className='d-flex justify-content-between'>
                                <input className='first-text' type="text" placeholder='First Name' />
                                <input className='last-text' type="text" placeholder='Last Name' />
                            </div>
                            <div className='d-flex justify-content-between pt-3'>
                                <input className='first-text' type="email" placeholder='Email' />
                                <input className='last-text' type="number" placeholder='Phone Number' />
                            </div>
                            <textarea className='text-area' placeholder='Message'></textarea>
                            <div className='text-center pt-64'>
                                <button className='submit-btn fs-20 ff-raleway fw-medium'>SUBMIT</button>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </section>
        </>
    )
}

export default ContactUs