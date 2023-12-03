import React from "react";
import {
  Flex,
  Box,
  Image,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useBreakpointValue,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  VStack,
  Link,
} from "@chakra-ui/react";
import "./Navbar.css";
import MyResume from "../assets/Shivandru-Resume.pdf";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useRef } from "react";
import Home from "../sections/Home";
import Experience from "../sections/Experience";
import Contact from "../sections/Contact";
import MySkills from "../sections/MySkills";
import { MyProjects } from "../sections/MyProjects";
import AboutMe from "../sections/AboutMe";
const Navbar = () => {
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
    lg: false,
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
    });
    onClose();
  };
  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/1ljwphLyyRvxU1dEUSzJthfaEoLrV3eN7/view",
      "_blank"
    );
  };
  return (
    <>
      <Flex
        w="100%"
        justify={{
          base: "space-between",
          md: "space-around",
          lg: "space-around",
        }}
        h="10vh"
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        align="center"
        pr="5vw"
        pl="5"
        pos="fixed"
        top="0px"
        borderRadius="8px"
        className="slide-in-top"
        bg="#FFFFFF"
        zIndex="2"
      >
        <Box>
          {isMobile && (
            <Image
              src="https://th.bing.com/th/id/OIP.hS-LX-sUngBVgtKfY3LqfQAAAA?w=174&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="myLogo"
              w={{ base: "7vw", md: "5vw", lg: "4vw" }}
              h={{ base: "7vh", md: "8vh", lg: "8vh" }}
              ml="3vw"
            />
          )}
        </Box>
        {isMobile ? (
          <>
            <Button
              ref={btnRef}
              color="#FFFFFF"
              bg="#E53E3E"
              onClick={onOpen}
              _hover={{
                background: "#FFFFFF",
                color: "#E53E3E",
              }}
              mr="5vw"
            >
              <HamburgerIcon />
            </Button>
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader textAlign="center">Welcome</DrawerHeader>

                <DrawerBody>
                  <VStack spacing={14}>
                    <Button
                      mt="10"
                      w="80%"
                      onClick={() => scrollToSection(homeRef)}
                    >
                      Home
                    </Button>
                    <Button w="80%" onClick={() => scrollToSection(aboutRef)}>
                      About ME
                    </Button>
                    <Button w="80%" onClick={() => scrollToSection(skillsRef)}>
                      My Skills
                    </Button>
                    <Button
                      w="80%"
                      onClick={() => scrollToSection(projectsRef)}
                    >
                      My Projects
                    </Button>
                    <Button
                      w="80%"
                      onClick={() => scrollToSection(experienceRef)}
                    >
                      Experience
                    </Button>
                    <Button w="80%" onClick={() => scrollToSection(contactRef)}>
                      Contact
                    </Button>
                    <Button w="80%">
                      <Link
                        href={MyResume}
                        download={MyResume}
                        onClick={openResume}
                      >
                        Resume
                      </Link>
                    </Button>
                  </VStack>
                </DrawerBody>

                <DrawerFooter></DrawerFooter>
              </DrawerContent>
            </Drawer>
          </>
        ) : (
          <Breadcrumb spacing="4vw" separator=" ">
            <BreadcrumbItem
              fontWeight="700"
              color="#E53E3E"
              _hover={{
                background: "#FFFFFF",
                color: "black",
              }}
              fontSize="20px"
            >
              <BreadcrumbLink
                href="#home"
                onClick={() => scrollToSection(homeRef)}
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem
              fontWeight="700"
              color="#E53E3E"
              _hover={{
                background: "#FFFFFF",
                color: "black",
              }}
              fontSize="20px"
            >
              <BreadcrumbLink
                href="#aboutMe"
                onClick={() => scrollToSection(aboutRef)}
              >
                About Me
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem
              fontWeight="700"
              color="#E53E3E"
              _hover={{
                background: "#FFFFFF",
                color: "black",
              }}
              fontSize="20px"
            >
              <BreadcrumbLink
                href="#mySkills"
                onClick={() => scrollToSection(skillsRef)}
              >
                My Skills
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem
              fontWeight="700"
              color="#E53E3E"
              _hover={{
                background: "#FFFFFF",
                color: "black",
              }}
              fontSize="20px"
            >
              <BreadcrumbLink
                href="#experience"
                onClick={() => scrollToSection(experienceRef)}
              >
                Experience
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem
              fontWeight="700"
              color="#E53E3E"
              _hover={{
                background: "#FFFFFF",
                color: "black",
              }}
              fontSize="20px"
            >
              <BreadcrumbLink
                href="#myProjects"
                onClick={() => scrollToSection(projectsRef)}
              >
                My Projects
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem
              fontWeight="700"
              color="#E53E3E"
              _hover={{
                background: "#FFFFFF",
                color: "black",
              }}
              fontSize="20px"
            >
              <BreadcrumbLink
                href="#contact"
                onClick={() => scrollToSection(contactRef)}
              >
                Contact
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem
              fontWeight="700"
              color="#E53E3E"
              _hover={{
                background: "#FFFFFF",
                color: "black",
              }}
              className="vibrate-1"
              fontSize="20px"
            >
              <BreadcrumbLink
                href={MyResume}
                download={MyResume}
                onClick={openResume}
              >
                Resume
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        )}
      </Flex>
      <div>
        <div ref={homeRef}>
          <Home />
        </div>
        <div ref={aboutRef}>
          <AboutMe />
        </div>
        <div ref={skillsRef}>
          <MySkills />
        </div>
        <div ref={projectsRef}>
          <MyProjects />
        </div>
        <div ref={experienceRef}>
          <Experience />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Navbar;
