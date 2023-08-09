import React from "react";
import { Box } from "@chakra-ui/react";
import GenericGrid from "../components/GenericGrid";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <Box bgRepeat="no-repeat" bgAttachment="fixed">
      <Navbar />
      <GenericGrid />
    </Box>
  );
};

export default HomePage;
