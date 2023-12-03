import React from "react";
import { Container, Center, Heading, Text } from "@chakra-ui/react";
const AboutMe = () => {
  return (
    <Container maxW="6xl" h="70vh" mt="50px" borderBottom="1px solid #CBD5E0">
      <Heading fontFamily="poppins" textAlign="center" pt="50px">
        About Me
      </Heading>
      <Center w="100%" h="300px">
        <marquee width="80%" direction="up" height="200px" scrollamount="3">
          <Text fontFamily="poppins" fontSize="25px" textAlign="center">
            I,{" "}
            <Text as="span" color="#F56565" fontSize="30px" fontWeight="500">
              Shivandru
            </Text>
            , am a dedicated and creative web developer, I thrive on turning
            ideas into immersive and user-friendly digital experiences. With a
            solid foundation in front-end web development and a current pursuit
            of full-stack expertise, I am driven by a passion for building
            innovative and scalable solutions.Currently, I am actively pursuing
            full-stack expertise to broaden my skill set and enhance my ability
            to deliver end-to-end solutions. As a frontend React developer, I
            bring a wealth of experience in crafting seamless user interfaces,
            optimizing performance, and ensuring a delightful user experience.
          </Text>
        </marquee>
      </Center>
    </Container>
  );
};

export default AboutMe;
