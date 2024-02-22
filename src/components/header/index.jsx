import { Box } from "@chakra-ui/react";

import { MAX_WIDTH } from "config";
import Logo from "../UI/logo";
import Navbar from "./navbar";

const Header = () => {
  return (
    <Box as="header" boxShadow="md">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        h="4rem"
        px={[4, 6, 10, 14, 20]}
        maxW={MAX_WIDTH}
        mx="auto"
      >
        {/* Adjust the size of the logo and push it to the left */}
        <Box ml="-300px" >
          <Logo />
        </Box>
        <Navbar />
      </Box>
    </Box>
  );
};

export default Header;
