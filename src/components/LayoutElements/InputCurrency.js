import styled from 'styled-components';

export const InputCurrencyWrapper = styled.div`
  text-align: right;

  span {
    color: grey;
    display: block;
    font-size: 14px;
    margin: 5px 0;
    text-align: right;
  }
`;

export const InputCurrency = styled.input`
  background: transparent;
  border: none;
  font-size: 24px;
  height: 28px;
  line-height: 24px;
  text-align: right;
  opacity: ${props => (props.shouldDisable ? '0.4' : '1')};
`;
