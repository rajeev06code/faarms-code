import React, { useState } from "react";
import styled from "styled-components";
import "../../components/styled-comp/mobilestyle.css";
import { Link } from "react-router-dom";
import { useSelector} from "react-redux";

const ModalContainer = styled.div`
  position: absolute;

  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: black;
  width: 100vw;

  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  margin: 0 auto;

  padding: 250px;

  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;

  transition-duration: 500ms;
  @media only screen and (max-width: 480px) {
    width: 200px;
    height: 200px;

    background-color: black;

    z-index: 99;
    margin: 0 auto;

    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;

    transition-duration: 500ms;
  }
`;
const ModalWrapper = styled.div`
    width: 670px;
    height: 370px;
 
   background-color: white;

    padding:10px;
    display: flex;
    flex-direction: column;
    align-items: center;
justify-content: center;
    transition-duration: 500ms; ;
  }
`;
export const ModalButton = styled.button`
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
const LoginInput = styled.input`
  margin-left: -80px;
  width: 55%;
  height: 2.6rem;
  border: 1px solid grey;
  border-radius: 0px;
  background-color: white;
  opacity: 1;
  z-index: 9999;
`;
const SpanTag = styled.span`
  display: block;
  color: #6f6f6f;
  font-weight: bold;
  font-size: 18px;
`;
const SpanCloseBtn = styled.span`
  position: absolute;
  color: #6f6f6f;
  font-size: 20px;
  top: 50px;
  right: 80px;
  cursor: pointer;
`;

function LoginModal({ openLogin, setOpenLogin }) {
  const state=useSelector((state)=>state.bhasa)
  // const [otp, setOtp] = useState(false);
  return (
    <ModalContainer
      style={{
        transform: `translateY(${openLogin ? "0%" : "-250%"})`,
      }}
    >
      <ModalWrapper
        style={{
          transform: `translateY(${openLogin ? "0%" : "-250%"})`,
        }}
      >
        <div style={{ width: "100%", textAlign: "center" }}>
        {
          state.lang=="en"?   <SpanTag>Please Enter Your 10 Digit Mobile Number To Login</SpanTag>:   <SpanTag style={{fontSize:"15px"}}>लॉग इन करने के लिए कृपया अपना 10 अंकों का मोबाइल नंबर दर्ज करें </SpanTag>
        }
       
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
            marginLeft: "90px",
          }}
        >
          <LoginInput type="number" className="loginInput" placeholder="+91" />
          <Link to="otp">
            <ModalButton>{
              state.lang==="en"?"SEND OTP":"OTP भेजें"
            }</ModalButton>
          </Link>

          <SpanCloseBtn
            onClick={() => {
              setOpenLogin(false);
            }}
          >
            X
          </SpanCloseBtn>
        </div>
      </ModalWrapper>
    </ModalContainer>
  );
}

export default LoginModal;
