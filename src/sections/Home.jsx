import React from "react";
import { Box, Flex, Image, Heading, Text, Center } from "@chakra-ui/react";
import myPic1 from "../assets/myPic.jpeg";
import myPicNew from "../assets/myPicNew.png";
import "./Home.css";
import Type from "../components/Type";
import picBg from "../assets/picBg.png";
import myPicNewremovebg from "../assets/myPicNewremovebg.png";
import myPicNewBG from "../assets/myPicNewBG.png";
const Home = () => {
  const typingStrings = [
    "MERN-full-stack web development",
    "front-end React web developer",
    "problem Solver",
    "Coding the future",
    "Transforming visions into code",
    "Bringing websites to life",
    "bridges between design and functionality",
  ];
  return (
    <Box w="100%" h="auto" borderBottom="1px solid #CBD5E0" pb="200px">
      <Flex
        w="100%"
        h={{ base: "auto", md: "auto", lg: "auto" }}
        justify={{ base: "center", md: "center", lg: "space-around" }}
        direction={{ base: "column", md: "column", lg: "row" }}
        align={{ base: "center", md: "center", lg: "center" }}
        mt="15vh"
        wrap="wrap"
      >
        <Center
          w={{ base: "70%", md: "70%", lg: "50%" }}
          h={{ base: "50%", md: "50%", lg: "100%" }}
        >
          <Image
            src={myPicNewBG}
            w={{ base: "60%", md: "60%", lg: "30%", xl: "40%" }}
            h={{ base: "50%", md: "50%", lg: "50%", xl: "60%" }}
            // objectFit="cover"
            // position={"absolute"}
            // boxShadow="0 0 10px 0 rgba(0, 0, 0, 0.2)"
            // borderRadius="50%"
            borderRadius={"30% 70% 70% 30% / 30% 30% 70% 70% "}
            // border="3px solid black"
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
          <Type strings={typingStrings} />
        </Box>
      </Flex>
    </Box>
  );
};
export default Home;
