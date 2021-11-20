import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {useHistory} from 'react-router'
import {Link} from "react-router-dom"
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import pro1 from "../../assets/products/product2.png";
import StarRateIcon from "@mui/icons-material/StarRate";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FlashOnOutlinedIcon from "@mui/icons-material/FlashOnOutlined";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { getDetails } from "../../redux/productDetailsSlice";
import {removeFromCart} from '../../redux/cartSlice'
const CartContainer = styled.div`
  margin-top: 55px;
  height: 80vh;
  color: black;
  background-color: #e6e6e9;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  margin-top: 118px;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    margin-top: 70px;
  }
`;
const CartWrapper = styled.div`
  display: flex;
  /* position: fixed; */
  /* top: 118px; */


  
  height: 100%;
  width: 97%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: scroll;
  /* margin: 0 auto; */
  /* margin-top: 100px; */
  background-color: white;
  padding: 10px 10px 10px 10px;
  margin: 0 auto;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;
const CartHead = styled.h6`
  text-align: center;
  width: 100%;
  
`;
const CartTableHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  width: 90%;
  margin: 20px auto 0px auto;
background-color: #5c940d;
  color: white;
  padding: 5px 10px;
  border-bottom: 1px solid lightgrey;
  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 10px;
  }
`;
const CartTableData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  /* margin-top: 20px; */
  width: 90%;
  margin: 0 auto;
  margin: 20px auto 0px auto;
  /* display: flex;
  flex-direction: column; */
  /* background-color: red; */
  padding: 5px 10px;
  border-bottom: 1px solid lightgrey;
  @media only screen and (max-width: 480px) {
    /* width: 100%; */
    justify-content: space-between;
  align-items: center;
  }
`;
const QuntityCon = styled.div`
  display: flex;
  font-size: 15px;
  justify-content: flex-start;
  align-items: center;
  margin-left: 90px;
  /* margin-right: 85px; */
  @media only screen and (max-width: 480px) {
    margin-right: 0px;
    margin-bottom: 30px;
    margin-left: 10px;
    
  }
  /* margin-top: 30px; */
`;
const QuntityButtonPlus = styled.button`
  width: 50px;
  height: 30px;
  font-size: 15px;
  font-weight: bold;
  outline: none;
  border: none;
  @media only screen and (max-width: 480px) {
    width: 20px;
  height: 20px;
  font-size: 10px;
  }
`;
const QuntityButtonMinus1 = styled.button`
  width: 50px;
  height: 30px;
  font-size: 15px;
  font-weight: bold;
  outline: none;
  border: none;
  @media only screen and (max-width: 480px) {
    width: 20px;
  height: 20px;
  font-size: 10px;
  }
`;
const TotalCon=styled.div`
width:90%;

margin-right: 50px;
margin-top: 20px;
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content:center;
@media only screen and (max-width: 480px) {
  margin-right: 10px;
  }
`
const SubTotal=styled.h6`
font-size: 15px;
font-weight: bold;
color: #474747;

`
const SubSpan=styled.span`
font-size: 18px;
font-weight: bold;
color: black;
margin-left: 40px;
`
export const CheckOutButton = styled.button`
  width: 200px;
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
const H5=styled.h5`
margin-Left:60px;
font-Size:15px;
@media only screen and (max-width: 480px) {
  margin-Left:10px;
  }

`
const SpanQty=styled.span`
width: 30px; height: 30px; text-Align: center; 


`
const Total=styled.h5`
font-Size:15px;margin-Right:90px;
@media only screen and (max-width: 480px) {
  margin-Right:10px;
}
`
function CheckOutPage() {
  //   const { id } = useParams();

  const {cartItems} = useSelector((state) => state.cart);
const history=useHistory()
  const handleAddress=(cartItems)=>{
    // dispatch(addToCart(cartItems))
     history.push("/address")
  }
  // console.log(state);
   const dispatch=useDispatch();
   const handleRemove=(cartItems)=>{
    dispatch(removeFromCart(cartItems))
  }
  //  useEffect(()=>{
  //   dispatch(getDetails(id))
  //  },[])

    // let [count, setCount] = useState(1);

    // const QuantityPlus = () => {
    //   setCount(() => {
    //     return (count = count + 1);
    //   });
    // };
    // const QuantityMinus = () => {

    //   setCount(() => {
    //     if (count < 2) {
    //       return (count = 1);
    //     } else {
    //       return (count = count - 1);
    //     }
    //   });
    // };

  return (
    <>
      <Navbar />
      <CartContainer>
        <CartWrapper>
          <div
            style={{ display: "flex", width: "100%", justifyContent: "center" }}
          >
            {" "}
            <CartHead>
              Faarms Cart <ShoppingCartOutlinedIcon />
            </CartHead>
          </div>
          {cartItems.length===0?(<>
          
            <CartHead style={{marginTop:"100px"}}>
            Your Cart is Currently Empty <SentimentVeryDissatisfiedIcon/>  
            </CartHead>
        
            <Link to="/" >Start Shopping <ArrowForwardIcon/> </Link>
            
         </> ):(<>
         
         
          <CartTableHead>
            <h5 style={{fontSize:"15px"}}>PRODUCT</h5>
            <h5 style={{fontSize:"15px"}}>PRICE(₹)</h5>
            <h5 style={{fontSize:"15px"}}>QUANTITY</h5>
            <h5 style={{fontSize:"15px"}}>TOTAL(₹)</h5>
            <h5 style={{fontSize:"15px"}}> ACTION </h5>
          </CartTableHead>
         
         
         
          {
            cartItems.map(item=>{
              return (
              <>
                <CartTableData>
                <img src={item.prodImg} alt="" width="40px" height="50px" />
            <H5  >{item.price}</H5>
            <QuntityCon>
              <QuntityButtonMinus1 >-</QuntityButtonMinus1>

              <SpanQty
                
              >
           {item.cartQty}
              </SpanQty>
              <QuntityButtonPlus>+</QuntityButtonPlus>
            </QuntityCon>
            <Total  >{item.price*item.cartQty}</Total>
            <h5  style={{fontSize:"15px",color:"#e03131",cursor:"pointer"}} onClick={()=>handleRemove(item)}><DeleteForeverIcon/></h5>
            </CartTableData>
            
              </>  
              )
            })
          }
      
         
          <TotalCon>
          <div>
              <SubTotal>SUBTOTAL:<SubSpan>₹435</SubSpan></SubTotal>
              </div>
              <h6 style={{color:"#959595"}}>*taxes and shippings are calculated.</h6>
              <CheckOutButton onClick={()=>handleAddress(cartItems)} >CheckOut</CheckOutButton>
              <Link to="/" >Continue Shopping <ArrowForwardIcon/> </Link>
            </TotalCon>
         </>)}
          {/* <CartTableHead>
            <h5>Product</h5>
            <h5>Price</h5>
            <h5>Quantity</h5>
            <h5>Total</h5>
          </CartTableHead>
          <CartTableData>
            <img src={prodImg} alt="" width="50px" height="60px" />
            <h5 style={{marginLeft:"60px"}} >{price}</h5>
            <QuntityCon>
              <QuntityButtonMinus1 >-</QuntityButtonMinus1>

              <span
                style={{ width: "30px", height: "30px", textAlign: "center" }}
              >
           
              </span>
              <QuntityButtonPlus >+</QuntityButtonPlus>
            </QuntityCon>
            <h5>Total</h5>
          </CartTableData> */}
        </CartWrapper>
      </CartContainer>
    </>
  );
}

export default CheckOutPage;
