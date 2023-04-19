import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 4px;
  padding: 2px 4px;
  line-height: 23px;
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
  }
`

export const Input = styled.input`
  width: 200px;
  padding: 2px 4px;
  outline: none;
`