import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 40vh;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
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
  @media only screen and (max-width: 480px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 97%;
    padding: 10px 0px;
  }
`;

export const OffersContainer1 = styled.div`
  background: url("https://media.istockphoto.com/vectors/diwali-festival-sale-design-template-with-50-discount-tag-and-lamps-vector-id1265181318");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  padding: 2px 4px;
  flex-wrap: nowrap;
  display: flex;

  align-items: end;
  justify-content: center;
  background-color: white;
  width: 100%;
  height: 100%;
  flex: 4;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  @media only screen and (max-width: 480px) {
    height: 100%;
    background-position: center;
  }
`;
export const OffersContainer2 = styled.div`
  background: url("https://st3.depositphotos.com/25407336/35762/v/450/depositphotos_357629726-stock-illustration-clearance-sale-banner-design-template.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 2px 4px;
  flex-wrap: nowrap;
  display: flex;
  justify-content: space-between;
  align-items: end;
  justify-content: center;
  background-color: white;
  width: 100%;
  height: 100%;
  flex: 4;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  margin-left: 20px;
  @media only screen and (max-width: 480px) {
    height: 100%;
    width: 100%;
    margin-left: 0px;
    margin: 10px 0;
    background-position: center;
  }
`;
export const OffersContainer = styled.div`
  padding: 2px 4px;
  flex-wrap: nowrap;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 100%;
  height: 100%;
  flex: 4;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;

  margin-left: 15px;
  @media only screen and (max-width: 480px) {
    height: 100%;
    width: 100%;
    margin-left: 0px;
  }
`;

export const HeroRightImg = styled.img`
  height: 90%;
  width: 30%;
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
export const Button = styled.button`
  width: 7rem;
  margin-bottom: 10px;
  color: #959595;
  font-size: 1rem;
  height: 2.5rem;
  font-weight: bold;
  background-color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  @media only screen and (max-width: 480px) {
    height: 2rem;
    width: 5rem;
    margin-top: 3px;
    font-size: 0.8rem;
  }
  &:hover {
    background-color: #087f5b;
    color: white;
  }
`;
export const OfferText1 = styled.a`
  margin-right: 70px;
  font-size: 14px;
  margin-bottom: 8px;
  cursor: pointer;
`;
export const OfferText2 = styled.a`
  font-size: 14px;
  margin-bottom: 8px;
  cursor: pointer;
`;
