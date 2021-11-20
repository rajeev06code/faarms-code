import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import {useHistory} from 'react-router'
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import pro1 from "../../assets/products/product2.png";
import StarRateIcon from "@mui/icons-material/StarRate";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FlashOnOutlinedIcon from "@mui/icons-material/FlashOnOutlined";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import {getDetails} from '../../redux/productDetailsSlice'
import Footer from "../../components/Footer";
import { addToCart } from "../../redux/cartSlice";
import {Link} from 'react-router-dom'

const DetailsContainer = styled.div`
  margin-top: 58px;
  height: 95vh;
  color: black;
  background-color: #e6e6e9;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    /* margin-top:200px; */
  height:100%;
  color: black;
  width: 97%;
  margin: 0 auto;
  background-color: #e6e6e9;
  /* background-color: red; */

  flex-direction: column;
  align-items: center;
  justify-content: center;
    /* padding: 100px 20px; */
  }
`;
const DetailsWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 118px;
  align-items: center;
  justify-content: space-between;
  height: 80%;
  width: 97%;
  /* margin: 0 auto; */
  /* margin-top: 100px; */
  background-color: white;
  padding: 10px 10px 10px 10px;
  margin: 0 auto;
  @media only screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: static;
    top: 0;
    margin-top: 70px;
    height: 100%;
    padding: 10px 10px;
  }
`;

const LeftBoxDetail = styled.div`
  flex: 4;
  position: sticky;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #e6e6e9;
  @media only screen and (max-width: 480px) {
    padding: 30px 0px;
   
    background-color: white;
    
  }
`;
export const DetailsButton = styled.button`
  width: 100%;
  color: white;
  font-size: 1rem;
  height: 2.5rem;
  font-weight: bold;
  background-color: #ff8c00;
display: none;
  border: none;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  @media only screen and (max-width: 480px) {
    display: block;
    margin-top: 20px;
    background-color: #087f5b;
  }
`;
export const DetailsButton2 = styled.button`
  width: 80%;
  color: white;
  font-size: 1rem;
  height: 2.5rem;
  font-weight: bold;
  background-color: #087f5b;
  border: none;
  cursor: pointer;
  margin: 0 auto;
  /* margin-left: 10px; */
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  @media only screen and (max-width: 480px) {
    display: block;
    width: 50%;
  color: white;
  font-size: .8rem;
  height: 2.2rem;
  margin-top: 10px;
  display: none;
  }
`;
const ImgDetailsDiv = styled.div`
  width: 70%;
  height: 80%;

  object-fit: cover;
  @media only screen and (max-width: 480px) {
    width: 50%;
  height: 60%;
  

  }
`;
const ButtonCon = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImgDetails = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;
const RightBoxDetail = styled.div`
  flex: 8;
  /* background-color: #061208; */
  height: 100%;
  /* overflow-wrap: break-word; */
  padding: 20px 20px;
  overflow-x: scroll;
  scrollbar-width: thin;
  @media only screen and (max-width: 480px) {
   height: 100%;
   width: 100%;
  overflow-x: visible;
  /* overflow-wrap: break-word; */
  display: flex;
  flex-direction: column;
  /* background-color: tomato; */

  }
`;
const ProductHeading = styled.h3`
  /* color: #7f7f7f; */
  font-size: 25px;
  @media only screen and (max-width: 480px) {
    font-size: 19px;
    width: 100%;
    text-align: center;
    /* word-wrap: break-word; */
  
  }
`;
const StarContainer = styled.div`
  background-color: #2f9e44;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  padding: 2px 2px;
  border-radius: 3px;
  @media only screen and (max-width: 480px) {
    width: 50px;
    padding: 4px 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const ProductMrp = styled.h4`
  font-size: 20px;
  margin-top: 30px;
  @media only screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
const ProductPrice = styled.h4`
  font-size: 20px;
  @media only screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
const ProductSave = styled.h4`
  font-size: 20px;
  @media only screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
const ProductDiscount = styled.h4`
  font-size: 20px;
  @media only screen and (max-width: 480px) {
    font-size: 18px;
  }  

`;
const FormsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 30px;
  width: 100%;
  @media only screen and (max-width: 480px) {
    display: flex;
    width: 100%;
    height: 100%;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  /* background-color: green; */
  padding: 10px 0px;
  }  
`;
const Div=styled.div`
display: flex;
align-items: flex-start;

`
const FormsHead = styled.h4`
  font-size: 18px;
  @media only screen and (max-width: 480px) {
display: none;
    
  }  
`;
const InputPin = styled.input`
  outline: none;
  padding: 4px 0px;
  margin-left: 20px;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 2px solid grey;
  @media only screen and (max-width: 480px) {
    margin-left: 0px;
    
  }  
`;
const LabelPinButton = styled.label`
  background-color: #212529;
  margin-left: 20px;
  padding: 5px 20px;
  color: white;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    padding: 5px 20px;
    display: flex;

  }  
`;
const QuntityCon = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 85px;
  @media only screen and (max-width: 480px) {
    margin-right: 0px;
    margin-bottom: 30px;

  }  
  /* margin-top: 30px; */
`;
const QuntityButtonPlus = styled.button`
  width: 50px;
  height: 30px;
  font-size: 20px;
  font-weight: bold;
  outline: none;
  border: none;
`;
const QuntityButtonMinus = styled.button`
  width: 50px;
  height: 30px;
  font-size: 20px;
  font-weight: bold;
  outline: none;
  border: none;
`;

const QuntityHead = styled.h4`
  font-size: 18px;
  margin-right: 30px;
`;
const ProductDescCon = styled.div`
  width: 97%;
  height: 100%;
  margin-top: 40px;
  padding: 5px 0px;
  /* background-color: red; */
`;
const ProductDecHead = styled.h6`
  font-size: 20px;
  @media only screen and (max-width: 480px) {
    font-size: 18px;
  } 
  /* color:#087f5b; */
`;
const ProductWrapperDesc = styled.div`
  margin-top: 20px;
`;
const ProductUl = styled.ul``;
const ProductLi = styled.li`
  color: #7f7f7f;
  font-weight: bold;
  margin-bottom: 10px;
  position: relative;
  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  } 
`;
const ProductDetailsView = styled.span`
  color: black;
  font-weight: normal;
  margin-left: 60px;
  position: absolute;
  top: 0;
  left: 150px;
  @media only screen and (max-width: 480px) {
    margin-left: 40px;
    font-size: 15px;
  } 
`;
const ServicesCon=styled.div`
margin-top: 20px;
`
const ServicesHead=styled.h5`
font-size: 20px;
@media only screen and (max-width: 480px) {
    font-size: 18px;
  } 

`
const ServicesUl=styled.ul`
font-size: 15px;
`
const ServicesLi=styled.li`
list-style: none;
color: #363636;
`
function ProductDetails() {
  const { id } = useParams();
  const history=useHistory();
  const {details,loading} = useSelector((state) => state.detailsPro);
  console.log(details);
 const dispatch=useDispatch();
 useEffect(()=>{
  dispatch(getDetails(id))
 },[])

  let [count, setCount] = useState(1);

  const QuantityPlus = () => {
    setCount(() => {
      return (count = count + 1);
    });
  };
  const QuantityMinus = () => {


    setCount(() => {
      if (count < 1) {
        return (count = 0);
      } else {
        return (count = count - 1);
      }
    });
  };
const handleAddToCart=(details)=>{
  dispatch(addToCart(details))
   history.push("/checkout")
}
  return (
    <>
      <Navbar />
      <DetailsContainer>
      {
        loading ? <h6>Loading please wait...</h6>:(<>
           <DetailsWrapper>
          <LeftBoxDetail>
            <ImgDetailsDiv>
              <ImgDetails   src={`https://76ba-49-207-211-11.ngrok.io/v1/images/Product/${details.id}`} alt="img" />
            </ImgDetailsDiv>
            <ButtonCon>
            {/* <Link to='/checkout' style={{textDecoration:"none"}}> */}
            <DetailsButton2 onClick={()=>handleAddToCart(details)} >
            {/* <Link to='/checkout' style={{textDecoration:"none",color:"white"}}> */}
          <FlashOnOutlinedIcon />
          BUY NOW
          {/* </Link> */}
        </DetailsButton2>
                {/* </Link> */}
            
            </ButtonCon>
          </LeftBoxDetail>
          <RightBoxDetail>
            <ProductHeading>
            {details.name}
            </ProductHeading>
            <StarContainer>
              <span style={{ fontWeight: "bold", color: "white" }}> {details.star}</span>
              <StarRateIcon style={{ color: "white", fontSize: "18px" }} />
            </StarContainer>
            <ProductMrp>
              MRP:{" "}
              <span style={{ color: "#7f7f7f", fontWeight: "bold",fontSize:"22px" }}>
                {" "}
                <strike>₹{details.mrp}</strike>{" "}
                <strike>₹{ details}</strike>{" "}
              </span>{" "}
            </ProductMrp>
            <ProductPrice>
              PRICE:{" "}
              <span style={{ color: "#087f5b", fontWeight: "bold",fontSize:"22px" }}>
                ₹{details.price}
              </span>{" "}
              <span style={{ color: "#c92a2a", fontSize: "13px" }}>
                FREE DELIVERY!
              </span>{" "}
            </ProductPrice>
            <ProductSave>
              YOUR SAVE: <span style={{ color: "#c92a2a" }}> ₹{details.save}</span>
            </ProductSave>
            <ProductDiscount>
              DISCOUNT: <span style={{ color: "#c92a2a" }}>{details.discount}%</span>{" "}
            </ProductDiscount>
            <ServicesCon>
              <ServicesHead>SERVICES:</ServicesHead>
              <ServicesUl>
                <ServicesLi><VerifiedUserIcon style={{color:"#0b7285",fontSize:"15px",marginRight:"10px"}} />5 years warranty</ServicesLi>
                <ServicesLi><AutorenewOutlinedIcon style={{color:"#0b7285",fontSize:"15px",marginRight:"10px"}} />No Returns Applicable</ServicesLi>
                <ServicesLi><AccountBalanceWalletIcon style={{color:"#0b7285",fontSize:"15px",marginRight:"10px"}} />Cash on Delivery available</ServicesLi>
              </ServicesUl>
            </ServicesCon>
            <FormsContainer>
              <QuntityCon>
                <QuntityHead>QUANTITY:</QuntityHead>
                <QuntityButtonMinus onClick={QuantityMinus}>
                  -
                </QuntityButtonMinus>

                <span
                  style={{ width: "30px", height: "30px", textAlign: "center" }}
                >
                  {" "}
                  {count}{" "}
                </span>
                <QuntityButtonPlus onClick={QuantityPlus}>+</QuntityButtonPlus>
              </QuntityCon>
              <Div  >
              <FormsHead>DELIVERY TO:</FormsHead>
              <InputPin type="text" placeholder=" Enter Delivery Pincode" />
              <LabelPinButton>
                <LocationOnOutlinedIcon />
                CHECK
              </LabelPinButton>
              </Div>
            </FormsContainer>
            <DetailsButton onClick={()=>handleAddToCart(details)} >
                <FlashOnOutlinedIcon />
                BUY NOW
              </DetailsButton>
            <ProductDescCon>
              <ProductDecHead>PRODUCT DESCRIPTION:</ProductDecHead>
              <ProductWrapperDesc>
                <ProductUl>
                  <ProductLi>
                    Brand:<ProductDetailsView>{details.brand}</ProductDetailsView>{" "}
                  </ProductLi>
                  <ProductLi>
                    Model Name:
                    <ProductDetailsView>
                      {" "}
                      {details.model}
                    </ProductDetailsView>{" "}
                  </ProductLi>
                  <ProductLi>
                    Quantity:<ProductDetailsView> {details.qnty}</ProductDetailsView>{" "}
                  </ProductLi>
                  <ProductLi>
                    Used For:
                    <ProductDetailsView>
                    {details.used}
                    </ProductDetailsView>{" "}
                  </ProductLi>
                  <ProductLi>
                    Type:<ProductDetailsView>{details.type}</ProductDetailsView>{" "}
                  </ProductLi>
                  <ProductLi>
                    Form Factor:
                    <ProductDetailsView>{details.form}</ProductDetailsView>{" "}
                  </ProductLi>
                  <ProductLi>
                    Container Type:<ProductDetailsView>{details.container}</ProductDetailsView>{" "}
                  </ProductLi>
                  <ProductLi>
                    Storage Condition:
                    <ProductDetailsView>
                    {details.storage}
                    </ProductDetailsView>{" "}
                  </ProductLi>
                  <ProductLi>
                    Shelf Life:<ProductDetailsView>{details.shelf}</ProductDetailsView>{" "}
                  </ProductLi>
                </ProductUl>
              </ProductWrapperDesc>
            </ProductDescCon>
          </RightBoxDetail>
        </DetailsWrapper> 
      
        </>
        )
      }
    
      </DetailsContainer>
     
    </>
  );
}

export default ProductDetails;
