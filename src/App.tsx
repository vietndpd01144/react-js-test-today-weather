import React, { useCallback, useEffect, useState } from "react";
import { Navbar, SearchForm, SearchHistory } from "./components";
import { Container } from "./App.styled";
import { WeatherInfo } from "./components/WeatherInfo";
import { searchWeather } from "./services/openWeather";
import { Weather } from "./constants/types";
import { percentFormat, temperatureFormat } from "./utils/text";
import { get, set } from "./utils/sessionStorage";

function App() {
  const [weather, setWeather] = useState<Partial<Weather>>();
  const [searchHistory, setSearchHistory] = useState<Weather[]>(
    get("searchHistory") ?? []
  );

  const onSearchHandler = useCallback(
    async (city: string, country?: string) => {
      const res = await searchWeather([city, country]);

      if (!res) {
        setWeather({});
        return;
      }

      const {
        description,
        humidity,
        main,
        temp_max,
        temp_min,
        time,
        hours,
        id,
      } = res?.info;

      const _weather = {
        name: res.name,
        country: res?.sys?.country,
        description,
        humidity: percentFormat(humidity),
        main,
        temp: `${temperatureFormat(temp_min)} ~ ${temperatureFormat(temp_max)}`,
        time,
        hours,
        id,
      };

      setWeather(_weather);

      setSearchHistory((searchHistory) => [...searchHistory, _weather]);
    },
    []
  );

  useEffect(() => {
    set("searchHistory", searchHistory);
  }, [searchHistory]);

  const onResearchHandler = useCallback(
    (id: string) => {
      const item = searchHistory.find((item) => item.id.toString() === id);

      onSearchHandler(item?.name!, item?.country);
    },
    [searchHistory]
  );

  const onRemoveHistoryItemHandler = useCallback((id: string) => {
    setSearchHistory((searchHistory) => {
      return searchHistory.filter((item: Weather) => item.id.toString() !== id);
    });
  }, []);

  return (
    <Container>
      <Navbar />
      <SearchForm onSearchHandler={onSearchHandler} />
      <WeatherInfo weather={weather} />
      <SearchHistory
        history={[...searchHistory].reverse()}
        onRemoveItem={onRemoveHistoryItemHandler}
        onResearchItem={onResearchHandler}
      />
    </Container>
  );
}

export default App;
