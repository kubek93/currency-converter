import styled from 'styled-components';

export const PocketSwitch = styled.span`
  button {
    background: white;
    border-radius: 25px;
    border: 1px solid rgb(240, 240, 240);
    color: blue;
    font-size: 14px;
    line-height: 20px;
    position: absolute;
    top: 95px;
    width: 6%;
    left: 10%;
    cursor: pointer;

    &:hover {
      background-color: rgb(250, 250, 250);
    }
  }
`;
