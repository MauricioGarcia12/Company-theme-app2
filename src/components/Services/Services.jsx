import React from 'react'
import {
    ServicesCard,ServicesContainer,ServicesH1,ServicesH2,ServicesIcon,
    ServicesP,ServicesWrapper
} from './ServiceElements'
import Icon1 from '../../images/4.svg'
import Icon2 from '../../images/5.svg'
import Icon3 from '../../images/6.svg'

const Services = () => {
    return (
        <ServicesContainer id ="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}>
                    </ServicesIcon>
                    <ServicesH2>Web Development</ServicesH2>
                    <ServicesP>We create your next big professional project for your company</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}>
                    </ServicesIcon>
                    <ServicesH2>Cost Reduction</ServicesH2>
                    <ServicesP>We help reduce your fess and increase your revenue</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}>
                    </ServicesIcon>
                    <ServicesH2>Professional Care</ServicesH2>
                    <ServicesP>We take care of your systems with powerful and secure clusters</ServicesP>
                </ServicesCard>

            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
