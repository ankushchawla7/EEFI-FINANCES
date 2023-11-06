import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Container, Row } from 'react-bootstrap'
import SliderImage from '../assets/images/png/slider-card.png'
import Cloudimg from '../assets/images/png/Clouds-bottom.png'
import Sample from '../assets/images/png/Sample.png'

const CoreStrategies = () => {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        arrows: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1920,
                responsive: {
                    slidesToShow: 1,
                    slidesToScroll: 0,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: "unslick",
            }

        ]
    }

    return (
        <>
            <section className='strategies-bg py-128 position-relative'>
                <Container className='custom_container position-relative z-1'>
                    <div class="row justify-content-center">
                        <div className="d-flex flex-column col-lg-9">
                            <h2 className='fs-46 fw-bold ff-machine-light text-white line-120 text-capitalize text-center mb-3 mb-lg-4'>Core Strategies</h2>
                            <p className='fs-16  ff-raleway text-white fw-normal line-160 text-center pb-4'>Our initial strategies use powerful burgeoning trends like Real Yield, Rebase, and others to generate cutting-edged yield innovations. These yield strategies stretch beyond the drought in stable coins and set the value for our native protocol token $EEFI. Check them out!'</p>
                        </div>
                    </div>
                    <Slider {...settings}>
                        <Row className='d-flex justify-content-lg-between justify-content-center align-items-center'>
                            <Col lg={4} sm={8} className='col-10 mb-4 mb-lg-0'>
                                <img src={SliderImage} alt="slider-card" className='w-100 bradi-12' />
                            </Col>
                            <Col lg={7} className='h-267 overflow-y-auto'>
                                <h3 className='text-white fs-38 ff-machine-light fw-normal line-120 text-capitalize'>Elastic Vault</h3>
                                <div className='d-flex gap-2 align-items-center'>
                                    <p className='text-white  fs-22 line-160 fw-normal ff-raleway mb-0'>Deposit Token</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                                        <path d="M10.21 6.01159C10.35 5.87771 10.518 5.7959 10.7 5.7959C10.889 5.7959 11.05 5.87771 11.197 6.01159C11.33 6.16777 11.4 6.34627 11.4 6.53965C11.4 6.74046 11.33 6.91152 11.197 7.06771C11.05 7.20902 10.889 7.2834 10.7 7.2834C10.518 7.2834 10.35 7.20902 10.21 7.06771C10.077 6.91152 10 6.74046 10 6.53965C10 6.34627 10.077 6.16777 10.21 6.01159ZM8.46 9.49234C8.46 9.49234 9.979 8.21309 10.532 8.16102C11.05 8.1164 10.945 8.74859 10.896 9.07584L10.889 9.12046C10.791 9.51465 10.672 9.99065 10.553 10.4443C10.287 11.4781 10.028 12.4896 10.091 12.6756C10.161 12.9285 10.595 12.6086 10.91 12.3855C10.952 12.3558 10.987 12.326 11.022 12.3037C11.022 12.3037 11.078 12.2442 11.134 12.326C11.148 12.3483 11.162 12.3706 11.176 12.3855C11.239 12.4896 11.274 12.5268 11.19 12.5863L11.162 12.6012C11.008 12.7128 10.35 13.2036 10.084 13.3821C9.797 13.583 8.698 14.2523 8.866 12.9508C9.013 12.036 9.209 11.2476 9.363 10.6303C9.65 9.51465 9.776 9.0089 9.132 9.44771C8.873 9.61134 8.719 9.71546 8.628 9.7824C8.551 9.8419 8.544 9.8419 8.495 9.74521L8.474 9.70059L8.439 9.64109C8.39 9.56671 8.39 9.55927 8.46 9.49234ZM17 9.51465C17 13.6053 13.85 16.9521 10 16.9521C6.15 16.9521 3 13.6053 3 9.51465C3 5.42402 6.15 2.07715 10 2.07715C13.85 2.07715 17 5.42402 17 9.51465ZM16.3 9.51465C16.3 5.7959 13.7924 2.8209 10 2.8209C6.20761 2.8209 3.7 5.64715 3.7 9.51465C3.7 13.3821 6.62795 16.2084 10 16.2084C13.5777 16.2084 16.3 13.2334 16.3 9.51465Z" fill="white" />
                                    </svg>
                                </div>
                                <p className='text-white fs-16 fw-normal ff-raleway line-160 op8'> $AMPL</p>
                                <h5 className='text-white fs-22 line-160 fw-normal ff-raleway'>Flagship Hedging Strategy</h5>
                                <p className='text-white fs-16 fw-normal ff-raleway line-160 op8'>This one-of-a-kind strategy combines the benefits of Rebase’s force multiplier effect and Real Yield’s sustainability.</p>
                                <p className='text-white fs-16 fw-normal ff-raleway line-160 op8'>Helps users to protect against downtrends and amplify yield rewards during market up trends.</p>
                                <p className='text-white fs-16 fw-normal ff-raleway line-160 op8'>Those who choose to hedge with the Vault or participate in its economic cycles are the ones greatly rewarded when markets return to optimal conditions</p>
                                <ol className='ps-3 mb-0'>
                                    <li className='text-white fs-16 fw-normal ff-raleway line-160 op8'>Initially utilizes both OG rebase tokens $AMPL and $OHM.
                                        <ul  className='list-disc'>
                                            <li className='text-white fs-16 fw-normal ff-raleway line-160 op8'>Deposit $AMPL and receive $EEFI and $OHM rewards; </li>
                                            <li className='text-white fs-16 fw-normal ff-raleway line-160 op8'>Vault activities are determined by $AMPL’s rebase status; when AMPL supply is expanding, $EEFI is automatically purchased and burned daily; when AMPL supply is stable or contracting, $EEFI is minted (learn more).</li>
                                        </ul>
                                    </li>
                                    <li className='text-white fs-16 fw-normal ff-raleway line-160 op8'>Potentially any token can be rebase-enabled and added to this strategy (subject to governance)</li>
                                    <li className='text-white fs-16 fw-normal ff-raleway line-160 op8'  >Sub vaults can be created to add extra “yield” utility dimensions to $EEFI (and take advantage of sub-trends and viral movements within crypto)</li>
                                </ol>
                            </Col>
                        </Row>
                        <Row className='d-none d-lg-flex justify-content-lg-between justify-content-center align-items-center'>
                            <Col lg={4} sm={8} className='col-10 mb-4 mb-lg-0'>
                                <img src={SliderImage} alt="slider-card" className='w-100 bradi-12' />
                            </Col>
                            <Col lg={7} className='h-267 overflow-y-auto'>
                                <h3 className='text-white fs-38 ff-machine-light fw-normal line-120 text-capitalize'>Elastic Vault</h3>
                                <div className='d-flex gap-2 align-items-center'>
                                    <p className='text-white  fs-22 line-160 fw-normal ff-raleway mb-0'>Deposit Token</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                                        <path d="M10.21 6.01159C10.35 5.87771 10.518 5.7959 10.7 5.7959C10.889 5.7959 11.05 5.87771 11.197 6.01159C11.33 6.16777 11.4 6.34627 11.4 6.53965C11.4 6.74046 11.33 6.91152 11.197 7.06771C11.05 7.20902 10.889 7.2834 10.7 7.2834C10.518 7.2834 10.35 7.20902 10.21 7.06771C10.077 6.91152 10 6.74046 10 6.53965C10 6.34627 10.077 6.16777 10.21 6.01159ZM8.46 9.49234C8.46 9.49234 9.979 8.21309 10.532 8.16102C11.05 8.1164 10.945 8.74859 10.896 9.07584L10.889 9.12046C10.791 9.51465 10.672 9.99065 10.553 10.4443C10.287 11.4781 10.028 12.4896 10.091 12.6756C10.161 12.9285 10.595 12.6086 10.91 12.3855C10.952 12.3558 10.987 12.326 11.022 12.3037C11.022 12.3037 11.078 12.2442 11.134 12.326C11.148 12.3483 11.162 12.3706 11.176 12.3855C11.239 12.4896 11.274 12.5268 11.19 12.5863L11.162 12.6012C11.008 12.7128 10.35 13.2036 10.084 13.3821C9.797 13.583 8.698 14.2523 8.866 12.9508C9.013 12.036 9.209 11.2476 9.363 10.6303C9.65 9.51465 9.776 9.0089 9.132 9.44771C8.873 9.61134 8.719 9.71546 8.628 9.7824C8.551 9.8419 8.544 9.8419 8.495 9.74521L8.474 9.70059L8.439 9.64109C8.39 9.56671 8.39 9.55927 8.46 9.49234ZM17 9.51465C17 13.6053 13.85 16.9521 10 16.9521C6.15 16.9521 3 13.6053 3 9.51465C3 5.42402 6.15 2.07715 10 2.07715C13.85 2.07715 17 5.42402 17 9.51465ZM16.3 9.51465C16.3 5.7959 13.7924 2.8209 10 2.8209C6.20761 2.8209 3.7 5.64715 3.7 9.51465C3.7 13.3821 6.62795 16.2084 10 16.2084C13.5777 16.2084 16.3 13.2334 16.3 9.51465Z" fill="white" />
                                    </svg>
                                </div>
                                <p className='text-white fs-16 fw-normal ff-raleway line-160 op8'> $AMPL</p>
                                <h5 className='text-white fs-22 line-160 fw-normal ff-raleway'>Flagship Hedging Strategy</h5>
                                <p className='text-white fs-16 fw-normal ff-raleway line-160 op8'>This one-of-a-kind strategy combines the benefits of Rebase’s force multiplier effect and Real Yield’s sustainability.</p>
                                <p className='text-white fs-16 fw-normal ff-raleway line-160 op8'>Helps users to protect against downtrends and amplify yield rewards during market up trends.</p>
                                <p className='text-white fs-16 fw-normal ff-raleway line-160 op8'>Those who choose to hedge with the Vault or participate in its economic cycles are the ones greatly rewarded when markets return to optimal conditions</p>
                                <ol className='ps-3 mb-0'>
                                    <li className='text-white fs-16 fw-normal ff-raleway line-160 op8'>Initially utilizes both OG rebase tokens $AMPL and $OHM.
                                        <ul className='list-disc'>
                                            <li className='text-white fs-16 fw-normal ff-raleway line-160 op8'>Deposit $AMPL and receive $EEFI and $OHM rewards; </li>
                                            <li className='text-white fs-16 fw-normal ff-raleway line-160 op8'>Vault activities are determined by $AMPL’s rebase status; when AMPL supply is expanding, $EEFI is automatically purchased and burned daily; when AMPL supply is stable or contracting, $EEFI is minted (learn more).</li>
                                        </ul>
                                    </li>
                                    <li className='text-white fs-16 fw-normal ff-raleway line-160 op8'>Potentially any token can be rebase-enabled and added to this strategy (subject to governance)</li>
                                    <li className='text-white fs-16 fw-normal ff-raleway line-160 op8'  >Sub vaults can be created to add extra “yield” utility dimensions to $EEFI (and take advantage of sub-trends and viral movements within crypto)</li>
                                </ol>
                            </Col>
                        </Row>
                        <Row className='d-none d-lg-flex justify-content-lg-between justify-content-center align-items-center'>
                            <Col lg={4} sm={8} className='col-10 mb-4 mb-lg-0'>
                                <img src={SliderImage} alt="slider-card" className='w-100 bradi-12' />
                            </Col>
                            <Col lg={7} className='h-267 overflow-y-auto'>
                                <h3 className='text-white fs-38 ff-machine-light fw-normal line-120 text-capitalize'>Elastic Vault</h3>
                                <div className='d-flex gap-2 align-items-center'>
                                    <p className='text-white  fs-22 line-160 fw-normal ff-raleway mb-0'>Deposit Token</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                                        <path d="M10.21 6.01159C10.35 5.87771 10.518 5.7959 10.7 5.7959C10.889 5.7959 11.05 5.87771 11.197 6.01159C11.33 6.16777 11.4 6.34627 11.4 6.53965C11.4 6.74046 11.33 6.91152 11.197 7.06771C11.05 7.20902 10.889 7.2834 10.7 7.2834C10.518 7.2834 10.35 7.20902 10.21 7.06771C10.077 6.91152 10 6.74046 10 6.53965C10 6.34627 10.077 6.16777 10.21 6.01159ZM8.46 9.49234C8.46 9.49234 9.979 8.21309 10.532 8.16102C11.05 8.1164 10.945 8.74859 10.896 9.07584L10.889 9.12046C10.791 9.51465 10.672 9.99065 10.553 10.4443C10.287 11.4781 10.028 12.4896 10.091 12.6756C10.161 12.9285 10.595 12.6086 10.91 12.3855C10.952 12.3558 10.987 12.326 11.022 12.3037C11.022 12.3037 11.078 12.2442 11.134 12.326C11.148 12.3483 11.162 12.3706 11.176 12.3855C11.239 12.4896 11.274 12.5268 11.19 12.5863L11.162 12.6012C11.008 12.7128 10.35 13.2036 10.084 13.3821C9.797 13.583 8.698 14.2523 8.866 12.9508C9.013 12.036 9.209 11.2476 9.363 10.6303C9.65 9.51465 9.776 9.0089 9.132 9.44771C8.873 9.61134 8.719 9.71546 8.628 9.7824C8.551 9.8419 8.544 9.8419 8.495 9.74521L8.474 9.70059L8.439 9.64109C8.39 9.56671 8.39 9.55927 8.46 9.49234ZM17 9.51465C17 13.6053 13.85 16.9521 10 16.9521C6.15 16.9521 3 13.6053 3 9.51465C3 5.42402 6.15 2.07715 10 2.07715C13.85 2.07715 17 5.42402 17 9.51465ZM16.3 9.51465C16.3 5.7959 13.7924 2.8209 10 2.8209C6.20761 2.8209 3.7 5.64715 3.7 9.51465C3.7 13.3821 6.62795 16.2084 10 16.2084C13.5777 16.2084 16.3 13.2334 16.3 9.51465Z" fill="white" />
                                    </svg>
                                </div>
                                <p className='text-white fs-16 fw-normal ff-raleway line-160 op8'> $AMPL</p>
                                <h5 className='text-white fs-22 line-160 fw-normal ff-raleway'>Flagship Hedging Strategy</h5>
                                <p className='text-white fs-16 fw-normal ff-raleway line-160 op8'>This one-of-a-kind strategy combines the benefits of Rebase’s force multiplier effect and Real Yield’s sustainability.</p>
                                <p className='text-white fs-16 fw-normal ff-raleway line-160 op8'>Helps users to protect against downtrends and amplify yield rewards during market up trends.</p>
                                <p className='text-white fs-16 fw-normal ff-raleway line-160 op8'>Those who choose to hedge with the Vault or participate in its economic cycles are the ones greatly rewarded when markets return to optimal conditions</p>
                                <ol className='ps-3 mb-0'>
                                    <li className='text-white fs-16 fw-normal ff-raleway line-160 op8'>Initially utilizes both OG rebase tokens $AMPL and $OHM.
                                        <ul className='list-disc'>
                                            <li className='text-white fs-16 fw-normal ff-raleway line-160 op8'>Deposit $AMPL and receive $EEFI and $OHM rewards; </li>
                                            <li className='text-white fs-16 fw-normal ff-raleway line-160 op8'>Vault activities are determined by $AMPL’s rebase status; when AMPL supply is expanding, $EEFI is automatically purchased and burned daily; when AMPL supply is stable or contracting, $EEFI is minted (learn more).</li>
                                        </ul>
                                    </li>
                                    <li className='text-white fs-16 fw-normal ff-raleway line-160 op8'>Potentially any token can be rebase-enabled and added to this strategy (subject to governance)</li>
                                    <li className='text-white fs-16 fw-normal ff-raleway line-160 op8'  >Sub vaults can be created to add extra “yield” utility dimensions to $EEFI (and take advantage of sub-trends and viral movements within crypto)</li>
                                </ol>
                            </Col>
                        </Row>
                        <Row className='d-none d-lg-flex justify-content-lg-between justify-content-center align-items-center'>
                            <Col lg={4} sm={8} className='col-10 mb-4 mb-lg-0'>
                                <img src={SliderImage} alt="slider-card" className='w-100 bradi-12' />
                            </Col>
                            <Col lg={7} className='h-267 overflow-y-auto'>
                                <h3 className='text-white fs-38 ff-machine-light fw-normal line-120 text-capitalize'>Elastic Vault</h3>
                                <div className='d-flex gap-2 align-items-center'>
                                    <p className='text-white  fs-22 line-160 fw-normal ff-raleway mb-0'>Deposit Token</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                                        <path d="M10.21 6.01159C10.35 5.87771 10.518 5.7959 10.7 5.7959C10.889 5.7959 11.05 5.87771 11.197 6.01159C11.33 6.16777 11.4 6.34627 11.4 6.53965C11.4 6.74046 11.33 6.91152 11.197 7.06771C11.05 7.20902 10.889 7.2834 10.7 7.2834C10.518 7.2834 10.35 7.20902 10.21 7.06771C10.077 6.91152 10 6.74046 10 6.53965C10 6.34627 10.077 6.16777 10.21 6.01159ZM8.46 9.49234C8.46 9.49234 9.979 8.21309 10.532 8.16102C11.05 8.1164 10.945 8.74859 10.896 9.07584L10.889 9.12046C10.791 9.51465 10.672 9.99065 10.553 10.4443C10.287 11.4781 10.028 12.4896 10.091 12.6756C10.161 12.9285 10.595 12.6086 10.91 12.3855C10.952 12.3558 10.987 12.326 11.022 12.3037C11.022 12.3037 11.078 12.2442 11.134 12.326C11.148 12.3483 11.162 12.3706 11.176 12.3855C11.239 12.4896 11.274 12.5268 11.19 12.5863L11.162 12.6012C11.008 12.7128 10.35 13.2036 10.084 13.3821C9.797 13.583 8.698 14.2523 8.866 12.9508C9.013 12.036 9.209 11.2476 9.363 10.6303C9.65 9.51465 9.776 9.0089 9.132 9.44771C8.873 9.61134 8.719 9.71546 8.628 9.7824C8.551 9.8419 8.544 9.8419 8.495 9.74521L8.474 9.70059L8.439 9.64109C8.39 9.56671 8.39 9.55927 8.46 9.49234ZM17 9.51465C17 13.6053 13.85 16.9521 10 16.9521C6.15 16.9521 3 13.6053 3 9.51465C3 5.42402 6.15 2.07715 10 2.07715C13.85 2.07715 17 5.42402 17 9.51465ZM16.3 9.51465C16.3 5.7959 13.7924 2.8209 10 2.8209C6.20761 2.8209 3.7 5.64715 3.7 9.51465C3.7 13.3821 6.62795 16.2084 10 16.2084C13.5777 16.2084 16.3 13.2334 16.3 9.51465Z" fill="white" />
                                    </svg>
                                </div>
                                <p className='text-white fs-16 fw-normal ff-raleway line-160 op8'> $AMPL</p>
                                <h5 className='text-white fs-22 line-160 fw-normal ff-raleway'>Flagship Hedging Strategy</h5>
                                <p className='text-white fs-16 fw-normal ff-raleway line-160 op8'>This one-of-a-kind strategy combines the benefits of Rebase’s force multiplier effect and Real Yield’s sustainability.</p>
                                <p className='text-white fs-16 fw-normal ff-raleway line-160 op8'>Helps users to protect against downtrends and amplify yield rewards during market up trends.</p>
                                <p className='text-white fs-16 fw-normal ff-raleway line-160 op8'>Those who choose to hedge with the Vault or participate in its economic cycles are the ones greatly rewarded when markets return to optimal conditions</p>
                                <ol className='ps-3 mb-0'>
                                    <li className='text-white fs-16 fw-normal ff-raleway line-160 op8'>Initially utilizes both OG rebase tokens $AMPL and $OHM.
                                        <ul className='list-disc'>
                                            <li className='text-white fs-16 fw-normal ff-raleway line-160 op8'>Deposit $AMPL and receive $EEFI and $OHM rewards; </li>
                                            <li className='text-white fs-16 fw-normal ff-raleway line-160 op8'>Vault activities are determined by $AMPL’s rebase status; when AMPL supply is expanding, $EEFI is automatically purchased and burned daily; when AMPL supply is stable or contracting, $EEFI is minted (learn more).</li>
                                        </ul>
                                    </li>
                                    <li className='text-white fs-16 fw-normal ff-raleway line-160 op8'>Potentially any token can be rebase-enabled and added to this strategy (subject to governance)</li>
                                    <li className='text-white fs-16 fw-normal ff-raleway line-160 op8'  >Sub vaults can be created to add extra “yield” utility dimensions to $EEFI (and take advantage of sub-trends and viral movements within crypto)</li>
                                </ol>
                            </Col>
                        </Row>
                        <Row className='d-none d-lg-flex justify-content-lg-between justify-content-center align-items-center'>
                            <Col lg={4} sm={8} className='col-10 mb-4 mb-lg-0'>
                                <img src={SliderImage} alt="slider-card" className='w-100 bradi-12' />
                            </Col>
                            <Col lg={7} className='h-267 overflow-y-auto'>
                                <h3 className='text-white fs-38 ff-machine-light fw-normal line-120 text-capitalize'>Elastic Vault</h3>
                                <div className='d-flex gap-2 align-items-center'>
                                    <p className='text-white  fs-22 line-160 fw-normal ff-raleway mb-0'>Deposit Token</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                                        <path d="M10.21 6.01159C10.35 5.87771 10.518 5.7959 10.7 5.7959C10.889 5.7959 11.05 5.87771 11.197 6.01159C11.33 6.16777 11.4 6.34627 11.4 6.53965C11.4 6.74046 11.33 6.91152 11.197 7.06771C11.05 7.20902 10.889 7.2834 10.7 7.2834C10.518 7.2834 10.35 7.20902 10.21 7.06771C10.077 6.91152 10 6.74046 10 6.53965C10 6.34627 10.077 6.16777 10.21 6.01159ZM8.46 9.49234C8.46 9.49234 9.979 8.21309 10.532 8.16102C11.05 8.1164 10.945 8.74859 10.896 9.07584L10.889 9.12046C10.791 9.51465 10.672 9.99065 10.553 10.4443C10.287 11.4781 10.028 12.4896 10.091 12.6756C10.161 12.9285 10.595 12.6086 10.91 12.3855C10.952 12.3558 10.987 12.326 11.022 12.3037C11.022 12.3037 11.078 12.2442 11.134 12.326C11.148 12.3483 11.162 12.3706 11.176 12.3855C11.239 12.4896 11.274 12.5268 11.19 12.5863L11.162 12.6012C11.008 12.7128 10.35 13.2036 10.084 13.3821C9.797 13.583 8.698 14.2523 8.866 12.9508C9.013 12.036 9.209 11.2476 9.363 10.6303C9.65 9.51465 9.776 9.0089 9.132 9.44771C8.873 9.61134 8.719 9.71546 8.628 9.7824C8.551 9.8419 8.544 9.8419 8.495 9.74521L8.474 9.70059L8.439 9.64109C8.39 9.56671 8.39 9.55927 8.46 9.49234ZM17 9.51465C17 13.6053 13.85 16.9521 10 16.9521C6.15 16.9521 3 13.6053 3 9.51465C3 5.42402 6.15 2.07715 10 2.07715C13.85 2.07715 17 5.42402 17 9.51465ZM16.3 9.51465C16.3 5.7959 13.7924 2.8209 10 2.8209C6.20761 2.8209 3.7 5.64715 3.7 9.51465C3.7 13.3821 6.62795 16.2084 10 16.2084C13.5777 16.2084 16.3 13.2334 16.3 9.51465Z" fill="white" />
                                    </svg>
                                </div>
                                <p className='text-white fs-16 fw-normal ff-raleway line-160 op8'> $AMPL</p>
                                <h5 className='text-white fs-22 line-160 fw-normal ff-raleway'>Flagship Hedging Strategy</h5>
                                <p className='text-white fs-16 fw-normal ff-raleway line-160 op8'>This one-of-a-kind strategy combines the benefits of Rebase’s force multiplier effect and Real Yield’s sustainability.</p>
                                <p className='text-white fs-16 fw-normal ff-raleway line-160 op8'>Helps users to protect against downtrends and amplify yield rewards during market up trends.</p>
                                <p className='text-white fs-16 fw-normal ff-raleway line-160 op8'>Those who choose to hedge with the Vault or participate in its economic cycles are the ones greatly rewarded when markets return to optimal conditions</p>
                                <ol className='ps-3 mb-0'>
                                    <li className='text-white fs-16 fw-normal ff-raleway line-160 op8'>Initially utilizes both OG rebase tokens $AMPL and $OHM.
                                        <ul className='list-disc'>
                                            <li className='text-white fs-16 fw-normal ff-raleway line-160 op8'>Deposit $AMPL and receive $EEFI and $OHM rewards; </li>
                                            <li className='text-white fs-16 fw-normal ff-raleway line-160 op8'>Vault activities are determined by $AMPL’s rebase status; when AMPL supply is expanding, $EEFI is automatically purchased and burned daily; when AMPL supply is stable or contracting, $EEFI is minted (learn more).</li>
                                        </ul>
                                    </li>
                                    <li className='text-white fs-16 fw-normal ff-raleway line-160 op8'>Potentially any token can be rebase-enabled and added to this strategy (subject to governance)</li>
                                    <li className='text-white fs-16 fw-normal ff-raleway line-160 op8'  >Sub vaults can be created to add extra “yield” utility dimensions to $EEFI (and take advantage of sub-trends and viral movements within crypto)</li>
                                </ol>
                            </Col>
                        </Row>
                    </Slider>
                </Container>
                <img src={Cloudimg} alt="cloud-img" className='position-absolute cloud-img' />
                <img src={Sample} alt="sample-img" className='position-absolute sample-img' />
            </section>
        </>
    )
}

export default CoreStrategies