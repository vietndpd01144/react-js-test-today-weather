import React, { useCallback, useState } from "react";
import { SearchFormProps } from "./SearchForm.types";
import { ButtonContainer, Container, Wrapper } from "./SearchForm.styled";
import { TextField } from "../TextField";
import { Button } from "../Button";
import { get } from "../../utils/sessionStorage";

const SearchForm: React.FC<SearchFormProps> = ({
  onSearchHandler: onSearchProps,
}) => {
  const [city, setCity] = useState<string>(get("city") || "");
  const [country, setCountry] = useState<string>(get("country") || "");

  const onCityChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCity(e.target.value);
    },
    []
  );

  const onCountryChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCountry(e.target.value);
    },
    []
  );

  const onClearHandler = useCallback(() => {
    setCity("");
    setCountry("");
  }, []);

  const onSearchHandler = useCallback(async () => {
    if (onSearchProps) {
      onSearchProps(city, country);
    }
  }, [city, country]);

  return (
    <Container>
      <Wrapper>
        <TextField
          label="City"
          value={city}
          name="city"
          onChangeHandler={onCityChangeHandler}
          required
        />
        <TextField
          label="Country"
          name="country"
          value={country}
          onChangeHandler={onCountryChangeHandler}
        />
        <ButtonContainer>
          <Button onClickHandler={onSearchHandler}>Search</Button>
          <Button onClickHandler={onClearHandler}>Clear</Button>
        </ButtonContainer>
      </Wrapper>
    </Container>
  );
};

export default SearchForm;
