import { chakra, Image } from "@chakra-ui/react";
import NextLink from "next/link";

const Logo = () => {
  return (
    <NextLink href="/" passHref>
      <chakra.a display="block" w={{ base: "150px", md: "200px" }} height="auto">
        <Image src="https://i.postimg.cc/4xH5nXTn/logofideo.png" alt="Logo" />
      </chakra.a>
    </NextLink>
  );
};

export default Logo;
