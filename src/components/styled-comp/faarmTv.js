import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 480px) {
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
  height: 60vh;
  width: 97%;
  margin: 0 auto;
  @media only screen and (max-width: 480px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 97%;
  }
`;

export const FarmsContainer1 = styled.div`
  padding: 10px 10px;
  flex-wrap: nowrap;
  display: flex;

  align-items: end;
  justify-content: center;
  background-color: white;
  width: 100%;
  height: 100%;
  flex: 3;
`;

export const Video = styled.video``;
export const FarmsContainer2 = styled.div`
  padding: 0px 20px;
  flex-wrap: nowrap;
  display: flex;
  justify-content: space-between;
  align-items: end;
  justify-content: center;
  background-color: white;
  width: 100%;
  height: 100%;
  flex: 3;
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
`;

export const Text = styled.h6`
  position: absolute;
  left: 40px;
  top: 10px;
`;
export const RightText = styled.h5`
  color: #545454;
  font-size: 16px;
  line-height: 27px;
`;
