import React from "react";
import { useSelector } from "react-redux";
import SingleProduct from "./SingleProduct";
import {
  Container,
  Wrapper,
  ProCategory2,
} from "../components/styled-comp/popularPro";
import languageSlice from "../redux/languageSlice";

function PopularPro() {
  const state = useSelector((state) => state.bhasa);

  return (
    <Container>
      <Wrapper>
        {state.lang === "en" ? (
          <ProCategory2>Popular Products</ProCategory2>
        ) : (
          <ProCategory2>लोकप्रिय उत्पाद </ProCategory2>
        )}
        {state.lang === "en" ? (
          <span
            className="proview"
            style={{ color: "#008b8b", cursor: "pointer", fontWeight: "bold" ,fontSize:"15px"}}
          >
            View All >
          </span>
        ) : (
          <span
            className="proview"
            style={{ color: "#008b8b", cursor: "pointer", fontWeight: "bold",fontSize:"14px"  }}
          >
            सभी देखें >
          </span>
        )}
        {/* <span style={{color:"#008b8b",cursor:"pointer",fontWeight:"bold"}} >View All</span> */}
        <div>
          <SingleProduct />
        </div>
      </Wrapper>
    </Container>
  );
}

export default PopularPro;
