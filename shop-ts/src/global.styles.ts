import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  background: whitesmoke;
  font-family: "Poppins", sans-serif;

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.3);
    margin-right: 5px;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: rgba(83, 83, 83, 0.8);
  }
}
`;
