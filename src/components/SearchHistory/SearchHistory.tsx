import React, { useCallback } from "react";
import { SearchHistoryProps } from "./SearchHistory.types";
import { Container, Header, HeaderContainer, MessageContainer } from "./SearchHistory.styled";
import { SearchHistoryItem } from "../SearchHistoryItem";
import { Weather } from "../../constants/types";

const SearchHistory: React.FC<SearchHistoryProps> = ({
  history = [],
  onRemoveItem,
  onResearchItem,
}) => {
  const onRemoveHandler = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (onRemoveItem) {
        onRemoveItem(e.currentTarget.value);
      }
    },
    [onRemoveItem]
  );

  const onResearchHandler = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (onResearchItem) {
        onResearchItem(e.currentTarget.value);
      }
    },
    [onResearchItem]
  );

  const renderHistoryList = useCallback(() => {
    if (!history.length) {
      return <MessageContainer>No Record</MessageContainer>;
    }

    return history.map((item: Weather, key: number) => (
      <SearchHistoryItem
        key={key}
        label={`${key + 1}. ${item.name}, ${item.country}`}
        id={item.id}
        details={item.hours}
        onRemoveHandler={onRemoveHandler}
        onSearchHandler={onResearchHandler}
      />
    ));
  }, [history, onRemoveHandler, onResearchHandler]);

  return (
    <Container>
      <HeaderContainer>
        <Header>Search History</Header>
      </HeaderContainer>
      {renderHistoryList()}
    </Container>
  );
};

export default SearchHistory;
