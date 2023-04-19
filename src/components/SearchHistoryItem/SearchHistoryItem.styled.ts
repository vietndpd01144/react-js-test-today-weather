import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 8px 4px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`

export const Wrapper = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`