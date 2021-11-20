import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 110px;
  width: 100%;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  z-index: 999;
  @media only screen and (max-width: 480px) {
    background-color: #087f5b;
    height: 60px;
    z-index: 9999;
  }
`;
export const Wrapper = styled.div`
/* position: relative; */
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 10px 20px;
  @media only screen and (max-width: 480px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;
export const ImgDiv = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  @media only screen and (max-width: 480px) {
    height: 40px;
    width: 40px;
  }
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;
export const Middle = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  flex: 8;
  padding: 10px 30px;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
export const SearchContainer = styled.div`
  display: flex;
  width: 60%;
  height: 50%;
  border-radius: 3px;
  border: 1px solid lightgray;
  align-items: center;
  align-self: flex-start;
  padding: 5px 0;
  background-color: white;
`;
export const Input = styled.input`
  width: 100%;
  border: none;
  padding-left: 10px;

  font-size: 0.8rem;

  outline: none;
`;
export const Navigation = styled.div`
  width: 100%;
  height: 50%;
  margin: 10px 0;
  padding: 10px 0;
`;
export const ListItems = styled.ul`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
export const ListItem = styled.li`
  list-style: none;
  cursor: pointer;

  color: #3d3d3d;
  font-size: 15px;
  &:hover {
    color: black;
  }
`;
export const Right = styled.div`
  width: 100%;
  height: 100%;
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media only screen and (max-width: 480px) {
    display: flex;
    flex: 11;

    align-items: center;
  }
`;

export const Button = styled.button`

  width: 6rem;
  color: white;
  font-size: 0.8rem;
  height: 2rem;
  font-weight: bold;
  background-color: #087f5b;
  border: none;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  &:hover {
    background-color: #37861a;
  }
 
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
export const Tractor = styled.img`
  width: 70px;
  height: 50px;


  
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
export const TractorDiv=styled.div`
  position: relative;
 cursor: pointer;
  /* &::before{
    position: absolute;
    content: "2";
    width: 20px;
    height: 21px;
    text-align: center;
    color: white;
    font-weight: bold;
    top: 3px;
    left:5px;
    background-color: red;
    border-radius: 50%;
  } */
`
export const CartIcon=styled.h6`
position: absolute;
    
    width: 20px;
    height: 20px;
    text-align: center;
    color: white;
    font-weight: bold;
    top: 4px;
    left:33px;
    background-color: red;
    border-radius: 50%;
    @media only screen and (max-width: 480px) {
  display:none;
  }
`
export const LangImage = styled.img`
  width: 35px;
  height: 35px;
  position: absolute;
  top: 38px;
  right: 95px;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

export const Select = styled.select`
  position: relative;
  border: none;
  background-color: white;
  font-weight: 500;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
export const Language = styled.option`
  font-size: 10px;
`;

export const HambergerDiv = styled.div`
  width: 38px;
  height: 30px;
  display: none;
  @media only screen and (max-width: 480px) {
    display: block;
    width: 28px;
  height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    margin-right: 1rem;
  }
`;
export const Hamberger = styled.div`
  width: 100%;
  height: 4px;
  background-color: white;
  border-radius: 30px;
`;
