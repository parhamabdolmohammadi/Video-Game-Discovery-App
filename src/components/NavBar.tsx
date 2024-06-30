import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => (
  <HStack padding="10px">
    {
      //in order to layout our items horizontally we use hstack
    }
    <Link to={"/"}>
      {" "}
      <Image src={logo} boxSize="60px" objectFit={"cover"}></Image>
    </Link>

    <SearchInput></SearchInput>
    <ColorModeSwitch></ColorModeSwitch>
  </HStack>
);

export default NavBar;
