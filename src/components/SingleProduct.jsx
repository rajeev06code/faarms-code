import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { useGetProductsQuery } from "../services/productsServices.js";
import { getProducts } from "../redux/productSlice";
import {
  Container,
  ProductContainer,
  ImgDiv,
  ProImg,
  ProPrice,
  ProName,
  DetailsDiv,
  Button,
  LinkTag,
} from "../components/styled-comp/SingleProduct.js";

function SingleProduct() {
  // const [data, setData] = useState('');
  const state = useSelector((state) => state.prod);
  console.log(state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  };
  return (
    <Container>
      <Slider {...settings}>
        {/* {

response.isLoading?<div>loading...</div>:
    
   response.data.map((pro)=>(
     <div>
     <h4>{pro.title}</h4>
     <img src={pro.url} alt="" />
     </div>
   
   ))
          
        
      }   */}

        {state.loading ? (
          <h6>Please wait Loading...</h6>
        ) : (
          state.products.map((data) => {
            return (
              <>
                <Link
                  to={`/details/${data.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div>
                    <ProductContainer key={data.id}>
                      <ImgDiv>
                        <ProImg
                          // src={`https://8d06-2401-4900-4bd8-fda1-bd7a-cca7-1a84-9284.ngrok.io/v1/images/Product/${data.id}`}
                          src={`https://76ba-49-207-211-11.ngrok.io/v1/images/Product/${data.id}`}
                          // src={data.image}
                        />
                      </ImgDiv>
                      <DetailsDiv>
                        <ProName>{data.name}</ProName>
                        <ProPrice>
                          {/* ₹{data.variants.map(p=>{
                            if(p.id < 2){
                                return p.special_price
                            }
                            else{
                              return null;
                            }
               
                          })} */}
                          ₹{
                         data.variants[0].special_price
                          
                          }
                          <span style={{margin:"0px 5px"}} >
                            <strike
                              style={{
                                color: "#8b8b8b ",
                                marginLeft: "5px",
                                backgroundColor: "white",
                              }}
                            >
                              {/* {data.discount}
                                ₹{data.variants.map(p=>{
                             if(p.id < 2){
                                return p.price
                            }
                            else{
                              return null;
                            }
                          })} */}
                          ₹{
                         data.variants[0].price
                          
                          }
                            </strike>
                          </span>
                             <span style={{color:"#1f1f1f "}}> 
                          {
                            data.variants[0].display_unit
                          }
                        </span>
                        </ProPrice>
                     
                        {/* <Link to={`/details/${data.id}`}> */}
                        <Button>Buy</Button>
                        {/* </Link> */}
                      </DetailsDiv>
                    </ProductContainer>
                  </div>
                </Link>
              </>
            );
          })
        )}
      </Slider>
    </Container>
  );
}

export default SingleProduct;
