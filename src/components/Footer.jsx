import React from "react";
import { useSelector } from "react-redux";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookImg from "../assets/social/facebook.png";
import TwitterImg from "../assets/social/twitter.png";
import LinkedInImg from "../assets/social/linkedin.png";
import YouTubeImg from "../assets/social/youtube.png";
import Card from "../assets/social/card.png";
import {
  Container,
  Wrapper,
  FooterContainer1,
  Div1,
  Div2,
  Div3,
  Div4,
  Div5,
  Span,
  FooterContainer2,
  MiddleDiv1,
  MiddleDiv2,
  MiddleDiv3,
  MiddleDiv4,
  MiddleDiv5,
  Ul,
  List,
  IconDiv,
  FooterContainer3,
  Img,
  Img2,
  Email,
  Form,
  Subscribe,
  Label,
  Input,
} from "../components/styled-comp/footer.js";

const Footer = () => {
  const state = useSelector((state) => state.bhasa);
  return (
    <Container>
      <Wrapper>
        <FooterContainer1>
          <Div1>
            <EmailIcon style={{ color: "#37861a" }} />
            <Email>info@faarms.com</Email>
          </Div1>
          <Div2>
            <WhatsAppIcon style={{ color: "#37861a", marginRight: "5px" }} />
            <Span style={{ color: "#37861a" }}>|</Span>
            <PhoneIcon style={{ color: "#37861a", marginLeft: "5px" }} />
            <Span style={{ color: "white", marginLeft: "5px" }}>
              {" "}
              +91 8811838383
            </Span>
          </Div2>
          <Div3>
            <Span style={{ color: " #999999" }}>
              {state.lang === "en"
                ? "Whatsapp/Missed call at this number by 9:00 am - 6:00 pm(Monday to Saturday)"
                : "व्हाट्सएप/मिस्ड कॉल, इस नंबर पर सुबह 9:00 बजे से शाम 6:00 बजे तक (सोमवार से शनिवार) कर सकते है । "}
            </Span>
          </Div3>
        </FooterContainer1>
        <FooterContainer2>
          <MiddleDiv1>
            <Ul>
              <Span style={{ color: "white" }}>Company</Span>

              <List>Contact Us</List>
              <List>About Us</List>
              <List>Field Officer Login</List>
              <List>Careers</List>
              <List>Sitemap</List>
            </Ul>
          </MiddleDiv1>
          <MiddleDiv2>
            <Ul>
              <Span style={{ color: "white" }}>Policy Info</Span>

              <List>Contact Us</List>
              <List>Privacy Policy</List>
              <List>Terms of Sale</List>
              <List>Terms of Use</List>
              <List>Report Abuse</List>
            </Ul>
          </MiddleDiv2>
          <MiddleDiv3>
            <Ul>
              <Span style={{ color: "white" }}>Why Us?</Span>

              <List>Track Order</List>
              <List>Refund And Return Policy</List>
              <List>Field Officer Login</List>
              <List>Shipping Policy</List>
              <List>Terms And Conditions</List>
            </Ul>
          </MiddleDiv3>
          <MiddleDiv4>
            <Span style={{ color: "white", fontSize: "18px",marginBottom:"10px" }}>Subscribe</Span>

            <Form>
              <Input type="text" placeholder=" your email address" />
              <Label htmlFor="text">Subscribe</Label>
            </Form>
            <Subscribe>
              Register now to get updates on promotions and coupons.Or{" "}
              <a style={{ textDecoration: "none", color: "#ffb300" }}>
                Download Now
              </a>{" "}
            </Subscribe>
          </MiddleDiv4>
          <MiddleDiv5>
            <Span style={{ color: "white" }}>Follow Us</Span>
            <IconDiv>
              {/* <FacebookIcon style={{color:"#1877f2",marginRight:"30px"}}/>
              <TwitterIcon style={{color:"#1d9bf0",marginRight:"30px"}}/>
              <LinkedInIcon style={{color:"#0a66c2",marginRight:"30px"}}/>
              <YouTubeIcon style={{color:"#cc1016",marginRight:"30px"}}/> */}
            </IconDiv>
            <Ul style={{ display: "flex" }}>
              {/* <Span style={{ color: "white" }}>Follow Us</Span> */}

              <List style={{ cursor: "pointer" }}>
                <Img src={FacebookImg} />
              </List>
              <List style={{ cursor: "pointer" }}>
                <Img src={TwitterImg} />
              </List>
              <List style={{ cursor: "pointer" }}>
                <Img src={LinkedInImg} />
              </List>
              <List style={{ cursor: "pointer" }}>
                <Img src={YouTubeImg} />
              </List>
            </Ul>
          </MiddleDiv5>
        </FooterContainer2>
      </Wrapper>
      <FooterContainer3>
        <Div1>
          <Span style={{ color: " #999999" }}>
            copyright @ 2020 FAARMS.All Right Reserved.
          </Span>
        </Div1>
        <Div4>
          <Span style={{ color: " #999999" }}>Payments:</Span>
          <Div5>
            <Img2 src={Card} />
            <Img2 src={Card} />
            <Img2 src={Card} />
            <Img2 src={Card} />
            <Img2 src={Card} />
            <Img2 src={Card} />
            <Img2 src={Card} />
            <Img2 src={Card} />
            <Img2 src={Card} />
            <Img2 src={Card} />
          </Div5>
        </Div4>
      </FooterContainer3>
    </Container>
  );
};

export default Footer;
