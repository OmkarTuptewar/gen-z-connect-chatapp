import React, { useEffect } from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Login from "../components/authentication/Login";
import Signup from "../components/authentication/Signup";
import TypingText from "../forntpage/TypingText";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "../stylee.css";

const HomePage = () => {
  const history = useHistory();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) history.push("/chats");
  }, [history]);

  return (
    <div className="HomePage" style={{ backgroundColor: "black", minHeight: "100vh", width: "100%" }}>
      <Container
        margin="auto"
        marginLeft={{ base: 4, md: 8 }}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          flex: "1", // Grow to fill available space
        }}
      >
        <TypingText />
      </Container>
      <Container
        maxW="xl"
        margin="auto"
        // marginRight={{ base: 4, md: 8 }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <Box
          d="flex"
          justifyContent="center"
          p={3}
          bg={"white"}
          w="100%"
          m="40px 0 15px 0"
          borderRadius="lg"
          borderWidth="1px"
        >
          <Text
            fontSize="5xl"
           
            fontFamily="Jersey 10 Charted"
            fontWeight="400"
            color="black"
            fontStyle="normal"
            textAlign="center"
          >
           GEN-Z-CONNECT 
          </Text>
        </Box>

        <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
          <Tabs variant="soft-rounded">
            <TabList mb="1em">
              <Tab width="50%">Login</Tab>
              <Tab width="50%">Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <Signup />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>

      <style>
        {`
        @media (max-width: 768px) {
          .HomePage {
            display: block; /* Remove display flex for smaller screens */
          }

          .HomePage > div {
            margin-left: 0;
            margin-bottom: 20px;
          }
        }
      `}
      </style>
    </div>
  );
};

export default HomePage;
