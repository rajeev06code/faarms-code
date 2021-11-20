import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  height: calc(80vh - 110px);
  background-color: white;
  margin-top: 6.7rem;
  background-color: #e6e6e9;
  @media only screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 60px;
    height: 250px;
    /* height: 100%; */
    overflow-x: hidden;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 10px 20px;
  background-color: #e6e6e9;
  @media only screen and (max-width: 480px) {
    display: flex;
    padding: 5px 0px;
    width: 97%;

  }
`;
export const SliderDiv = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const Left = styled.div`
  background-color: black;
  flex: 8;

  object-fit: cover;
  background-color: white;
  width: 100%;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  /* margin-right: 15px; */
`;
export const Right = styled.div`
  padding: 20px;
  flex-wrap: nowrap;
  flex: 3.5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 100%;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

export const HeroRightImg = styled.img`
  height: 80%;
  width: 35%;
`;
export const TextContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Text = styled.h3`
  font-size: 18px;
  margin-left: 15px;
  font-weight: 400;
  color: #3d3d3d;
  margin-bottom: 10px;
`;
export const Text2 = styled.h3`
  font-size: 18px;
  margin-left: 15px;
  font-weight: 400;
  color: #3d3d3d;
  background-color: yellow;
  padding: 15px;
  border-bottom-right-radius: 30px;
  border-top-right-radius: 30px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;
