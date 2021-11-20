import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 75vh;

  margin: 0 auto;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
  }
`;
export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
 
  width: 97%;
margin: 0 auto;
  padding: 10px 20px;
  background-color: #e6e6e9;
  @media only screen and (max-width: 480px) {
    width: 97%;
    height: 100%;
    padding: 10px 0px;
  }
`;

export const Right = styled.div`
  flex-wrap: wrap;
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  width: 100%;
  height: 100%;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  @media only screen and (max-width: 480px) {
    box-shadow: none;
    padding: 35px 10px;
  }
`;
export const ProCategory = styled.h5`
  font-size: 17px;
  position: absolute;
  top: 23px;
  left: 45px;
  @media only screen and (max-width: 480px) {
    top: 23px;
  left: 25px;
  }
`;
export const LowerText = styled.h6`
  font-size: 14px;
  position: absolute;
  bottom: 15px;
  left: 45px;
  font-weight: bold;
  color: #008b8b;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
 
  left: 25px;
  }
`;

export const ProImg = styled.img`
  height: 150px;
  width: 130px;
  margin: 0 auto;
`;
export const ProName = styled.h5`
  font-size: 17px;
  font-weight: 400;
`;

export const ImageDiv = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
