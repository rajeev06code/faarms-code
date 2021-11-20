import React from "react";
import EmojiPic from "../assets/emoji.png";
import { useSelector } from "react-redux";
import GooglePlay from "../assets/googleplay.png";
import Iphone from "../assets/ios.png";

import {
  Container,
  Wrapper,
  OffersContainer1,
  FaarmojiHead,
  FaarmojiSticker,
  Emoji,
  FaarmojiContact,
  FaarmojiContact2,
  Form,
  OffersContainer,
  TextHead,
  Text,
  Label,
  Input,
  ImgCon,
} from "../components/styled-comp/faarmoji.js";
import { LaptopChromebookOutlined } from "@mui/icons-material";

const Faarmoji = () => {
  const language = useSelector((state) => state.bhasa);
  return (
    <Container>
      <Wrapper>
        <OffersContainer1>
          <FaarmojiHead>
            {language.lang === "en" ? (
              <>
                <TextHead>
                  Faarmoji<sup>TM</sup>
                </TextHead>
              </>
            ) : (
              <>
                <TextHead>
                  फ़ार्मोजी <sup>TM</sup>
                </TextHead>
              </>
            )}
            {language.lang === "en" ? (
              <Text>Faarmoji stickers to use in Social Media</Text>
            ) : (
              <Text>सोशल मीडिया में उपयोग के लिए फ़ार्मोजी स्टिकर</Text>
            )}
          </FaarmojiHead>
          <FaarmojiSticker>
            <Emoji src={EmojiPic} />
            <Emoji src={EmojiPic} />
            <Emoji src={EmojiPic} />
            <Emoji src={EmojiPic} />
            <Emoji src={EmojiPic} />
            <Emoji src={EmojiPic} />
            <Emoji src={EmojiPic} />
            <Emoji src={EmojiPic} />
            <Emoji src={EmojiPic} />
            {/* <Emoji src={EmojiPic} /> */}
          </FaarmojiSticker>
          <FaarmojiContact>
            {language.lang === "en" ? (
              <>
                {" "}
                <Text style={{ textAlign: "center", marginRight: "40px" }}>
                  To Download Our App,Enter Your Phone Number
                </Text>
              </>
            ) : (
              <>
                <Text style={{ textAlign: "center", marginRight: "40px" }}>
                  ऐप डाउनलोड करने के लिए, अपना फोन नंबर दर्ज करें
                </Text>
              </>
            )}

            <FaarmojiContact2>
              <Form>
                <Input type="text" placeholder="+91" />

                <Label htmlFor="text">
                  {" "}
                  {language.lang == "en" ? "Send Link" : "लिंक भेजें "}
                </Label>
              </Form>
              <ImgCon src={GooglePlay} height="39px" />
              <ImgCon src={Iphone} height="39px" />
            </FaarmojiContact2>
          </FaarmojiContact>
        </OffersContainer1>

        <OffersContainer></OffersContainer>
      </Wrapper>
    </Container>
  );
};

export default Faarmoji;
