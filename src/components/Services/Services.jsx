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
                    <ServicesH2>Reduce Expensives</ServicesH2>
                    <ServicesP>We help reduce your fess and increase your revenue</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}>
                    </ServicesIcon>
                    <ServicesH2>Virtual Oficces</ServicesH2>
                    <ServicesP>We help reduce your fess and increase your revenue</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}>
                    </ServicesIcon>
                    <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>We help reduce your fess and increase your revenue</ServicesP>
                </ServicesCard>

            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
