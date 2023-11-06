import React from 'react'
import Header from './Header'
import StrechGains from './StrechGains'
import CoreStrategies from './CoreStrategies'
import TokenSection from './TokenSection'
import Supply from './Supply'
import UseCaseStrategies from './UseCaseStrategies'
import Team from './Team'
import EcosystemPartners from './EcosystemPartners'
import EERoadmap from './EERoadmap'
import ContactUs from './ContactUs'
import Footer from './Footer'

const Home = () => {
    return (
        <>
            <div className='overflow-hidden'>
                <Header />
                <StrechGains />
                <CoreStrategies />
                <TokenSection />
                <Supply />
                <UseCaseStrategies />
                <Team />
                <EcosystemPartners />
                <EERoadmap />
                <ContactUs />
                <Footer />
            </div>
        </>
    )
}

export default Home