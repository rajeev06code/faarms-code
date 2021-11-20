import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;

  @media only screen and (max-width: 480px) {
    height: 100%;
    width: 100%;
  }
`;
export const ProductContainer = styled.div`
  height: 100%;
  margin-right: 3px;
  padding: 20px;
  transition: ease all 0.3s;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: ease all 0.3s;
  }
  @media only screen and (max-width: 480px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 0px 100px;
  }
`;
export const ImgDiv = styled.div`
  height: 60%;
  width: 100%;
  @media only screen and (max-width: 480px) {
    height: 100%;
    width: 100px;
    padding: 5px;
  }
`;
export const DetailsDiv = styled.div`
  height: 40%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 480px) {
    height: 100%;
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const ProName = styled.h5`
  font-size: 17px;
color: black;
  @media only screen and (max-width: 480px) {
    font-size: 13px;
  }
`;
export const ProPrice = styled.h6`
  font-weight: bold;
  color: #087f5b;
  font-size: 15px;
  @media only screen and (max-width: 480px) {
    font-size: 13px;
  }
`;
export const Button = styled.button`
  width: 5rem;
  color: white;
  font-size: 0.8rem;
  height: 2rem;
  font-weight: bold;
  background-color: #087f5b;
  border: none;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  @media only screen and (max-width: 480px) {
    height: 1.5rem;
    width: 3rem;
  }
`;
export const ProImg = styled.img`
  height: 150px;
  width: 130px;
  margin: 0 auto;
  @media only screen and (max-width: 480px) {
    height: 60px;
    width: 60px;
  }
`;

export const LinkTag=styled.a`
text-decoration: none;
`
