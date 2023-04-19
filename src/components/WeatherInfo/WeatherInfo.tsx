import React from "react";
import { WeatherInfoProps } from "./WeatherInfo.types";
import {
  Container,
  ErrorContainer,
  Title,
  Weather,
  Wrapper,
} from "./WeatherInfo.styled";
import { capitalizeString } from "../../utils/text";

const WeatherInfo: React.FC<WeatherInfoProps> = ({ weather }) => {
  if (!weather) {
    return <></>;
  }

  if (!Object.keys(weather).length) {
    return <ErrorContainer>Not found</ErrorContainer>;
  }

  const { name, country, main, hours, id, ...otherInfo } = weather;

  return (
    <Container>
      <Title>
        {name}, {country}
      </Title>
      <Weather>{main}</Weather>
      {Object.keys(otherInfo).map((key: string) => (
        <Wrapper key={key}>
          <Title>{capitalizeString(key)}:</Title>
          {otherInfo?.[key as keyof typeof otherInfo]}
        </Wrapper>
      ))}
    </Container>
  );
};

export default WeatherInfo;
