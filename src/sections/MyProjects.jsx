import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  Image,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Container,
  Flex,
  ButtonGroup,
  Divider,
  Button,
  Link,
} from "@chakra-ui/react";
import projectPic1 from "../assets/projectPic1.png";
import projectPic2 from "../assets/projectPic2.png";
import projectPic3 from "../assets/projectPic3.png";
import projectPic4 from "../assets/projectPic4.png";
import projectPic5 from "../assets/projectPic5.png";
import projectPic6 from "../assets/projectPic6.png";
import projectPic7 from "../assets/projectPic7.png";
import projectPic8 from "../assets/projectPic8.png";
import projectPic9 from "../assets/projectPic9.png";
import projectPic10 from "../assets/projectPic10.png";
import firstProjectPic from "../assets/firstProjectPic.png";
export const MyProjects = (props) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Container
      h="auto"
      maxW="6xl"
      mb="40px"
      borderBottom="1px solid #CBD5E0"
      pb="40px"
    >
      <Heading fontFamily="poppins" textAlign="center" mt="50px" mb="50px">
        My Projects
      </Heading>
      <Flex
        direction={{ base: "column", md: "row", lg: "row" }}
        align={{ base: "center", md: "center", lg: "center" }}
        justify={{ base: "center", md: "center", lg: "space-around" }}
      >
        <Card maxW="xs" size={"lg"}>
          <CardBody h="100px">
            <Slider style={{ width: "100%" }} {...settings}>
              <div>
                <Image src={projectPic1} width="100px" m="auto" />
              </div>
              <div>
                <Image src={projectPic2} width="100px" m="auto" />
              </div>
              <div>
                <Image src={projectPic3} width="100px" m="auto" />
              </div>
              <div>
                <Image src={projectPic7} width="100px" m="auto" />
              </div>
              <div>
                <Image src={projectPic5} width="100px" m="auto" />
              </div>
              <div>
                <Image src={projectPic8} width="100px" m="auto" />
              </div>
              <div>
                <Image src={projectPic10} width="100px" m="auto" />
              </div>
            </Slider>
            <Stack mt="6" spacing="3">
              <Heading size="md" textAlign="center">
                GymWolf(Clone)
              </Heading>
              <Text textAlign="center">
                Gymwolf is a workout tracking tool that helps you keep track of
                your workouts and progress. One can register, Login and Navigate
                through different pages.
              </Text>
              <Text color="#E53E3E" fontSize="xl" textAlign="center">
                Tech-Stack:{" "}
                <Text as="span" fontWeight="bold">
                  HTML | CSS | Javascript | React | Chakra UI
                </Text>
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <Stack
              direction="row"
              spacing={{ base: "5vw", md: "5vw", lg: "2vw" }}
            >
              <Button variant="solid" bg="#E53E3E">
                <Link
                  href="https://project-web-page.vercel.app/"
                  target="_blank"
                >
                  WebSite
                </Link>
              </Button>
              <Button variant="solid" bg="#E53E3E">
                <Link
                  href="https://github.com/Shivandru/projectWebPage"
                  target="_blank"
                >
                  Source Code
                </Link>
              </Button>
            </Stack>
          </CardFooter>
        </Card>
        <Card maxW="xs" mt={{ base: "30px", md: "30px", lg: "0px" }}>
          <CardBody>
            <Image
              src={firstProjectPic}
              alt="firstProjectPic"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md" textAlign="center">
                SuperHero Resume
              </Heading>
              <Text textAlign="center">
                I meticulously crafted the responsive SuperHero Resume,
                harnessing my mastery of HTML and CSS, acquired through an
                intensive 6-7 hours of dedicated learning.
              </Text>
              <Text color="#E53E3E" fontSize="xl" textAlign="center">
                Tech-Stack:{" "}
                <Text as="span" fontWeight="bold">
                  HTML | CSS
                </Text>
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <Stack
              direction="row"
              spacing={{ base: "5vw", md: "5vw", lg: "2vw" }}
            >
              <Button variant="solid" bg="#E53E3E">
                <Link
                  href="https://6569a3f923ead5782c89f046--moonlit-liger-145ca6.netlify.app/"
                  target="_blank"
                >
                  WebSite
                </Link>
              </Button>
              <Button variant="solid" bg="#E53E3E">
                <Link
                  href="https://github.com/Shivandru/firstProject/tree/main/project.html"
                  target="_blank"
                >
                  Source Code
                </Link>
              </Button>
            </Stack>
          </CardFooter>
        </Card>
      </Flex>
    </Container>
  );
};
