import React from 'react'

import PartnersImg1 from '../assets/partners/partner1.png'
import PartnersImg2 from '../assets/partners/partner2.png'
import PartnersImg3 from '../assets/partners/partner3.png'
import PartnersImg4 from '../assets/partners/partner4.png'
import {Container,Wrapper,PartnerContainer1,PartnerContainer2,PartnerContainer3,PartnerContainer4,PartnerContainer5,Img,Text} from '../components/styled-comp/partners'

const Partners=()=> {
    return (
        <Container>
            <Wrapper>
               <PartnerContainer1>
                <Text>Partners</Text>
               </PartnerContainer1>
               <PartnerContainer2>
            <Img src={PartnersImg1} />
               </PartnerContainer2>
               <PartnerContainer3>
               <Img src={PartnersImg2} />
               </PartnerContainer3>
               <PartnerContainer4>
               <Img src={PartnersImg3} />
               </PartnerContainer4>
               <PartnerContainer5>
               <Img src={PartnersImg4} />
               </PartnerContainer5>
              
            
            </Wrapper>
        </Container>
    )
}

export default Partners
