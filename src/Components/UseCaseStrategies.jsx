import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardOne from '../assets/images/png/Card-one.png'
import CardTwo from '../assets/images/png/Card-Two.png'
import CardThree from '../assets/images/png/Card-Three.png'
import CardFour from '../assets/images/png/Card-four.png'
import CardFive from '../assets/images/png/card-five.png'
import CardSix from '../assets/images/png/card-six.png'
import CardSeven from '../assets/images/png/card-seven.png'
import CardEight from '../assets/images/png/card-eight.png'
import CardNine from '../assets/images/png/card-nine.png'
import EEFICardLogo from '../assets/images/png/EEFI-card- LOGO.png'
import OverlayCardOne from '../assets/images/png/overlay-card-one.png'
import OverlayCardTwo from '../assets/images/png/overlay-card-two.png'
import OverlayCardThree from '../assets/images/png/overlay-card-three.png'
import OverlayCardFour from '../assets/images/png/overlay-card-four.png'
import OverTwo from '../assets/images/png/second-card-layer.png'
import OverThree from '../assets/images/png/third-card-layer.png'
import OverFour from '../assets/images/png/fouth-card-layer.png'
import OverFive from '../assets/images/png/fifth-card-layer.png'
import OverSix from '../assets/images/png/sixth-card-layer.png'
import OverSeven from '../assets/images/png/seventh-card-layer.png'
import OverEight from '../assets/images/png/eight-card-layer.png'
import OverNine from '../assets/images/png/ninth-card-layer.png'

const UseCaseStrategies = () => {
    return (
        <>
            <section className='py-128'>
                <Container className='custom_container'>
                    <Row className='justify-content-center'>
                        <h2 className=' ff-machine-light fw-bold fs-46 line-120 text-capitalize light-blue text-center mb-20'>Future Use Cases (Strategies)</h2>
                        <p className='fs-16 ff-raleway fw-normal line-160 op8 text-black text-center max-882 mb-82'>Elastic Protocol will continue to pioneer an expanding ecosystem of yield strategies that will cater to DeFi users across a range of blockchains, communities, and interests. Each will help in generating sustainable yield and expanding the utility of the native utility token $EEFI. Here is some of what we are planning and looking into:</p>

                        <Col xl={4} md={6} className='mb-40'>
                            <div className="future-card position-relative">
                                <img src={CardOne} alt="card-one" className='w-100 card-future' />
                                <img src={EEFICardLogo} alt="logo-img" className='position-absolute eefi-card-logo' />
                                <div className="imgbox position-absolute">
                                    <img src={CardOne} alt="small-card-one" className='w-100 h-100 small-card-img' />
                                </div>
                                <div className='top-nft-box d-flex align-items-center justify-content-center' >
                                    <p className='fs-14 fw-medium ff-raleway line-160 text-white mb-0'>NFT</p>
                                </div>
                                <div className='d-flex align-items-start justify-content-start position-absolute bottom-addon'>
                                    <p className='text-white fs-20 ff-machine-light fw-bold line-120 text-capitalize mb-2 pb-1'>NFT</p>
                                    <p className='text-white fs-16 fw-medium ff-raleway line-160 font-variant-lining pb-3 mb-0'>24 NFTs</p>
                                    <div className="bottom-img-box">
                                        <div className='bottom-img d-flex align-items-center justify-content-between gap-2 w-100'>
                                            <img src={CardOne} alt="img" className='h-100 br-50' />
                                            <p className='text-white fs-16 ff-raleway fw-medium line-160 mb-0'>@NFTs</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="overlay-card position-absolute d-flex flex-column justify-content-between z-1 top-0 left-0 w-100 h-100 opacity-0">
                                    <div className='over-img-box overflow-hidden'>
                                        <img src={CardOne} alt="card-img" className='w-100 overlay-small-img' />
                                    </div>
                                    <h2 className='fs-24 ff-machine-light fw-bold line-120 text-white text-capitalize pt-1 mt-3'>REAL YIELD</h2>
                                    <p className='text-white ff-raleway fs-16 fw-normal line-160 op8'>These are strategies that will explore other Real Yield ecosystems outside of Olympus DAO. For example GMX - the leading leverage platform that distributes 100% of fees. We are also looking at Vela Exchange, Jones DAO and many others on Arbitrum. </p>
                                    <h3 className='text-white fs-20 ff-raleway fw-semibold line-160'>Platforms: </h3>
                                    <div className="row d-flex justify-content-between mt-2 pt-1 w-100">
                                        <div className='col-3 '>
                                            <img src={OverlayCardOne} alt="card-one-img" className='overlay-card-partner' />
                                        </div>
                                        <div className='col-3'>
                                            <img src={OverlayCardTwo} alt="card-two-img" className='overlay-card-partner' />
                                        </div>
                                        <div className='col-3'>
                                            <img src={OverlayCardThree} alt="card-three-img" className='overlay-card-partner' />
                                        </div>
                                        <div className='col-3'>
                                            <img src={OverlayCardFour} alt="card-four-img" className='overlay-card-partner' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} md={6} className='mb-40'>
                            <div className="future-card position-relative h-100">
                                <img src={CardTwo} alt="card-one" className='w-100 h-100 card-future' />
                                <div className="imgbox position-absolute">
                                    <img src={CardTwo} alt="small-card-one" className='w-100 h-100 small-card-img' />
                                </div>
                                <div className='top-nft-box d-flex align-items-center justify-content-center' >
                                    <p className='fs-14 fw-medium ff-raleway line-160 text-white mb-0'>NFT</p>
                                </div>
                                <div className='d-flex align-items-start justify-content-start position-absolute bottom-addon'>
                                    <p className='text-white fs-20 ff-machine-light fw-bold line-120 text-capitalize mb-2 pb-1'>NFT</p>
                                    <p className='text-white fs-16 fw-medium ff-raleway line-160 font-variant-lining pb-3 mb-0'>24 NFTs</p>
                                    <div className="bottom-img-box">
                                        <div className='bottom-img d-flex align-items-center justify-content-between gap-2 w-100'>
                                            <img src={CardTwo} alt="img" className='h-100 br-50' />
                                            <p className='text-white fs-16 ff-raleway fw-medium line-160 mb-0'>@NFTs</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="overlay-card position-absolute d-flex flex-column justify-content-between z-1 top-0 left-0 w-100 h-100 opacity-0">
                                    <div className='over-img-box overflow-hidden'>
                                        <img src={OverTwo} alt="card-img" className='w-100 overlay-small-img' />
                                    </div>
                                    <h2 className='fs-24 ff-machine-light fw-bold line-120 text-white text-capitalize pt-1 mt-3'>REAL YIELD</h2>
                                    <p className='text-white ff-raleway fs-16 fw-normal line-160 op8'>These are strategies that will explore other Real Yield ecosystems outside of Olympus DAO. For example GMX - the leading leverage platform that distributes 100% of fees. We are also looking at Vela Exchange, Jones DAO and many others on Arbitrum. </p>
                                    <h3 className='text-white fs-20 ff-raleway fw-semibold line-160'>Platforms: </h3>
                                    <div className="row d-flex justify-content-between mt-2 pt-1 w-100">
                                        <div className='col-3 '>
                                            <img src={OverlayCardOne} alt="card-one-img" className='overlay-card-partner' />
                                        </div>
                                        <div className='col-3'>
                                            <img src={OverlayCardTwo} alt="card-two-img" className='overlay-card-partner' />
                                        </div>
                                        <div className='col-3'>
                                            <img src={OverlayCardThree} alt="card-three-img" className='overlay-card-partner' />
                                        </div>
                                        <div className='col-3'>
                                            <img src={OverlayCardFour} alt="card-four-img" className='overlay-card-partner' />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Col>
                        <Col xl={4} md={6} className='mb-40'>
                            <div className="future-card position-relative h-100">
                                <img src={CardThree} alt="card-one" className='w-100 h-100 card-future' />
                                <div className="imgbox position-absolute">
                                    <img src={CardThree} alt="small-card-one" className='w-100 h-100 small-card-img' />
                                </div>
                                <div className='top-nft-box d-flex align-items-center justify-content-center' >
                                    <p className='fs-14 fw-medium ff-raleway line-160 text-white mb-0'>OPTIONS</p>
                                </div>
                                <div className='d-flex align-items-start justify-content-start position-absolute bottom-addon'>
                                    <p className='text-white fs-20 ff-machine-light fw-bold line-120 text-capitalize mb-2 pb-1'>OPTIONS</p>
                                    <p className='text-white fs-16 fw-medium ff-raleway line-160 font-variant-lining pb-3 mb-0'>24 NFTs</p>
                                    <div className="bottom-img-box">
                                        <div className='bottom-img d-flex align-items-center justify-content-between gap-2 w-100'>
                                            <img src={CardThree} alt="img" className=' h-100 br-50' />
                                            <p className='text-white fs-16 ff-raleway fw-medium line-160 mb-0'>@OPTIONS</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="overlay-card position-absolute d-flex flex-column justify-content-between z-1 top-0 left-0 w-100 h-100 opacity-0">
                                    <div className='over-img-box overflow-hidden'>
                                        <img src={OverThree} alt="card-img" className='w-100 overlay-small-img' />
                                    </div>
                                    <h2 className='fs-24 ff-machine-light fw-bold line-120 text-white text-capitalize pt-1 mt-3'>REAL YIELD</h2>
                                    <p className='text-white ff-raleway fs-16 fw-normal line-160 op8'>These are strategies that will explore other Real Yield ecosystems outside of Olympus DAO. For example GMX - the leading leverage platform that distributes 100% of fees. We are also looking at Vela Exchange, Jones DAO and many others on Arbitrum. </p>
                                    <h3 className='text-white fs-20 ff-raleway fw-semibold line-160'>Platforms: </h3>
                                    <div className="row d-flex justify-content-between mt-2 pt-1 w-100">
                                        <div className='col-3 '>
                                            <img src={OverlayCardOne} alt="card-one-img" className='overlay-card-partner' />
                                        </div>
                                        <div className='col-3'>
                                            <img src={OverlayCardTwo} alt="card-two-img" className='overlay-card-partner' />
                                        </div>
                                        <div className='col-3'>
                                            <img src={OverlayCardThree} alt="card-three-img" className='overlay-card-partner' />
                                        </div>
                                        <div className='col-3'>
                                            <img src={OverlayCardFour} alt="card-four-img" className='overlay-card-partner' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} md={6} className='mb-40'>
                            <div className="future-card position-relative h-100">
                                <img src={CardFour} alt="card-one" className='w-100 h-100 card-future' />
                                <div className="imgbox position-absolute">
                                    <img src={CardFour} alt="small-card-one" className='w-100 h-100 small-card-img' />
                                </div>
                                <div className='top-nft-box d-flex align-items-center justify-content-center' >
                                    <p className='fs-14 fw-medium ff-raleway line-160 text-white mb-0'>BONDs</p>
                                </div>
                                <div className='d-flex align-items-start justify-content-start position-absolute bottom-addon'>
                                    <p className='text-white fs-20 ff-machine-light fw-bold line-120 text-capitalize mb-2 pb-1'>BONDs</p>
                                    <p className='text-white fs-16 fw-medium ff-raleway line-160 font-variant-lining pb-3 mb-0'>24 NFTs</p>
                                    <div className="bottom-img-box">
                                        <div className='bottom-img d-flex align-items-center justify-content-between gap-2 w-100'>
                                            <img src={CardFour} alt="img" className=' h-100 br-50' />
                                            <p className='text-white fs-16 ff-raleway fw-medium line-160 mb-0'>@BONDs</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="overlay-card position-absolute d-flex flex-column justify-content-between z-1 top-0 left-0 w-100 h-100 opacity-0">
                                    <div className='over-img-box overflow-hidden'>
                                        <img src={OverFour} alt="card-img" className='w-100 overlay-small-img' />
                                    </div>
                                    <h2 className='fs-24 ff-machine-light fw-bold line-120 text-white text-capitalize pt-1 mt-3'>REAL YIELD</h2>
                                    <p className='text-white ff-raleway fs-16 fw-normal line-160 op8'>These are strategies that will explore other Real Yield ecosystems outside of Olympus DAO. For example GMX - the leading leverage platform that distributes 100% of fees. We are also looking at Vela Exchange, Jones DAO and many others on Arbitrum. </p>
                                    <h3 className='text-white fs-20 ff-raleway fw-semibold line-160'>Platforms: </h3>
                                    <div className="row d-flex justify-content-between mt-2 pt-1 w-100">
                                        <div className='col-3 '>
                                            <img src={OverlayCardOne} alt="card-one-img" className='overlay-card-partner' />
                                        </div>
                                        <div className='col-3'>
                                            <img src={OverlayCardTwo} alt="card-two-img" className='overlay-card-partner' />
                                        </div>
                                        <div className='col-3'>
                                            <img src={OverlayCardThree} alt="card-three-img" className='overlay-card-partner' />
                                        </div>
                                        <div className='col-3'>
                                            <img src={OverlayCardFour} alt="card-four-img" className='overlay-card-partner' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} md={6} className='mb-40'>
                            <div className="future-card position-relative h-100">
                                <img src={CardFive} alt="card-one" className='w-100 h-100 card-future' />
                                <div className="imgbox position-absolute">
                                    <img src={CardFive} alt="small-card-one" className='w-100 h-100 small-card-img' />
                                </div>
                                <div className='top-nft-box d-flex align-items-center justify-content-center' >
                                    <p className='fs-14 fw-medium ff-raleway line-160 text-white mb-0'>Social Trading</p>
                                </div>
                                <div className='d-flex align-items-start justify-content-start position-absolute bottom-addon'>
                                    <p className='text-white fs-20 ff-machine-light fw-bold line-120 text-capitalize mb-2 pb-1'>Social Trading</p>
                                    <p className='text-white fs-16 fw-medium ff-raleway line-160 font-variant-lining pb-3 mb-0'>24 NFTs</p>
                                    <div className="bottom-img-box">
                                        <div className='bottom-img d-flex align-items-center justify-content-between gap-2 w-100'>
                                            <img src={CardFive} alt="img" className='h-100 br-50' />
                                            <p className='text-white fs-16 ff-raleway fw-medium line-160 mb-0'>@Social Trading</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="overlay-card position-absolute d-flex flex-column justify-content-between z-1 top-0 left-0 w-100 h-100 opacity-0">
                                    <div className='over-img-box overflow-hidden'>
                                        <img src={OverFive} alt="card-img" className='w-100 overlay-small-img' />
                                    </div>
                                    <h2 className='fs-24 ff-machine-light fw-bold line-120 text-white text-capitalize pt-1 mt-3'>REAL YIELD</h2>
                                    <p className='text-white ff-raleway fs-16 fw-normal line-160 op8'>These are strategies that will explore other Real Yield ecosystems outside of Olympus DAO. For example GMX - the leading leverage platform that distributes 100% of fees. We are also looking at Vela Exchange, Jones DAO and many others on Arbitrum. </p>
                                    <h3 className='text-white fs-20 ff-raleway fw-semibold line-160'>Platforms: </h3>
                                    <div className="row d-flex justify-content-between mt-2 pt-1 w-100">
                                        <div className='col-3 '>
                                            <img src={OverlayCardOne} alt="card-one-img" className='overlay-card-partner' />
                                        </div>
                                        <div className='col-3'>
                                            <img src={OverlayCardTwo} alt="card-two-img" className='overlay-card-partner' />
                                        </div>
                                        <div className='col-3'>
                                            <img src={OverlayCardThree} alt="card-three-img" className='overlay-card-partner' />
                                        </div>
                                        <div className='col-3'>
                                            <img src={OverlayCardFour} alt="card-four-img" className='overlay-card-partner' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} md={6} className='mb-40'>
                            <div className="future-card position-relative h-100">
                                <img src={CardSix} alt="card-one" className='w-100 h-100 card-future' />
                                <div className="imgbox position-absolute">
                                    <img src={CardSix} alt="small-card-one" className='w-100 h-100 small-card-img' />
                                </div>
                                <div className='top-nft-box d-flex align-items-center justify-content-center' >
                                    <p className='fs-14 fw-medium ff-raleway line-160 text-white mb-0'>PERPS and Delta Neutral</p>
                                </div>
                                <div className='d-flex align-items-start justify-content-start position-absolute bottom-addon'>
                                    <p className='text-white fs-20 ff-machine-light fw-bold line-120 text-capitalize mb-2 pb-1'>PERPS and Delta Neutral</p>
                                    <p className='text-white fs-16 fw-medium ff-raleway line-160 font-variant-lining pb-3 mb-0'>24 NFTs</p>
                                    <div className="bottom-img-box">
                                        <div className='bottom-img d-flex align-items-center justify-content-between gap-2 w-100'>
                                            <img src={CardSix} alt="img" className=' h-100 br-50' />
                                            <p className='text-white fs-16 ff-raleway fw-medium line-160 mb-0'>@PERPS and Delta Neutral</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="overlay-card position-absolute d-flex flex-column justify-content-between z-1 top-0 left-0 w-100 h-100 opacity-0">
                                    <div className='over-img-box overflow-hidden'>
                                        <img src={OverSix} alt="card-img" className='w-100 overlay-small-img' />
                                    </div>
                                    <h2 className='fs-24 ff-machine-light fw-bold line-120 text-white text-capitalize pt-1 mt-3'>REAL YIELD</h2>
                                    <p className='text-white ff-raleway fs-16 fw-normal line-160 op8'>These are strategies that will explore other Real Yield ecosystems outside of Olympus DAO. For example GMX - the leading leverage platform that distributes 100% of fees. We are also looking at Vela Exchange, Jones DAO and many others on Arbitrum. </p>
                                    <h3 className='text-white fs-20 ff-raleway fw-semibold line-160'>Platforms: </h3>
                                    <div className="row d-flex justify-content-between mt-2 pt-1 w-100">
                                        <div className='col-3 '>
                                            <img src={OverlayCardOne} alt="card-one-img" className='overlay-card-partner' />
                                        </div>
                                        <div className='col-3'>
                                            <img src={OverlayCardTwo} alt="card-two-img" className='overlay-card-partner' />
                                        </div>
                                        <div className='col-3'>
                                            <img src={OverlayCardThree} alt="card-three-img" className='overlay-card-partner' />
                                        </div>
                                        <div className='col-3'>
                                            <img src={OverlayCardFour} alt="card-four-img" className='overlay-card-partner' />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Col>
                        <Col xl={4} md={6} className='mb-40 mb-xl-0'>
                            <div className="future-card position-relative h-100">
                                <img src={CardSeven} alt="card-one" className='w-100 h-100 card-future' />
                                <div className="imgbox position-absolute">
                                    <img src={CardSeven} alt="small-card-one" className='w-100 h-100 small-card-img' />
                                </div>
                                <div className='top-nft-box d-flex align-items-center justify-content-center' >
                                    <p className='fs-14 fw-medium ff-raleway line-160 text-white mb-0'>STABLECOINs</p>
                                </div>
                                <div className='d-flex align-items-start justify-content-start position-absolute bottom-addon'>
                                    <p className='text-white fs-20 ff-machine-light fw-bold line-120 text-capitalize mb-2 pb-1'>STABLECOINs</p>
                                    <p className='text-white fs-16 fw-medium ff-raleway line-160 font-variant-lining pb-3 mb-0'>24 NFTs</p>
                                    <div className="bottom-img-box">
                                        <div className='bottom-img d-flex align-items-center justify-content-between gap-2 w-100'>
                                            <img src={CardSeven} alt="img" className='w-100 h-100 br-50' />
                                            <p className='text-white fs-16 ff-raleway fw-medium line-160 mb-0'>@STABLECOINs</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="overlay-card position-absolute d-flex flex-column justify-content-between z-1 top-0 left-0 w-100 h-100 opacity-0">
                                    <div className='over-img-box overflow-hidden'>
                                        <img src={OverSeven} alt="card-img" className='w-100 overlay-small-img' />
                                    </div>
                                    <h2 className='fs-24 ff-machine-light fw-bold line-120 text-white text-capitalize pt-1 mt-3'>REAL YIELD</h2>
                                    <p className='text-white ff-raleway fs-16 fw-normal line-160 op8'>These are strategies that will explore other Real Yield ecosystems outside of Olympus DAO. For example GMX - the leading leverage platform that distributes 100% of fees. We are also looking at Vela Exchange, Jones DAO and many others on Arbitrum. </p>
                                    <h3 className='text-white fs-20 ff-raleway fw-semibold line-160'>Platforms: </h3>
                                    <div className="row d-flex justify-content-between mt-2 pt-1 w-100">
                                        <div className='col-3 '>
                                            <img src={OverlayCardOne} alt="card-one-img" className='overlay-card-partner' />
                                        </div>
                                        <div className='col-3'>
                                            <img src={OverlayCardTwo} alt="card-two-img" className='overlay-card-partner' />
                                        </div>
                                        <div className='col-3'>
                                            <img src={OverlayCardThree} alt="card-three-img" className='overlay-card-partner' />
                                        </div>
                                        <div className='col-3'>
                                            <img src={OverlayCardFour} alt="card-four-img" className='overlay-card-partner' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} md={6} className='mb-40 mb-xl-0'>
                            <div className="future-card position-relative h-100">
                                <img src={CardEight} alt="card-one" className='w-100 h-100 card-future' />
                                <div className="imgbox position-absolute">
                                    <img src={CardEight} alt="small-card-one" className='w-100 h-100 small-card-img' />
                                </div>
                                <div className='top-nft-box d-flex align-items-center justify-content-center' >
                                    <p className='fs-14 fw-medium ff-raleway line-160 text-white mb-0'>Borrowing and Lending</p>
                                </div>
                                <div className='d-flex align-items-start justify-content-start position-absolute bottom-addon'>
                                    <p className='text-white fs-20 ff-machine-light fw-bold line-120 text-capitalize mb-2 pb-1'>Borrowing and Lending</p>
                                    <p className='text-white fs-16 fw-medium ff-raleway line-160 font-variant-lining pb-3 mb-0'>24 NFTs</p>
                                    <div className="bottom-img-box">
                                        <div className='bottom-img d-flex align-items-center justify-content-between gap-2 w-100'>
                                            <img src={CardEight} alt="img" className='h-100 br-50' />
                                            <p className='text-white fs-16 ff-raleway fw-medium line-160 mb-0'>@Borrowing and Lending</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="overlay-card position-absolute d-flex flex-column justify-content-between z-1 top-0 left-0 w-100 h-100 opacity-0">
                                    <div className='over-img-box overflow-hidden'>
                                        <img src={OverEight} alt="card-img" className='w-100 overlay-small-img' />
                                    </div>
                                    <h2 className='fs-24 ff-machine-light fw-bold line-120 text-white text-capitalize pt-1 mt-3'>REAL YIELD</h2>
                                    <p className='text-white ff-raleway fs-16 fw-normal line-160 op8'>These are strategies that will explore other Real Yield ecosystems outside of Olympus DAO. For example GMX - the leading leverage platform that distributes 100% of fees. We are also looking at Vela Exchange, Jones DAO and many others on Arbitrum. </p>
                                    <h3 className='text-white fs-20 ff-raleway fw-semibold line-160'>Platforms: </h3>
                                    <div className="row d-flex justify-content-between mt-2 pt-1 w-100">
                                        <div className='col-3 '>
                                            <img src={OverlayCardOne} alt="card-one-img" className='overlay-card-partner' />
                                        </div>
                                        <div className='col-3'>
                                            <img src={OverlayCardTwo} alt="card-two-img" className='overlay-card-partner' />
                                        </div>
                                        <div className='col-3'>
                                            <img src={OverlayCardThree} alt="card-three-img" className='overlay-card-partner' />
                                        </div>
                                        <div className='col-3'>
                                            <img src={OverlayCardFour} alt="card-four-img" className='overlay-card-partner' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} md={6} className='mb-40 mb-xl-0'>
                            <div className="future-card position-relative h-100">
                                <img src={CardNine} alt="card-one" className='w-100 h-100 card-future' />
                                <div className="imgbox position-absolute">
                                    <img src={CardNine} alt="small-card-one" className='w-100 h-100 small-card-img' />
                                </div>
                                <div className='top-nft-box d-flex align-items-center justify-content-center' >
                                    <p className='fs-14 fw-medium ff-raleway line-160 text-white mb-0'>Ai Smart Vaults</p>
                                </div>
                                <div className='d-flex align-items-start justify-content-start position-absolute bottom-addon'>
                                    <p className='text-white fs-20 ff-machine-light fw-bold line-120 text-capitalize mb-2 pb-1'>Ai Smart Vaults</p>
                                    <p className='text-white fs-16 fw-medium ff-raleway line-160 font-variant-lining pb-3 mb-0'>24 NFTs</p>
                                    <div className="bottom-img-box">
                                        <div className='bottom-img d-flex align-items-center justify-content-between gap-2 w-100'>
                                            <img src={CardNine} alt="img" className='h-100 br-50' />
                                            <p className='text-white fs-16 ff-raleway fw-medium line-160 mb-0'>@Ai Smart Vaults</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="overlay-card position-absolute d-flex flex-column justify-content-between z-1 top-0 left-0 w-100 h-100 opacity-0">
                                    <div className='over-img-box overflow-hidden'>
                                        <img src={OverNine} alt="card-img" className='w-100 overlay-small-img' />
                                    </div>
                                    <h2 className='fs-24 ff-machine-light fw-bold line-120 text-white text-capitalize pt-1 mt-3'>REAL YIELD</h2>
                                    <p className='text-white ff-raleway fs-16 fw-normal line-160 op8'>These are strategies that will explore other Real Yield ecosystems outside of Olympus DAO. For example GMX - the leading leverage platform that distributes 100% of fees. We are also looking at Vela Exchange, Jones DAO and many others on Arbitrum. </p>
                                    <h3 className='text-white fs-20 ff-raleway fw-semibold line-160'>Platforms: </h3>
                                    <div className="row d-flex justify-content-between mt-2 pt-1 w-100">
                                        <div className='col-3 '>
                                            <img src={OverlayCardOne} alt="card-one-img" className='overlay-card-partner' />
                                        </div>
                                        <div className='col-3'>
                                            <img src={OverlayCardTwo} alt="card-two-img" className='overlay-card-partner' />
                                        </div>
                                        <div className='col-3'>
                                            <img src={OverlayCardThree} alt="card-three-img" className='overlay-card-partner' />
                                        </div>
                                        <div className='col-3'>
                                            <img src={OverlayCardFour} alt="card-four-img" className='overlay-card-partner' />
                                        </div>
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

export default UseCaseStrategies