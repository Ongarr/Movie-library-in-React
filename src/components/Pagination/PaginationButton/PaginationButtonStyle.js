import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 15px;
  transition: background, color 0.4s linear;
  background: linear-gradient(to left, #2c5364, #203a43, #0f2027);
  border: 0px solid;
  cursor: pointer;
  color: white;
  border-radius: 50px;

  &:hover {
    background: black;
    color: white;
  }
`;
