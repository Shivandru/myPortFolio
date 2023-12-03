import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
const Experience = () => {
  return (
    <>
      <Heading textAlign="center" fontFamily="poppins" mb="30px">
        Experience
      </Heading>
      <Accordion
        allowToggle
        w="70%"
        m="auto"
        mb="50px"
        border="2px solid #C53030"
      >
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="center">
                Job Title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} textAlign="center">
            <Text>
              Company Name:{" "}
              <Text as="span" fontWeight="700">
                TTEC
              </Text>
            </Text>
            <Text>
              Location:{" "}
              <Text as="span" fontWeight="700">
                Remote
              </Text>
            </Text>
            <Text>
              Start Date:{" "}
              <Text as="span" fontWeight="700">
                24/01/2022
              </Text>
            </Text>
            <Text>
              End Date:{" "}
              <Text as="span" fontWeight="700">
                Till Date
              </Text>
            </Text>
            <Text>
              Job Role:{" "}
              <Text as="span" fontWeight="700">
                Customer Care Executive
              </Text>
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Experience;
