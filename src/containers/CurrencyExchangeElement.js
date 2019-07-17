import React from "react";
import styled from "styled-components";
import DispalyBalance from "../components/LayoutElements/DisplayBalance";

const CurrencyExchangeElement = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: ${props =>
    props.colorGrey ? "rgb(240, 240, 240)" : "transparent"};
`;

const SelectCurrencyWrapper = styled.div`
  text-align: left;

  select {
    background: transparent;
    font-size: 24px;
    line-height: 24px;
    height: 30px;
    border: none;
  }
`;

const InputCurrency = styled.input`
  background: transparent;
  border: none;
  font-size: 24px;
  height: 30px;
  line-height: 24px;
  text-align: right;
`;

export default props => {
  const {
    onChangePocket,
    pocketExchange,
    userPocketsAllCurrencies,
    userPocketsById
  } = props;

  return (
    <CurrencyExchangeElement>
      <SelectCurrencyWrapper>
        <select onChange={onChangePocket} value={pocketExchange}>
          {userPocketsAllCurrencies.map(userPocketCurrency => {
            return (
              <option key={userPocketCurrency}>{userPocketCurrency}</option>
            );
          })}
        </select>
        <DispalyBalance
          currencyType={pocketExchange}
          currencyValue={userPocketsById[pocketExchange].amount}
        />
      </SelectCurrencyWrapper>
      <InputCurrency type="text" placeholder="0" />
    </CurrencyExchangeElement>
  );
};
