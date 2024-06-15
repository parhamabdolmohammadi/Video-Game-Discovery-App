import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => (
  <HStack>
    {
      //in order to layout our items horizontally we use hstack
    }
    <Image src={logo} boxSize="60px"></Image>
    <Text>NavBar</Text>
  </HStack>
);

export default NavBar;
