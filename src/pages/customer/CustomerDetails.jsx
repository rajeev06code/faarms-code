import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CardPay from "../../components/CardPay";
import captcha from '../../assets/card/Okta-Captcha.png'
import {Link} from 'react-router-dom'
const CustomertContainer = styled.div`
  margin-top: 55px;
  height: 100vh;
  color: black;
  background-color: white;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  margin-top: 118px;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    margin-top: 70px;
    width: 100%;
    height: 100%;
  }
`;
const CustomertWrapper = styled.div`
  display: flex;
  /* position: fixed; */
  /* top: 118px; */

  height: 100%;
  width: 97%;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  /* overflow-x: scroll; */
  /* margin: 0 auto; */
  /* margin-top: 100px; */
  background-color: white;
  padding: 10px 10px 10px 10px;
  margin: 0 auto;
  @media only screen and (max-width: 480px) {
    width: 97%;
    justify-content: center;
    align-items: center;
  }
`;
const FormContainer = styled.div`
  flex: 6;
  background-color: #fcfcfc;
  /* background-color: green; */
  height: 100%;
  /* border: 2px solid grey; */
  margin-right: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    @media only screen and (max-width: 480px) {
    flex: 12;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const CardPayment=styled.div`
flex:4;
height: 80%;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    margin-right: 10px;
    padding: 20px 10px;
`
const FormHeading = styled.h5`
  width: 100%;
  font-size: 15px;
  margin: 20px 0px;
  font-weight: bold;
  
`;

const SummaryContainer = styled.div`
  flex: 2;
  /* background-color: green; */
  height: 80%;
  overflow-x: scroll;
  padding: 10px 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  /* border: 2px solid grey; */
  background-color: #f3f0ff;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const ProSummary = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  justify-content: space-between;
  color: black;

  /* font-weight: bold; */
`;
const SumTotal = styled.h6`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const DisTotal = styled.h6`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: red;
`;
const Total = styled.h6`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const PayButton = styled.button`
  width: 100%;
  color: white;
  font-size: 1rem;
  height: 2.2rem;
  font-weight: bold;
  background-color: #087f5b;
  border: none;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: -10px;
  display: inline-block;
  /* margin-left: 10px; */
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  @media only screen and (max-width: 480px) {
    display: block;
    width: 50%;
    color: white;
    font-size: 0.8rem;
    height: 2.2rem;
    margin-top: 10px;
    /* display: none; */
  }
`;
const FormTag = styled.form`
  width: 96%;
  margin: 0 auto;
  height: 80%;
  background-color: #fcfcfc;
  padding: 10px 10px;
  @media only screen and (max-width: 480px) {
    /* flex: 12; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const NameInput = styled.input`
  /* margin-right: 200px; */
  height: 30px;
  font-size: 15px;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  padding: 0px 10px;
`;
const LastInput = styled.input`
  outline: none;
  padding: 0px 10px;
  font-size: 15px;
  /* border: none; */
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

  height: 30px;
`;
const NameLabelInput = styled.label`
  /* margin-left: 10px; */
  margin-right: 10px;
`;
const LastlLabel = styled.label`
  margin-right: 10px;
  margin-left: 10px;
`;
const Phone = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 25px;
  @media only screen and (max-width: 480px) {
    /* flex: 12; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  /* background-color: green; */
 
 /* flex-direction: column; */
/* justify-content: flex-start; */
/* align-items: flex-start; */

`;
const AddressText=styled.textarea`
width: 300px;
height: 100px;
outline: none;
margin-left: 100px;

`
const Cod=styled.div`
border: 2px solid grey;
margin-top: 10px;
width: 400px;
height: 370px;
display: flex;
flex-direction: column;
padding: 10px;
background-color: #f3f0ff;
/* background-color: blue; */
justify-content:space-around;
align-items: center;
`
const CodInput=styled.div`
width: 90%;
margin: 0 auto;
height: 200px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const CaptchaImg=styled.img`
width: 50%;
height: 40%;
margin-bottom: 10px;
`
const CaptchaInput=styled.input`
width: 50%;
height: 20%;
margin-top: 5px;
outline: none;
`
function CustomerDetails() {
  const [payment, setPayment] = useState('card');
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);
  return (
    <>
      <Navbar />
      <CustomertContainer>
        <CustomertWrapper>
          <FormContainer>
            <FormHeading style={{textAlign:"center",width:"100%",margin:"30px 0px"}}>SHIPPING DETAILS:</FormHeading>
            <FormTag>
              <div sty={{ width: "100%" }}>
                <NameLabelInput>
                  First Name<sup style={{ color: "red" }}>*</sup>
                </NameLabelInput>
                <NameInput />
                <LastlLabel>
                  Last Name<sup style={{ color: "red" }}>*</sup>
                </LastlLabel>
                <LastInput />
              </div>
              <Phone>
                <NameLabelInput>
                  Phone<sup style={{ color: "red" }}>*</sup>
                </NameLabelInput>
                <NameInput placeholder="+91-" style={{ marginLeft: "30px" }} />
             
              </Phone>
              <Phone>
              
                <NameLabelInput  >
                  Email<sup style={{ color: "red" }}>*</sup>
                </NameLabelInput>
                <LastInput placeholder="@yourmail.com" style={{ marginLeft: "34px" }}  />
              </Phone>
              <Phone>
              
                <NameLabelInput  >
                  Pincode<sup style={{ color: "red" }}>*</sup>
                </NameLabelInput>
                <LastInput  style={{ marginLeft: "20px" }}  />
                <NameLabelInput style={{backgroundColor:"#7b68ee",color:"white",width:"150px",marginLeft:"10px",padding:"2px 8px",borderRadius:"2px",cursor:"pointer"}} >
                 <LocationOnOutlinedIcon/> Use my location
                </NameLabelInput>
              </Phone>
              <Phone>
              
                <NameLabelInput  >
                  City<sup style={{ color: "red" }}>*</sup>
                </NameLabelInput>
                <LastInput  style={{ marginLeft: "45px" }}  />
              
                <NameLabelInput style={{marginLeft:"10px"}} >
                  State<sup style={{ color: "red" }}>*</sup>
                </NameLabelInput>
                <LastInput  style={{ marginLeft: "37px" }}  />
              
              </Phone>
              <Phone>
              
                <NameLabelInput  >
                  House No.&Building Name<sup style={{ color: "red" }}>*</sup>
                </NameLabelInput>
                <NameInput style={{width:"300px",height:"40px"}}/>
        
              </Phone>
              <Phone>
              
                <NameLabelInput  >
                  Road name,Area,Colony<sup style={{ color: "red" }}>*</sup>
                </NameLabelInput>
                <NameInput style={{width:"300px",height:"40px",marginLeft:"19px"}}/>
        
              </Phone>
              <PayButton style={{backgroundColor:"#7b68ee",width:"50%",margin:"40px auto",marginLeft:"150px"}}>Save Address</PayButton>
            </FormTag>
          </FormContainer>
          <CardPayment>
            <h6 style={{width:"100%",textAlign:"center",fontWeight:"bold",textTransform:"uppercase",fontSize:"15px",marginTop:"14px"}} >Please choose mode of payment.</h6>
       <form action="" style={{display:"flex",justifyContent:"space-around",marginTop:"20px"}}      >
       <div  >
   <input type="radio" id="html" name="pay" label="card" checked={payment === 'card'} value="card" onClick={() => setPayment('card')}  />
   <label htmlFor="html" style={{marginLeft:"5px"}}>Prepaid</label>
   </div>
   <div>
   <input type="radio" id="html" name="pay" label="cod" checked={payment === 'cod'} value="cod" onClick={() => setPayment('cod')} />
   <label htmlFor="prepaid" style={{marginLeft:"5px"}}>Cash on delivery</label></div>

       </form>
       {
         payment==="card"?( <CardPay/>):(<>
        <Cod>
          <CodInput>
            <CaptchaImg src={captcha}/>
            <h6>Enter text below</h6>
            <CaptchaInput/>
            <PayButton style={{height:"70px"}}>Place Order</PayButton>
          </CodInput>
        
        </Cod>

         </>   )
       }
      
          </CardPayment>
          <SummaryContainer>
            <FormHeading style={{ textAlign: "center", width: "100%" }}>
              ORDER SUMMARY:
            </FormHeading>

            {cartItems.map((item) => {
              return (
                <ProSummary style={{ margin: "10px 0px" }}>
                  <img src={item.prodImg} width="45px" height="45px" alt="" />
                  <span style={{ fontSize: "15px" }}>₹{item.price}</span>
                </ProSummary>
              );
            })}
            <hr />
            <SumTotal>
              Subtotal:{" "}
              <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                ₹456
              </span>
            </SumTotal>
            <DisTotal>
              Discount:{" "}
              <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                -₹56
              </span>
            </DisTotal>
            <hr />
            <Total>
              Total:{" "}
              <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                ₹400
              </span>
            </Total>
            <PayButton style={{backgroundColor:"white",border:"2px solid grey"}} > <Link to="/checkout" style={{color:"black",textDecoration:"none"}}>Edit Cart</Link> </PayButton>
          </SummaryContainer>
        </CustomertWrapper>
      </CustomertContainer>
    </>
  );
}

export default CustomerDetails;
