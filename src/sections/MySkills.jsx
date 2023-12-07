import React from "react";
import {
  Flex,
  Container,
  Heading,
  SimpleGrid,
  Box,
  Image,
} from "@chakra-ui/react";
import "./MySkills.css";
import GitHubCalendar from "react-github-calendar";
const MySkills = () => {
  return (
    <Container maxW="6xl" h="auto" borderBottom="1px solid #CBD5E0" pb="30px">
      <Heading fontFamily="poppins" textAlign="center" mt="50px">
        My Skills / Tech Stack
      </Heading>
      <Flex
        pt="30px"
        w="100%"
        h="100%"
        justify={{ base: "center", md: "center", lg: "space-around" }}
        direction={{ base: "column", md: "row", lg: "row" }}
        align={{ base: "center", md: "center", lg: "center" }}
        className="flip-in-ver-right"
      >
        <Box
          w="47%"
          h="100%"
          borderRight={{
            base: "none",
            md: "2px solid black",
            lg: "2px solid black",
          }}
          borderBottom={{
            base: "2px solid black",
            sm: "2px solid black",
            md: "none",
            lg: "none",
          }}
          pb={{ base: "3vh", md: "0px", lg: "0px" }}
          mb={{ base: "3vh", md: "0px", lg: "0px" }}
        >
          <SimpleGrid columns={2} spacing={10}>
            <Box height="80px" m="auto" className="heartbeat">
              <Image
                src="https://cdn-icons-png.flaticon.com/128/5968/5968267.png"
                alt="langLogo"
                w="80px"
              />
            </Box>
            <Box height="80px" m="auto" className="heartbeat">
              <Image
                src="https://cdn-icons-png.flaticon.com/128/5968/5968242.png"
                alt="langLogo"
                w="80px"
              />
            </Box>
            <Box height="80px" m="auto" className="heartbeat">
              <Image
                src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png"
                alt="langLogo"
                w="80px"
              />
            </Box>
            <Box height="80px" m="auto" className="heartbeat">
              <Image
                src="https://cdn-icons-png.flaticon.com/128/3459/3459528.png"
                alt="langLogo"
                w="80px"
              />
            </Box>
            <Box height="80px" m="auto" className="heartbeat">
              <Image
                src="https://th.bing.com/th?id=OIP.o1Sc0dD-kDO8KEiVKpTY0QAAAA&w=279&h=223&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                alt="langLogo"
                w="110px"
              />
            </Box>
            <Box height="80px" m="auto" className="heartbeat">
              <Image
                src="https://th.bing.com/th?id=OIP.eyV7aeQb_jzUNTlEusKAqwHaDt&w=349&h=174&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                alt="langLogo"
                w="170px"
              />
            </Box>
          </SimpleGrid>
        </Box>
        <Box w="47%" h="100%">
          <SimpleGrid columns={2} spacing={10}>
            <Box height="80px" m="auto" className="heartbeat">
              <Image
                src="https://cdn-icons-png.flaticon.com/128/25/25657.png"
                alt="langLogo"
                w="80px"
              />
            </Box>
            <Box height="80px" m="auto" className="heartbeat">
              <Image
                src="https://th.bing.com/th?id=OIP.8nAVT4tTnoeqVj4ScdzPiwHaHY&w=250&h=249&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                alt="langLogo"
                w="80px"
              />
            </Box>
            <Box height="80px" m="auto" className="heartbeat">
              <Image
                src="https://th.bing.com/th?id=OIP.VUR0w655gASLcmiiEQYKyQHaDt&w=349&h=174&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                alt="langLogo"
                w="170px"
              />
            </Box>
            <Box height="80px" m="auto" className="heartbeat">
              <Image
                src="https://th.bing.com/th?id=OIP.ypz_d6GL7n2nXfQnbw_ARAHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                alt="langLogo"
                w="170px"
              />
            </Box>
            <Box height="80px" m="auto" className="heartbeat">
              <Image
                src="https://th.bing.com/th?id=OIP.U5M1SsQTFnFJEMd8lbCSdQHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                alt="langLogo"
                w="170px"
              />
            </Box>
            <Box height="80px" m="auto" className="heartbeat">
              <Image
                src="https://th.bing.com/th?id=OIP.4w4kiDgVxmJpO0_jmzPj1AHaDe&w=350&h=164&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                alt="langLogo"
                w="170px"
              />
            </Box>
          </SimpleGrid>
        </Box>
      </Flex>
      <Heading textAlign="center" mb="40px" fontFamily="poppins" mt="50px">
        My Github Contribution
      </Heading>
      <Box w={{ base: "50%", md: "50%", lg: "80%" }} m="auto">
        <GitHubCalendar
          className="react-activity-calendar"
          color="#E53E3E"
          username="Shivandru"
        />
      </Box>
      <Flex
        w={{ base: "100%", md: "100%", lg: "80%" }}
        justify={{ base: "center", md: "center", lg: "space-between" }}
        m="auto"
      >
        <Box w="300px">
          <img
            id="github-stats-card"
            width="100%"
            src="https://github-readme-stats.vercel.app/api?username=Shivandru&theme=transparent&hide_border=true&show_icons=true&locale=en&title_color=white&text_color=white"
          />
        </Box>
        <Box w="300px">
          <img
            id="github-top-langs"
            width="100%"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=Shivandru&theme=transparent&hide_border=true&show_icons=true&locale=en&layout=compact&title_color=white&text_color=white"
          />
        </Box>
      </Flex>

      <Box w={{ base: "50%", md: "50%", lg: "50%" }} m="auto" bg="#2D3748">
        <img
          id="github-streak-stats"
          width="100%"
          src="https://github-readme-streak-stats.herokuapp.com/?user=Shivandru&theme=transparent&hide_border=true&title_color=white&text_color=white&sideNums=white&sideLabels=white&ring=white&fire=white&currStreakLabel=white&currStreakNum=white"
          alt=""
        />
      </Box>
    </Container>
  );
};

export default MySkills;
