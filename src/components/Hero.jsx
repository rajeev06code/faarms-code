import React from "react";
import { useSelector } from "react-redux";
import HeroRight from "../assets/hero_left.png";
import Slider from "./Slider";
import {
  Container,
  Wrapper,
  SliderDiv,
  Left,
  Right,
  HeroRightImg,
  TextContainer,
  Text,
  Text2,
} from "../components/styled-comp/hero.js";

const Hero = () => {
  const state = useSelector((state) => state.bhasa);

  return (
    <Container>
      <Wrapper>
        <Left>
          <SliderDiv>
            <Slider />
          </SliderDiv>
        </Left>
        <Right>
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
          </TextContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Hero;
