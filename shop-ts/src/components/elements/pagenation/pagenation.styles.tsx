import styled from 'styled-components';

export const PagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  max-width: 500px;

  .work {
    background: rgba(0, 0, 0, 0.07);
    border: 3px solid grey;
    color: #00000075;
    cursor: auto;

    &:hover {
      filter: none;
    }

    &:active {
      transform: none;
    }
  }
`;

export const PageNum = styled.span`
  margin: auto;
  user-select: none;
  text-align: center;
  font-size: 20px;
  border: 2px solid lightgray;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding: 15px;
  cursor: pointer;
  transition: 30ms;

  &:hover {
    filter: brightness(80%);
  }

  &:active {
    transform: scale(0.95);
  }

  @media screen and (max-width: 500px) {
    padding: 10px;
    font-size: 14px;
    width: 14px;
    height: 14px;
  }
`;
