import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MobileMenu from "./MobileMenu";
import LoginModal from "../pages/register/LoginModal";
import Image from "../assets/logo/faarms.png";
import { useSelector, useDispatch } from "react-redux";
import ImageTractor from "../assets/logo/tractor_Photo.png";
import ImageLang from "../assets/lang.png";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import { addlang,getLanguage } from "../redux/languageSlice";
import {useHistory} from 'react-router'

import {
  Container,
  Wrapper,
  Left,
  ImgDiv,
  Img,
  Middle,
  SearchContainer,
  Input,
  Navigation,
  ListItems,
  ListItem,
  Right,
  Button,
  Tractor,
  LangImage,
  Select,
  Language,
  HambergerDiv,
  Hamberger,
  TractorDiv,
  CartIcon
} from "../components/styled-comp/Navbar.js";
import { Link } from "react-router-dom";

const translationEn = {
  seed: "Seed",
  Fertilizers: "Fertilizers",
  Agro: "Agro-Chemicals",
  livestock: "LiveStock",
  agrimachine: "Agri-Machinery",
  organic: "Organic",
  faarmsTv: "Faarms Tv",
  faarmoji: "Faarmoji",
  login: "Login",
  search: "Search here...",
};
const translationHn = {
  seed: "बीज",
  Fertilizers: "उर्वरक ",
  Agro: "कृषि रसायन ",
  livestock: "पशु ",
  agrimachine: "कृषि मशीनरी ",
  organic: "कार्बनिक ",
  faarmsTv: "फार्म्स टीवी",
  faarmoji: "फ़ार्मोजी ",
  login: "लॉग-इन ",
  search: "यहां खोजे... ",
};
const translationPun = {
  seed: "ਬੀਜ",
  Fertilizers: "ਖਾਦ ",
  Agro: "ਐਗਰੋ ",
  livestock: "ਪਸ਼ੂ",
  agrimachine: "ਖੇਤੀ ਮਸ਼ੀਨ ",
  organic: "ਜੈਵਿਕ",
  faarmsTv: "ਕਿਸਾਨ ਟੀ.ਵੀ",
  faarmoji: "ਕਿਸਾਨ ਇਮੋਜੀ",
  login: "ਲਾਗਿਨ ",
  search: "ਇੱਥੇ ਖੋਜ ਕਰੋ... ",
};

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEn },
    hn: { translation: translationHn },
    pn: { translation: translationPun },
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapevalue: false,
  },
});

const Navbar = () => {
  const history=useHistory();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleCart=()=>{
   
     history.push("/checkout")
  }
  const cartvalue = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getLanguage());
  }, [dispatch]);

  const {loading,selector}=useSelector((state)=>state.bhasa)
  console.log(loading,selector)

  const changeLng = (e) => {
    e.preventDefault();
    dispatch(addlang(e.target.value));
    i18n.changeLanguage(e.target.value);
    console.log(e.target.value);
  };
  const [open, setOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  return (
    <Container>
      <MobileMenu open={open} setOpen={setOpen} />
      <LoginModal openLogin={openLogin} setOpenLogin={setOpenLogin} />

      <Wrapper>
        <Left>
          <ImgDiv>
            <Link to="/">
              <Img src={Image} alt="logo" />
            </Link>
          </ImgDiv>
        </Left>
        <Middle>
          <SearchContainer>
            <Input placeholder={t("search")} type="text" />
            <SearchIcon
              style={{
                cursor: "pointer",
                color: "#788475",
                marginRight: "8px",
              }}
            />
          </SearchContainer>
          <Navigation>
            <ListItems>
              <ListItem>{t("seed")}</ListItem>
              {/* <ListItem>Seeds</ListItem> */}
              <ListItem>{t("Fertilizers")}</ListItem>
              <ListItem>{t("Agro")}</ListItem>
              <ListItem>{t("livestock")}</ListItem>
              <ListItem>{t("agrimachine")}</ListItem>
              <ListItem>{t("organic")}</ListItem>
              <ListItem>{t("faarmsTv")}</ListItem>
              <ListItem>{t("faarmoji")}</ListItem>
            </ListItems>
          </Navigation>
        </Middle>
        <Right>
          <Button
            onClick={() => {
              setOpenLogin(true);
            }}
          >
            {t("login")}
          </Button>
          <TractorDiv onClick={()=>handleCart()}>
          <Tractor src={ImageTractor} alt="tract" />
       
          <CartIcon>{cartvalue.cartTotalQuantity}</CartIcon>
          </TractorDiv>
         
          <LangImage src={ImageLang} />
          <Select name="language" onChange={changeLng}  >
          {
            loading?<h6>Loading...</h6>:( selector.map((data) => {
              return (
                <>
                <Language value={data.value} >
              {data.name}
            </Language>
        
                </>
              )
            }))
          }
          
          </Select>
        </Right>
        <HambergerDiv
          onClick={() => {
            setOpen(true);
          }}
        >
          <Hamberger></Hamberger>
          <Hamberger></Hamberger>
          <Hamberger></Hamberger>
        </HambergerDiv>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
