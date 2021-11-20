import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #2b2b2b;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100;
  width: 100%;
  margin: 0 auto;
  padding: 5px 20px;
  background-color: #2b2b2b;
`;

export const FooterContainer1 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  flex: 2.5;
  border-bottom: 1px solid grey;
  padding: 20px 0;
  @media only screen and (max-width: 480px) {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 20px 0;
  }
`;

export const Div1 = styled.div`
  display: flex;
  flex: 2;
`;
export const Span = styled.span`
  @media only screen and (max-width: 480px) {
    font-size: 12px;
    margin-top: 10px;
  }
`;

export const Div2 = styled.div`
  display: flex;
  flex: 2;
  @media only screen and (max-width: 480px) {
    margin: 10px 0;
  }
`;
export const Div4 = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 10;
  width: 100%;
`;
export const Div5 = styled.div`
  display: flex;
  @media only screen and (max-width: 480px) {
    margin-top: 10px;
  }
`;

export const Div3 = styled.div`
  flex: 8;
  justify-content: center;
  display: flex;
  color: #999999;
`;
export const FooterContainer2 = styled.div`
  width: 100%;
  height: 100%;
  flex: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  @media only screen and (max-width: 480px) {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 20px 0;
  }
`;

export const MiddleDiv1 = styled.div`
  display: flex;
  flex: 2;
  @media only screen and (max-width: 480px) {
    justify-content: center;
    align-items: center;

    display: flex;

    flex-direction: column;
    height: 100%;
    width: 100%;
  }
`;
export const Ul = styled.ul``;
export const List = styled.li`
  list-style: none;
  color: #999999;
  margin-top: 15px;
  font-size: 15px;
`;
export const MiddleDiv2 = styled.div`
  display: flex;
  flex: 2;
  @media only screen and (max-width: 480px) {
    margin-right: 25px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;
export const MiddleDiv3 = styled.div`
  display: flex;
  flex: 2;
  @media only screen and (max-width: 480px) {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    margin-left: 40px;
  }
`;
export const MiddleDiv4 = styled.div`
  display: flex;
  flex: 3;
  height: 100%;
  justify-content: center;

  flex-direction: column;
  @media only screen and (max-width: 480px) {
    justify-content: center;
    align-items: center;
    display: flex;
    flex: 2;
    flex-direction: column;
    height: 100%;
    width: 100%;
    
    /* padding: 10px 0; */
  }
  @media only screen and (max-width: 320px) {
    height: 20%;
    flex:1;
  }
`;
export const MiddleDiv5 = styled.div`
  padding-top: 30px;
  display: flex;
  flex: 3;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 100%;
  @media only screen and (max-width: 480px) {
    justify-content: center;
    align-items: center;
    display: flex;
    flex: 2;
    flex-direction: column;
    height: 20%;
    width: 100%;

    padding: 20px 0;
  }
`;

export const IconDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 30px;
`;
export const FooterContainer3 = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px 20px;
  background-color: #0f0f0f;
  font-size: 12px;
  display: flex;
  @media only screen and (max-width: 480px) {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
`;

export const Img = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
`;
export const Img2 = styled.img`
  width: 30px;
  height: 15px;
  object-fit: cover;
`;

export const Email = styled.span`
  color: white;
  margin-left: 5px;
  @media only screen and (max-width: 480px) {
    font-size: 12px;
  }
`;
export const Form = styled.div`
  display: flex;
`;
export const Subscribe = styled.span`
  color: #999999;
  margin-bottom: 92px;
  @media only screen and (max-width: 480px) {
    font-size: 12px;
    text-align: center;
    margin-bottom: 9px;
  }
`;
export const Label = styled.button`
  width: 5rem;
  margin-bottom: 10px;
  color: white;
  font-size: 0.8rem;
  height: 2.4rem;

  background-color: #37861a;
  border: none;
  cursor: pointer;
  margin-right: 30px;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  &:hover {
    color: white;
    @media only screen and (max-width: 480px) {
      font-size: 16px;
    }
  }
`;
export const Input = styled.input`
  height: 2.3rem;
  width: 200px;
  font-size: 12px;
  &:focus {
    outline: none;
  }
`;
