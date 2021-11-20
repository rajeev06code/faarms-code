import React from 'react'
import styled from "styled-components";
import errorImg from '../../assets/error404.jpg'
import { Link } from "react-router-dom";
const Page404Container = styled.div`
  height: 100vh;
  color: black;
  background-color: white;
  display: flex;
  align-items: center;


  justify-content: center;
  @media only screen and (max-width: 480px) {
    margin-top: 70px;
  }
`;
const Page404Wrapper = styled.div`
  display: flex;
  /* position: fixed; */
  /* top: 118px; */


  
  height: 60%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* margin: 0 auto; */
  /* margin-top: 100px; */
  background-color: white;
  padding: 10px 10px 10px 10px;
  margin: 0 auto;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;
const Error404Img=styled.img`
width: 150px;
height: 150px;
`
const ErrorText=styled.h6``
const MoveToHome=styled.h6``
export const GoToHomeButton = styled.button`
  width: 100px;
  color: white;
  font-size: 1rem;
  height: 2.2rem;
  font-weight: bold;
  background-color: #087f5b;
  border: none;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 0px;
  margin-bottom: 20px;
  margin-right: -10px;
  display: inline-block;
  /* margin-left: 10px; */
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

 
  }
`;
function PageNotFound() {
    return (
        <Page404Container>
            <Page404Wrapper>
            <Error404Img src={errorImg}  />
<ErrorText> Ops! You have found a page that doesn't exist. </ErrorText>
<MoveToHome>Go to <Link to="/" ><GoToHomeButton>Home</GoToHomeButton></Link>  </MoveToHome>
             </Page404Wrapper>
        </Page404Container>
    )
}

export default PageNotFound
