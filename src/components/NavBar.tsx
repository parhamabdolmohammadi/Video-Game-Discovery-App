import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => (
  <HStack justifyContent="space-between" padding="10px">
    {
      //in order to layout our items horizontally we use hstack
    }
    <Image src={logo} boxSize="60px"></Image>
    <ColorModeSwitch></ColorModeSwitch>
  </HStack>
);

export default NavBar;
