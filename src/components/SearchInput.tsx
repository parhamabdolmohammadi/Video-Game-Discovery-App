import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  // const {setSearchText} = useGameQueryStore(); with this, this component will be dependent on our game query store, anytime any value in this store changes this component will re render
  //a better approach is to use a selector
  const setSearchText = useGameQueryStore((store) => store.setSearchText);
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
        navigate("/");
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch></BsSearch>} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant={"filled"}
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
