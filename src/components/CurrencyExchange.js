import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import DispalyBalance from './LayoutElements/DisplayBalance';
import { InputCurrencyWrapper, InputCurrency } from './LayoutElements/InputCurrency';
import { SelectCurrencyWrapper } from './LayoutElements/SelectCurrency';

export const CurrencyExchangeList = styled.ul``;

const CurrencyExchangeListElementWrapper = styled.li`
  background-color: ${props => (props.exchangeFrom ? 'transparent' : 'rgb(240, 240, 240)')};
  margin-top: ${props => (props.exchangeFrom ? '0' : '-10px')};
  display: flex;
  justify-content: space-between;
  padding: 30px 20px;
`;

export const CurrencyExchangeListElement = props => {
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
    <CurrencyExchangeListElementWrapper exchangeFrom={exchangeFrom}>
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
        {shouldDisableInput && <FormattedMessage id="error.balance-exceeded" defaultMessage="error.balance-exceeded" />}
      </InputCurrencyWrapper>
    </CurrencyExchangeListElementWrapper>
  );
};

CurrencyExchangeListElement.defaultProps = {
  userPocketsAllCurrencies: []
};

CurrencyExchangeListElement.propTypes = {
  // exchangeFrom,
  // onChangePocket,
  // onChangePocketValue,
  // pocketExchange,
  // pocketValue,
  userPocketsAllCurrencies: PropTypes.arrayOf(PropTypes.string)
  // userPocketsById,
};
