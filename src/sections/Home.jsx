import React from "react";
import { Box, Flex, Image, Heading, Text, Center } from "@chakra-ui/react";
import myPic1 from "../assets/myPic.jpeg";
import "./Home.css";
import Type from "../components/Type";
const Home = () => {
  const typingStrings = [
    "front-end React web developer",
    "pursuing full-stack web development",
    "problem Solver",
    "Coding the future",
    "Transforming visions into code",
    "Bringing websites to life",
    "bridges between design and functionality",
  ];
  return (
    <Box w="100%" h="70vh" borderBottom="1px solid #CBD5E0">
      <Flex
        w="100%"
        h={{ base: "auto", md: "auto", lg: "auto" }}
        justify={{ base: "center", md: "space-around", lg: "space-around" }}
        direction={{ base: "column", md: "row", lg: "row" }}
        align={{ base: "center", md: "center", lg: "center" }}
        mt="15vh"
      >
        <Center
          w={{ base: "70%", md: "70%", lg: "50%" }}
          h={{ base: "50%", md: "50%", lg: "100%" }}
        >
          <Image
            src={myPic1}
            w={{ base: "60%", md: "60%", lg: "50%" }}
            h={{ base: "50%", md: "50%", lg: "70%" }}
            objectFit="cover"
            borderRadius="50%"
            border="3px solid black"
          />
        </Center>
        <Box w={{ base: "70%", md: "70%", lg: "50%" }} h="100%" align="center">
          <Heading
            fontFamily="poppins"
            fontWeight="500"
            fontSize={{ base: "2rem", md: "2rem", lg: "3rem" }}
            mr="2vw"
          >
            Hi,
          </Heading>
          <Image
            src="https://media1.tenor.com/images/f88ee476d2f653b9cbc5a7b95acbd265/tenor.gif?itemid=11366012"
            w="50px"
            h="50px"
          />
          <Text ml="1vw">
            I am
            <Text
              as="span"
              color="#F56565"
              fontWeight="500"
              fontSize={{ base: "2rem", md: "2rem", lg: "3rem" }}
            >
              {" "}
              Shivandru
            </Text>
          </Text>
        </Box>
        <Box
          h="auto"
          w="450px"
          textAlign={{ base: "center", md: "center", lg: "left" }}
          position={{ base: "relative", md: "relative", lg: "relative" }}
          right={{ lg: "100px" }}
          bottom={{ lg: "-70px" }}
        >
          <Type strings={typingStrings} />
        </Box>
      </Flex>
    </Box>
  );
};
export default Home;
