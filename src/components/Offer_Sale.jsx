import React from "react";
import HeroRight from "../assets/hero_left.png";
import { useSelector } from "react-redux";
import {
  Container,
  Wrapper,
  OffersContainer1,
  OffersContainer2,
  OffersContainer,
  HeroRightImg,
  TextContainer,
  Text,
  Text2,
  Button,
  OfferText1,
  OfferText2,
} from "../components/styled-comp/Offer";

const Offer = () => {
  const state = useSelector((state) => state.bhasa);
  return (
    <Container>
      <Wrapper>
        <OffersContainer1>
          <Button>SHOP NOW</Button>
        </OffersContainer1>
        <OffersContainer2>
          <OfferText1>Minimum Validity Period</OfferText1>
          <OfferText2>Return Policy is not Eligible</OfferText2>
        </OffersContainer2>

        <OffersContainer>
          <HeroRightImg src={HeroRight} />
          <TextContainer>
            {state.lang === "en" ? (
              <>
                <Text>DOWNLOAD THE APP &</Text>
                <Text2>GET RS 100 OFF</Text2>
              </>
            ) : (
              <>
                <Text>ऐप डाउनलोड करें </Text>
                <Text2>पाएं रु 100 की छूट</Text2>
              </>
            )}
            {/* <Text>DOWNLOAD THE APP &</Text>
            <Text2>GET RS 100 OFF</Text2> */}
          </TextContainer>
        </OffersContainer>
      </Wrapper>
    </Container>
  );
};

export default Offer;
