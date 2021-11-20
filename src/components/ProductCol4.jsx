import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getProducts2 } from "../redux/productSlice";
import { getMachines } from "../redux/productSlice";
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
const ProductCol4 = () => {
  const state = useSelector((state) => state.prod);
  console.log(state);
  const language = useSelector((state) => state.bhasa);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts2());
  }, []);
  useEffect(() => {
    dispatch(getMachines());
  }, [dispatch]);
  return (
    <Container>
      <Wrapper>
        {language.lang === "en" ? (
          <ProCategory>LiveStock</ProCategory>
        ) : (
          <ProCategory>पशु </ProCategory>
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
      <Wrapper style={{padding:"10px 0px"}}>
        {language.lang === "en" ? (
          <ProCategory>Agri-Machinery</ProCategory>
        ) : (
          <ProCategory>कृषि मशीनरी </ProCategory>
        )}
        <Right>
          {state.loading ? (
            <h6>Loading...</h6>
          ) : (
            state.products3.map((data) => {
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
          <ProCategory>Organic</ProCategory>
        ) : (
          <ProCategory>कार्बनिक </ProCategory>
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

export default ProductCol4;
