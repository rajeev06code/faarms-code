import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 480px) {
    height: 100%;
    width: 100%;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80vh;
  width: 100%;
  margin: 0 auto;
  padding: 10px 20px;
  @media only screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    height: 150vh;
    width: 100%;
    margin-top: 10px;
    padding: 1px 10px;
  }
`;

export const OffersContainer1 = styled.div`
  padding: 15px 20px;
  flex-wrap: nowrap;
  display: flex;
  flex-direction: column;

  align-items: end;
  justify-content: center;
  background-color: white;
  width: 100%;
  height: 100%;
  flex: 6;
`;
export const FaarmojiHead = styled.div`
  flex: 2;
  width: 100%;
`;
export const FaarmojiSticker = styled.div`
  flex: 8;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 25px 0px;
  @media only screen and (max-width: 480px) {
    display: flex;
    flex-wrap: wrap;
    padding: 25px 0px;
  }
`;
export const Emoji = styled.img`
  width: 130px;
  height: 130px;
  @media only screen and (max-width: 480px) {
    width: 110px;
    height: 110px;
    display: block;
  }
`;
export const FaarmojiContact = styled.div`
  flex: 4;
  width: 100%;
  height: 100%;
`;
export const FaarmojiContact2 = styled.div`
  display: flex;
  height: 50%;
  width: 100%;
  align-items: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
export const Form = styled.div``;
export const OffersContainer = styled.div`
  background: url("https://d10zminp1cyta8.cloudfront.net/packs/images/mobile_app/mobile-mockup-header-3830ee21a4c09f1dd3ea1330d96bd8cd.png");
  background-repeat: no-repeat;
  background-size: 600px;
  background-position: center;
  object-fit: cover;
  background-color: white;
  padding: 2px 4px;
  flex: 4;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;

    background-size: 400px;
    background-position: center;
    object-fit: cover;
    background-color: #087f5b;
  }
  @media only screen and (max-width: 380px) {
    width: 100%;
  }
`;

export const TextHead = styled.h5`
  font-size: 17px;
`;

export const Text = styled.h6`
  font-size: 14px;
`;

export const Label = styled.button`
  width: 5rem;
  margin-bottom: 10px;
  color: white;
  font-size: 0.8rem;
  height: 2.4rem;

  background-color: #087f5b;
  border: none;
  cursor: pointer;
  margin-right: 30px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  @media only screen and (max-width: 380px) {
    width: 3rem;
    height: 2rem;
    font-size: 0.6rem;
  }
  &:hover {
    background-color: #087f5b;
    color: white;
  }
`;
export const Input = styled.input`
  height: 2.3rem;
  width: 200px;
  @media only screen and (max-width: 380px) {
    width: 200px;
    height: 2rem;
    font-size: 0.6rem;
  }
  &:focus {
    outline: none;
  }
`;

export const ImgCon = styled.img`
  margin-right: 30px;
  object-fit: cover;
  @media only screen and (max-width: 480px) {
  }
`;
