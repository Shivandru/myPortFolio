import React from "react";
import { Container, Center, Heading, Text } from "@chakra-ui/react";
const AboutMe = () => {
  return (
    <Container
      maxW="6xl"
      h="auto"
      mt="50px"
      pb="50px"
      borderBottom="1px solid #CBD5E0"
    >
      <Heading fontFamily="poppins" textAlign="center" mb="20px">
        About Me
      </Heading>
      <Center w="100%" h="auto">
        <Text fontFamily="poppins" fontSize="25px" textAlign="center">
          I,{" "}
          <Text as="span" color="#F56565" fontSize="30px" fontWeight="500">
            Shivandru
          </Text>
          , am a passionate MERN (MongoDB, Express.js, React.js, Node.js)
          full-stack web developer with a flair for crafting elegant and
          efficient solutions. My journey into the world of coding began with a
          curiosity-driven exploration of various programming languages and
          technologies, eventually leading me to specialize in the dynamic MERN
          stack. With a keen eye for detail and a relentless drive for
          continuous improvement, I thrive on turning complex ideas into sleek,
          user-friendly applications. Whether I'm architecting the back-end
          logic or polishing the front-end design, I approach every project with
          creativity, dedication, and a commitment to excellence. Let's
          collaborate and bring your digital vision to life!
        </Text>
      </Center>
    </Container>
  );
};

export default AboutMe;
