import styled from "styled-components";

export const ButtonContainer = styled.button<{ shape?: 'rectangle' | 'circle', size?: number }>`
  padding: 2px 4px;
  min-width: 50px;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.shape === 'circle' ? '#fff' : 'rgba(0, 0, 0, 0.2)'};
    color: rgba(0, 0, 0, 0.6);
    border: 1px solid rgba(0, 0, 0, 0.6);
  }

  ${props => props.shape === 'circle' ? `
    min-width: 0;
    width: ${props.size ? props.size : 24}px;
    height: ${props.size ? props.size : 24}px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.2);
    border: none;
  ` : ''}
`