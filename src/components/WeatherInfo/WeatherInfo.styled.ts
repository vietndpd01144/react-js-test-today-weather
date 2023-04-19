import styled from "styled-components";

export const Container = styled.div`
  padding: 4px 10px;

  @media (min-width: 480px) {
    padding: 4px 40px;
  }
`

export const Title = styled.div`
  color: rgba(0, 0, 0, 0.6);
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 300px;
`

export const Weather = styled.div`
  font-weight: bold;
  font-size: 40px;
  padding: 4px 0 8px 0;
`

export const ErrorContainer = styled.div`
  background-color: rgba(255, 51, 51, 0.5);
  border: 2px solid rgba(255, 51, 51, 0.8);
  color: #fff;
  padding: 2px 4px;
  box-shadow: 0 0 10px 0 rgba(255, 51, 51, 0.2);
`