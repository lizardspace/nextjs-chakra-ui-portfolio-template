import { useState } from "react";
import { Box, chakra, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

import HamburgerMenu from "../UI/hamburgerMenu";
import ColorModeToggle from "../UI/colorModeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const bg = useColorModeValue("gray.200", "gray.300");
  const color = useColorModeValue("black", "white");

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuItems = [
    { title: "Accueil", href: "/" },
    { title: "Jeunes 12-17 Ans", href: "/jeunes-12-17-ans" },
    { title: "+18 Ans & Au Pair", href: "/plus-18-ans-au-pair" },
    { title: "Familles", href: "/familles" },
    { title: "Adultes & Pros", href: "/adultes-pros" },
    { title: "FAQ", href: "/faq" },
    { title: "Blog", href: "/blog" },
  ];

  return (
    <Box
      as="nav"
      display="flex"
      flexDir={{ base: "row-reverse", lg: "row" }}
      alignItems="center"
      fontWeight="500"
    >
      <HamburgerMenu toggled={isOpen} toggle={setIsOpen} />
      <chakra.ul
        bg={{ base: bg, lg: "transparent" }}
        color={{ base: "black", lg: color }}
        display={{
          base: isOpen ? "block" : "none",
          lg: "flex",
        }}
        position={{ base: "absolute", lg: "static" }}
        top="5rem"
        left="5%"
        right="5%"
        rounded={{ base: "lg", lg: "none" }}
        py={{ base: "2", lg: "0" }}
        px={{ base: "4", lg: "0" }}
        alignItems={{ lg: "center" }}
        boxShadow={{ base: "xl", lg: "none" }}
        zIndex="2"
      >
        {menuItems.map((item, index) => (
          <chakra.li
            key={index}
            listStyleType="none"
            px={{ lg: "8" }}
            py={{ base: "3", lg: "0" }}
            fontSize={{ base: "sm", lg: "md" }} // Adjust font size here
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
          >
            <NextLink href={item.href}>
              <chakra.a
                onClick={closeMenu}
                _hover={{
                  fontWeight: "bold",
                  color: "pink.500",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                {item.title}
              </chakra.a>
            </NextLink>
          </chakra.li>
        ))}
      </chakra.ul>

      <ColorModeToggle />
    </Box>
  );
};

export default Navbar;
