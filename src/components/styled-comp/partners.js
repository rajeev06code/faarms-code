import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #e6e6e9;
  @media only screen and (max-width: 480px) {
    justify-content: space-between;
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 22vh;
  width: 100%;
  margin: 0 auto;
  padding: 10px 20px;
  background-color: #e6e6e9;
  @media only screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 10px 10px;
  }
`;

export const PartnerContainer1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #37861a;
  width: 100%;
  height: 100%;
  flex: 2;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
    flex: 4;
    text-align: center;
  }
`;
export const PartnerContainer2 = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PartnerContainer3 = styled.div`
  width: 100%;
  height: 100%;
  flex: 2;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PartnerContainer4 = styled.div`
  width: 100%;
  height: 100%;
  flex: 3;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PartnerContainer5 = styled.div`
  width: 100%;
  height: 100%;
  flex: 3;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 70%;
  height: 70%;
  /* object-fit: cover; */
  @media only screen and (max-width: 480px) {
    width: 30%;
    height: 30%;
  }
`;

export const Text = styled.h3`
  color: white;
  font-size: 30px;
  letter-spacing: 1px;
  margin-left: 15px;
  margin-bottom: 10px;
`;
