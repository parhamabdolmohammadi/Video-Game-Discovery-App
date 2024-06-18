import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => (
  <HStack padding="10px">
    {
      //in order to layout our items horizontally we use hstack
    }
    <Image src={logo} boxSize="60px"></Image>
    <SearchInput onSearch={onSearch}></SearchInput>
    <ColorModeSwitch></ColorModeSwitch>
  </HStack>
);

export default NavBar;
