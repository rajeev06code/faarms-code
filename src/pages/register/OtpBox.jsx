import React from "react";
import { Helmet } from "react-helmet";
import { useSelector} from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
const OtpContainer = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const OtpWrapper = styled.div`
  position: relative;
  width: 50%;
  height: 60%;
  flex-direction: column;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  @media only screen and (max-width: 480px) {
    width: 80%;
    height: 60%;
  }
`;
const OtpHead = styled.h2`
  font-weight: bold;
  color: #6f6f6f;

  margin-bottom: 20px;
  font-size: 20px;
  @media only screen and (max-width: 480px) {
    text-align: center;
    font-size: 13px;
  }
`;
const OtpSubHead = styled.h4`
  font-size: 15px;
  color: #838383;
  @media only screen and (max-width: 480px) {
    font-size: 12px;
    display: block;
  }
`;
const DivInput = styled.div`
  margin: 30px 0;
  @media only screen and (max-width: 480px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin: 20px auto;
    padding: 0 20px;
  }
`;
const OtpInput = styled.input`
  width: 50px;
  margin: 0 10px;
  border-bottom: 3px solid #d1d1d1;
  outline: none;
  border-top: none;
  border-left: none;
  border-right: none;
  padding: 0 20px;

  font-weight: bolder;

  color: #6f6f6f;
  @media only screen and (max-width: 480px) {
    color: #6f6f6f;
    width: 30px;
    margin: 0 5px;
    padding: 0 8px;
  }
`;

const OtpButton = styled.button`
  width: 180px;
  height: 40px;
  background-color: #087f5b;
  outline: none;
  border: none;
  /* border-radius: 10px; */
  color: white;
  font-size: 20px;
  margin: 20px 0;
  @media only screen and (max-width: 480px) {
    width: 100px;
    height: 35px;
    font-size: 15px;
  }
`;
const OtpWrong = styled.h6`
  color: #797979;
  cursor: pointer;
  font-size: 13px;
`;
const OtpResend = styled.h4`
  color: #6f6f6f;
  font-weight: bold;
  font-size: 18px;
  margin: 15px 0;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
    display: block;
  }
`;
const OtpClose = styled.span`
  position: absolute;
  top: 140px;
  z-index: 999;
  right: 380px;
  color: #6f6f6f;
  font-size: 20px;

  @media only screen and (max-width: 480px) {
    font-size: 20px;
    top: 20px;
    right: 50px;
    color: white;
  }
`;
function OtpBox() {
  const state=useSelector((state)=>state.bhasa)
  return (
    <OtpContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Faarms | OTP</title>
      </Helmet>
      <Link to="/">
        <OtpClose>X</OtpClose>
      </Link>
      <OtpWrapper>
        <OtpHead>
        {
          state.lang==="en"?"  Please Enter The One-Time Password To Verify Your Account":"कृपया अपना खाता सत्यापित करने के लिए OTP दर्ज करें "
        }
        
        </OtpHead>
        <OtpSubHead>
        {
          state.lang==="en"?" A One-Time Password has been sent to 1234567890":"OTP 1234567890 पर भेज दिया गया है  "
        }
       </OtpSubHead>
        <DivInput>
          <OtpInput></OtpInput>
          <OtpInput></OtpInput>
          <OtpInput></OtpInput>
          <OtpInput></OtpInput>
          <OtpInput></OtpInput>
          <OtpInput></OtpInput>
        </DivInput>
        <Link to="/">
          <OtpButton>
          {
          state.lang==="en"?"Validate":"सत्यापित करें"
        }
         </OtpButton>
        </Link>

        <OtpResend>
        {
          state.lang==="en"?"  Resend One-Time Password":"OTP दोबारा भेजें  "
        }
        </OtpResend>
        <OtpWrong>
        {
          state.lang==="en"?"Entered A Wrong Number?":"क्या आपने गलत मोबाइल नंबर डाला है ?"
        }
        
        </OtpWrong>
      </OtpWrapper>
    </OtpContainer>
  );
}

export default OtpBox;
