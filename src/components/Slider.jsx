import React from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";

import "./product.css";

const SliderBottomDiv = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 200px;
  @media only screen and (max-width: 480px) {
    /* margin-bottom: -40px; */
    width: 300px;
    margin: 0 auto;
    height: 100px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
  }
  @media only screen and (max-width: 420px) {
    /* margin-bottom: -40px; */
    width: 300px;
    margin: 0 auto;
    height: 100px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }
`;
const SliderHead = styled.h3`
  margin-right: 20px;
  z-index: 99;
  opacity: 1;
  font-weight: 600;
  font-size: 2rem;
  font-family: "Roboto Condensed", sans-serif;

  font-family: "Source Sans Pro", sans-serif;

  font-family: "Source Serif Pro", serif;
  @media only screen and (max-width: 480px) {
    /* margin-right: 20px;
  margin-left: 20px; */
    display: block;
    font-size: 1.1rem;
    /* width: 500px; */
  }
  @media only screen and (max-width: 420px) {
    /* margin-bottom: -40px; */
    font-size: 1rem;
  }
`;
const SliderButton = styled.button`
  padding: 8px 20px;
  border-radius: 20px;
  font-weight: bold;
  outline: none;
  border: none;
  background-color: yellow;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  color: #3d3d3d;
  font-size: 1.2rem;
  &:hover {
    background-color: #fdd017;
  }
  @media only screen and (max-width: 480px) {
    margin-bottom: 0px;
    font-size: 0.8rem;

    /* width: 300px; */
    padding: 3px 18px;
    /* margin-right: 90px; */
    &:hover {
      background-color: #fdd017;
    }
  }
  @media only screen and (max-width: 420px) {
    /* margin-bottom: -40px; */
    margin-bottom: 0px;
    font-size: 0.6rem;

    /* width: 300px; */
    padding: 5px 20px;
    /* margin-right: 90px; */
    &:hover {
      background-color: #fdd017;
    }
  }
`;

function slider() {
  return (
    <>
      <Carousel className="sliderCon">
        <Carousel.Item>
          <img
            className="d-block w-100"
            // src={Slider1}
            src="https://images.pexels.com/photos/7125429/pexels-photo-7125429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            width="100%"
            style={{ objectFit: "cover" }}
          />
          <Carousel.Caption>
            <SliderBottomDiv>
              <SliderHead>DEALS OF THE DAY</SliderHead>
              <SliderButton>KNOW MORE</SliderButton>
            </SliderBottomDiv>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/7125420/pexels-photo-7125420.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Second slide"
            // height="100%"
            style={{ objectFit: "cover" }}
          />

          <Carousel.Caption>
            <SliderBottomDiv>
              <SliderHead>DEALS OF THE DAY</SliderHead>
              <SliderButton>Know More</SliderButton>
            </SliderBottomDiv>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/7125429/pexels-photo-7125429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Third slide"
            // height="100%"
            style={{ objectFit: "cover" }}
          />

          <Carousel.Caption>
            <SliderBottomDiv>
              <SliderHead>DEALS OF THE DAY</SliderHead>
              <SliderButton>Know More</SliderButton>
            </SliderBottomDiv>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/2516037/pexels-photo-2516037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            // height="302px"
            style={{ objectFit: "top" }}
          />

          <Carousel.Caption>
            <SliderBottomDiv>
              <SliderHead>DEALS OF THE DAY</SliderHead>
              <SliderButton>Know More</SliderButton>
            </SliderBottomDiv>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default slider;
