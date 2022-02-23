import React from "react";
import { InputGroup, FormControl, Image } from "react-bootstrap";
import { useWindowSize } from "@hooks";
import SearchIcon from "@assets/icons/search.svg";
import "./searchbar.style.scss";

const SearchBar = (): JSX.Element => {
  const { width } = useWindowSize();

  return (
    <>
      <InputGroup className="mb-3 searchbar-wrapper shadow-sm bg-body border-0">
        <FormControl placeholder="Search hear" aria-label="Busca de produtos" />
        <InputGroup.Text><Image src={SearchIcon} alt="icone de busca" /></InputGroup.Text>
      </InputGroup>
    </>
  );
};

export { SearchBar };
