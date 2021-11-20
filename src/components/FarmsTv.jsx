import React from "react";
import Videos from "../assets/video/video(1).mp4";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Wrapper,
  FarmsContainer1,
  FarmsContainer2,
  Video,
  TextContainer,
  Text,
  RightText,
} from "../components/styled-comp/faarmTv";

const FarmsTv = () => {
  const language = useSelector((state) => state.bhasa);
  return (
    <Container>
      {language.lang === "en" ? (
        <Text>Faarms Tv</Text>
      ) : (
        <Text>फार्म्स टीवी</Text>
      )}

      <Wrapper>
        <FarmsContainer1>
          <Video
            width="100%"
            height="92%"
            autoplay="autoplay"
            loop
            preload="metadata"
            controls
          >
            <source src={Videos} type="video/mp4" />
          </Video>
        </FarmsContainer1>
        <FarmsContainer2>
          <TextContainer>
            {language.lang == "en" ? (
              <RightText>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
                debitis perspiciatis aliquid, libero ipsa corporis, optio
                sapiente quam, voluptatibus provident nam aut quisquam! Illum
                ab, esse culpa, vel dicta, qui eligendi quis tempora delectus
                distinctio ducimus animi deleniti repellendus mollitia laborum
                fugit? Eos illo dolor voluptate non voluptatibus facilis
                voluptatum. Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Nobis debitis perspiciatis aliquid, libero ipsa corporis,
                optio sapiente quam, voluptatibus provident nam aut quisquam!
                Illum ab, esse culpa, vel dicta, qui eligendi quis tempora
                delectus distinctio ducimus animi deleniti repellendus mollitia
                laborum fugit? Eos illo dolor voluptate non voluptatibus facilis
                voluptatum. Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Nobis debitis perspiciatis aliquid, libero ipsa corporis,
                optio sapiente quam, voluptatibus provident nam aut quisquam!
                Illum ab, esse culpa, voluptatum.
              </RightText>
            ) : (
              <RightText>
                लोरेम, इप्सम डोलर सिट एमेट कंसेक्टेटूर एडिपिसिसिंग एलीट। नोबिस
                डेबिटिस पर्सपिसियाटिस एलिक्विड, लिबरो इप्सा कॉर्पोरिस, ऑप्टियो
                सेपिएंट क्वम, वोलुप्टाटिबस प्रोविडेंट नाम ऑट क्विस्क्वाम! इल्लम
                एब, एसे कल्पा, वेल डिक्टा, क्यूई एलिगेंडी क्विस टेम्पोरा
                डेलेक्टस डिसिफिकियो ड्यूसीमस एनिमी डेलेनिटी रेपेलेंडस मोलिटिया
                लेबरम फुगिट?लोरेम, इप्सम डोलर सिट एमेट कंसेक्टेटूर एडिपिसिसिंग
                एलीट। नोबिस डेबिटिस पर्सपिसियाटिस एलिक्विड, लिबरो इप्सा
                कॉर्पोरिस, ऑप्टियो सेपिएंट क्वम, वोलुप्टाटिबस प्रोविडेंट नाम ऑट
                क्विस्क्वाम! इल्म एब, एसे कल्पा, वेल डिक्टा, क्यूई एलिगेंडी
                क्विस टेम्पोरा डेलेक्टस डिसिफिकियो ड्यूसीमस एनिमी डेलेनिटी
                रेपेलेंडस मोलिटिया लेबरम फुगिट?voluptatum। लोरेम, इप्सम डोलर सिट
                एमेट कंसेक्टेटूर एडिपिसिसिंग एलीट। नोबिस डेबिटिस पर्सपिसियाटिस
                एलिक्विड, लिबरो इप्सा कॉर्पोरिस, ऑप्टियो सेपिएंट क्वम,
                वोलुप्टाटिबस प्रोविडेंट नाम ऑट क्विस्क्वाम! इलुम अब, एसे कल्पा,
                वोलुप्टैटम।
              </RightText>
            )}
          </TextContainer>
        </FarmsContainer2>
      </Wrapper>
    </Container>
  );
};

export default FarmsTv;
