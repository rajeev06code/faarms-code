import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 53vh;
  @media only screen and (max-width:480px){
   width: 100%;
   height: 100%;
}
`;
export const Wrapper = styled.div`
  height: 100%;
  width: 97%;
  margin: 0 auto;
  padding: 15px 10px;
  background-color:white;
  @media only screen and (max-width:480px){
    padding: 10px 10px;
}
 
`;
export const ProCategory2=styled.h5`
display: inline-block;
margin-right: 20px;
margin-left:20px;
@media only screen and (max-width:480px){
  font-size: 15px;

}
`
