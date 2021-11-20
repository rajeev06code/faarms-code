import React from "react";
import styled from "styled-components";
import "../../components/styled-comp/mobilestyle.css";
import { Link } from "react-router-dom";

const MobileModalContainer = styled.div`
  @media only screen and (max-width: 480px) {
    position: relative;
    background-color: black;

    display: none;
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    transition-duration: 500ms;
    transition: ease 500ms all;
  }
`;
const MobileModalWrapper = styled.div`
  @media only screen and (max-width: 480px) {
    width: 80%;
    height: 50%;
    background-color: white;
    margin: 0 auto;
    /* padding:10px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const MobileModalButton = styled.button`
  width: 6rem;
  color: white;
  font-size: 0.8rem;
  height: 2.6rem;
  font-weight: bold;
  background-color: #087f5b;
  border: none;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  opacity: 1;
`;
const MobileLoginInput = styled.input`
  width: 55%;
  border: 1px solid black;
  height: 2.6rem;
  border-radius: 0px;

  opacity: 1;
  z-index: 9999;
  border-right: none;
`;
const MobileSpanTag = styled.span`
  color: #6f6f6f;
  font-weight: bold;
  font-size: 13px;
`;
const Close = styled.span`
  @media only screen and (max-width: 480px) {
    top: 20px;
    right: 50px;
    color: white;
    z-index: 999;
    position: absolute;
    cursor: pointer;
  }
`;
function LoginModalMobile({ openLogin, setOpenLogin }) {
  return (
    <MobileModalContainer>
      <Link to="/">
        <Close>X</Close>
      </Link>
      <MobileModalWrapper>
        <div style={{ width: "100%", textAlign: "center" }}>
          <MobileSpanTag>
            Please Enter Your 10 Digit Mobile Number To Login
          </MobileSpanTag>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <MobileLoginInput
            type="number"
            className="loginInput"
            placeholder="+91"
          />
          <Link to="/otp">
            <MobileModalButton>SEND OTP</MobileModalButton>
          </Link>
        </div>
      </MobileModalWrapper>
    </MobileModalContainer>
  );
}

export default LoginModalMobile;
