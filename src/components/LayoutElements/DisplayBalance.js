import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { CURRENCY_SYMBOL } from "../../utils/constants";

const BalanceOfCurrency = styled.span`
  font-size: 14px;
  margin: 5px;
  text-align: left;
  color: grey;
  display: block;
`;

const DispalyBalance = ({ currencyType, currencyValue = 0 }) => {
  console.log("currencyValue", currencyValue);
  return (
    <BalanceOfCurrency>
      <FormattedMessage
        id="exchange.balance"
        defaultMessage="exchange.balance"
      />{" "}
      {currencyValue} {CURRENCY_SYMBOL[currencyType]}
    </BalanceOfCurrency>
  );
};

export default DispalyBalance;
