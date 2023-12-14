import React from "react";
import { Container, Center, Heading, Text } from "@chakra-ui/react";
const AboutMe = () => {
  return (
    <Container maxW="6xl" h="auto" mt="50px" pb="50px" borderBottom="1px solid #CBD5E0">
      <Heading fontFamily="poppins" textAlign="center" mb="20px">
        About Me
      </Heading>
      <Center w="100%" h="auto">
          <Text fontFamily="poppins" fontSize="25px" textAlign="center">
            I,{" "}
            <Text as="span" color="#F56565" fontSize="30px" fontWeight="500">
              Shivandru
            </Text>
            , am a dedicated and creative web developer, I thrive on turning
            ideas into immersive and user-friendly digital experiences. With a
            solid foundation in front-end web development and a current pursuit
            of full-stack expertise, I am driven by a passion for building
            innovative and scalable solutions.
          </Text>
      </Center>
    </Container>
  );
};

export default AboutMe;
