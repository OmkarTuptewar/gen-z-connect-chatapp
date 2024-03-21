import React from "react";
import "../App.css";

import { Box, Container, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Login from "../components/authentication/Login"
import Signup from "../components/authentication/Signup"
import TypingText from "../forntpage/TypingText";



const HomePage = () => {
  return (
    <>
  <Container  margin="auto" marginRight="145">
      <TypingText/>
  </Container>
    <Container maxW="xl" margin="auto" marginRight="145" >
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderwidth="1px"
      >
        <Text
          fontSize="4xl"
          fontFamily="work sans"
          color="black"
          textAlign="center"
        >
          Gen-z-Connect
        </Text>
      </Box>

      <Box bg="white" w="100%" p={4} borderRadius="lg" borderwidth="1px">
      <Tabs variant='soft-rounded' >
  <TabList mb="1em">
    <Tab width="50%">Login</Tab>
    <Tab width="50%">Sign Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
    <Login />
    </TabPanel>
    <TabPanel>
       <Signup/>
    </TabPanel>
  </TabPanels>
</Tabs>
      </Box>
    </Container>
    </>
  );
};

export default HomePage;
