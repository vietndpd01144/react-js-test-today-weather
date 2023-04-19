import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 12px 4px;
`

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  flex-direction: column;

  button, input {
    flex: 1;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;

    button, input {
      flex: initial;
    }
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  padding: 0 4px;
`