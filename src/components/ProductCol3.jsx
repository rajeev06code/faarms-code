import React, { useEffect } from "react";
import { getProducts2 } from "../redux/productSlice";

import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Wrapper,
  Right,
  ProCategory,
  LowerText,
  ProImg,
  ProName,
  ImageDiv,
} from "../components/styled-comp/productColumn3";

const ProductCol3 = () => {
  // const productsLists2 = useSelector((state) => state.products2.productList2);
  const state = useSelector((state) => state.prod);
  const language = useSelector((state) => state.bhasa);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts2());
  }, [dispatch]);
  return (
    <Container>
      <Wrapper>
        {language.lang === "en" ? (
          <ProCategory>Seeds</ProCategory>
        ) : (
          <ProCategory>बीज</ProCategory>
        )}

        <Right>
          {state.loading ? (
            <h6>Loading...</h6>
          ) : (
            state.products2.map((data) => {
              return (
                <div key={data.id}>
                  <ImageDiv>
                    <ProImg src={data.img} />
                    <ProName>{data.name}</ProName>
                  </ImageDiv>
                </div>
              );
            })
          )}
        </Right>
        {language.lang === "en" ? (
          <LowerText>View All ></LowerText>
        ) : (
          <LowerText> सभी देखें > </LowerText>
        )}
      </Wrapper>
      <Wrapper style={{padding:"10px 0px"}}>
        {language.lang === "en" ? (
          <ProCategory>Fertilizers</ProCategory>
        ) : (
          <ProCategory>उर्वरक </ProCategory>
        )}
        <Right>
          {state.loading ? (
            <h6>Loading...</h6>
          ) : (
            state.products2.map((data) => {
              return (
                <>
                  <ImageDiv>
                    <ProImg src={data.img} />
                    <ProName>{data.name}</ProName>
                  </ImageDiv>
                </>
              );
            })
          )}
        </Right>
        {language.lang === "en" ? (
          <LowerText>View All ></LowerText>
        ) : (
          <LowerText> सभी देखें ></LowerText>
        )}
      </Wrapper>
      <Wrapper>
        {language.lang === "en" ? (
          <ProCategory>Agro-Chemicals</ProCategory>
        ) : (
          <ProCategory>कृषि रसायन </ProCategory>
        )}
        <Right>
          {state.loading ? (
            <h6>Loading...</h6>
          ) : (
            state.products2.map((data) => {
              return (
                <>
                  <ImageDiv>
                    <ProImg src={data.img} />
                    <ProName>{data.name}</ProName>
                  </ImageDiv>
                </>
              );
            })
          )}
        </Right>
        {language.lang === "en" ? (
          <LowerText>View All ></LowerText>
        ) : (
          <LowerText> सभी देखें ></LowerText>
        )}
      </Wrapper>
    </Container>
  );
};

export default ProductCol3;
