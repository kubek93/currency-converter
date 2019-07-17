import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import DispalyBalance from '../components/LayoutElements/DisplayBalance';

const CurrencyExchangeElement = styled.li`
  background-color: ${props => (props.exchangeFrom ? 'transparent' : 'rgb(240, 240, 240)')};
  margin-top: ${props => (props.exchangeFrom ? '0' : '-10px')};
  display: flex;
  justify-content: space-between;
  padding: 30px 20px;
`;

const SelectCurrencyWrapper = styled.div`
  text-align: left;

  select {
    background: transparent;
    border: none;
    font-size: 24px;
    height: 30px;
    line-height: 24px;
  }
`;

const InputCurrencyWrapper = styled.div`
  text-align: right;

  span {
    color: grey;
    display: block;
    font-size: 14px;
    margin: 5px 0;
    text-align: right;
  }
`;

const InputCurrency = styled.input`
  background: transparent;
  border: none;
  font-size: 24px;
  height: 28px;
  line-height: 24px;
  text-align: right;
  opacity: ${props => (props.shouldDisable ? '0.4' : '1')};
`;

export default props => {
  const {
    exchangeFrom,
    onChangePocket,
    onChangePocketValue,
    pocketExchange,
    pocketValue,
    userPocketsAllCurrencies,
    userPocketsById
  } = props;

  const shouldDisableInput = exchangeFrom && pocketValue > userPocketsById[pocketExchange].amount;

  return (
    <CurrencyExchangeElement exchangeFrom={exchangeFrom}>
      <SelectCurrencyWrapper>
        <select onChange={onChangePocket} value={pocketExchange}>
          {userPocketsAllCurrencies.map(userPocketCurrency => {
            return <option key={userPocketCurrency}>{userPocketCurrency}</option>;
          })}
        </select>
        <DispalyBalance
          currencyType={pocketExchange}
          currencyValue={userPocketsById[pocketExchange].amount.toFixed(2)}
        />
      </SelectCurrencyWrapper>
      <InputCurrencyWrapper>
        <InputCurrency
          type="text"
          shouldDisable={shouldDisableInput}
          onChange={onChangePocketValue}
          value={pocketValue}
          placeholder="0"
        />
        {shouldDisableInput && (
          <FormattedMessage id="error.balance-exceeded" defaultMessage="error.balance-exceeded" />
        )}
      </InputCurrencyWrapper>
    </CurrencyExchangeElement>
  );
};
