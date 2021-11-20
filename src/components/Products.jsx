import React from "react";
import styled from "styled-components";
import SingleProduct from "./SingleProduct";

import "../components/styled-comp/mobilestyle.css";
import i18n from "i18next";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation, initReactI18next } from "react-i18next";
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 53vh;
  margin-bottom: 10px;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;
const Wrapper = styled.div`
  height: 100%;
  width: 97%;
  margin: 0 auto;
  background-color: white;
  @media only screen and (max-width: 480px) {
  
    padding: 10px 10px;
  }
`;
const ProCategory = styled.h5`
  display: inline-block;
  margin: 20px 20px;
  @media only screen and (max-width: 480px) {
    /* margin: 10px 10px; */
    font-size: 15px;
  
    display: inline-block;
    /* max-width: 150px; */
  }
`;
// const translateEn={pradhan:"Pradhan G Special",};
// const translateHn={Pradhan:"प्रधान जी स्पेशल ",};

//  i18n.use(initReactI18next)
//    .init({
//    resources: {
//      en:{ translation:translateEn},
//      hn:{ translation:translateHn},
//      },
//    lng:"en",
//    fallbackLng:"en",

//    interpolation:{
//      escapevalue:false
//    }
//    })

function Products() {
  const state = useSelector((state) => state.bhasa);
  console.log(state);
  // i18n.changeLanguage(state.lang);
  const { t } = useTranslation();
  return (
    <Container>
      <Wrapper>
        {/* <ProCategory>{t('pradhan')}</ProCategory> */}
        {state.lang === "en" ? (
          <ProCategory>Pradhan G Special</ProCategory>
        ) : state.lang==="hn"?(
          <ProCategory>प्रधान जी विशेष </ProCategory>
        ):<ProCategory>Pradhan G Special</ProCategory>}
        {state.lang === "en" ? (
          <span
            className="proview"
            style={{ color: "#008b8b", cursor: "pointer", fontWeight: "bold",fontSize:"15px", }}
          >
            View all >
          </span>
        ) :state.lang==="hn"? (
          <span
            className="proview"
            style={{ color: "#008b8b", cursor: "pointer", fontWeight: "bold",fontSize:"14px" }}
          >
            सभी देखें >
          </span>
        ):(
          <span
            className="proview"
            style={{ color: "#008b8b", cursor: "pointer", fontWeight: "bold",fontSize:"15px", }}
          >
            View all >
          </span>
        ) }

        <div>
          <SingleProduct />
        </div>
      </Wrapper>
    </Container>
  );
}

export default Products;
