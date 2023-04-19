import React from "react";
import { SearchHistoryItemProps } from "./SearchHistoryItem.types";
import { Container, Wrapper } from "./SearchHistoryItem.styled";
import { Button } from "../Button";
import { Remove, Search } from "../../icons";

const SearchHistoryItem: React.FC<SearchHistoryItemProps> = ({
  label,
  details,
  id,
  onRemoveHandler,
  onSearchHandler,
}) => {
  return (
    <Container>
      <Wrapper>
        <p>{label}</p>
      </Wrapper>
      <Wrapper>
        {details && <p>{details}</p>}
        <Button
          value={id}
          shape="circle"
          size={24}
          onClickHandler={onSearchHandler}
        >
          <Search />
        </Button>
        <Button
          value={id}
          shape="circle"
          size={24}
          onClickHandler={onRemoveHandler}
        >
          <Remove />
        </Button>
      </Wrapper>
    </Container>
  );
};

export default SearchHistoryItem;
