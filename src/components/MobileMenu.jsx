import React, { useState } from "react";
import styled from "styled-components";
import "../components/styled-comp/mobilestyle.css";
import { Link } from "react-router-dom";
import LoginModalMobile from "../pages/register/LoginModal";

const Container = styled.div`
  position: relative;
  display: none;
  @media only screen and (max-width: 480px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    margin: 20px 20px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
    border-radius: 30px;
    transform: translateY(-150%);
    transition-duration: 500ms;
  }
`;
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color:white;
    padding: 20px;
    border-radius: 20px;
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
    margin-top: 20px;
  }
`;
function MobileMenu({ open, setOpen }) {
  const [openLogin, setOpenLogin] = useState(true);
  return (
    <Container
      style={{
        transform: `translateY(${open ? "0%" : "-150%"})`,
      }}
    >
      <LoginModalMobile />
      {openLogin ? <LoginModalMobile /> : ""}
      <Wrapper>
        <ul className="lists">
          <li className="list">Seeds</li>
          <li className="list">Fertilizers</li>
          <li className="list">Agro-chemicals</li>
          <li className="list">Livestock</li>
          <li className="list">Agri-machinery</li>
          <li className="list">Organic</li>
          <li className="list">Faarms Tv</li>
          <li className="list">Faarmoji</li>
          <Link to="/moblogin">
            <Button>Login</Button>
          </Link>
          {/* <Button>Login</Button> */}
        </ul>
        <span
          className="closebtn"
          onClick={() => {
            setOpen(false);
          }}
        >
          Close
        </span>
      </Wrapper>
    </Container>
  );
}

export default MobileMenu;
