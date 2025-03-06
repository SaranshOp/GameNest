import { HStack, Image, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logoLight from "../assets/logo.webp";
import logoDark from "../assets/logo-dark.webp"; // Add your dark mode logo here
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  const { colorMode } = useColorMode();
  const logo = colorMode === "dark" ? logoDark : logoLight;

  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
