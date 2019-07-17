import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  exchangeFromTo,
  transformCurrencySymbol
} from "../../utils/transforms";

const CurrencyCounterWrapper = styled.div`
  background: white;
  border-radius: 25px;
  border: 1px solid rgb(240, 240, 240);
  color: blue;
  font-size: 14px;
  line-height: 20px;
  margin: 0 25%;
  position: absolute;
  top: 95px;
  width: 50%;
`;

const CurrencyCounter = ({
  currencies,
  pocketExchangeFrom,
  pocketExchangeTo
}) => {
  const currencySymbolFrom = transformCurrencySymbol(pocketExchangeFrom);
  const currencySymbolTo = transformCurrencySymbol(pocketExchangeTo);
  const countedExchangeValue = exchangeFromTo(
    1,
    currencies,
    pocketExchangeFrom,
    pocketExchangeTo
  );

  return (
    <CurrencyCounterWrapper>
      <span>{`1 ${currencySymbolFrom} = ${countedExchangeValue} ${currencySymbolTo}`}</span>
    </CurrencyCounterWrapper>
  );
};

CurrencyCounter.propTypes = {
  currencies: PropTypes.shape({}).isRequired,
  pocketExchangeFrom: PropTypes.string.isRequired,
  pocketExchangeTo: PropTypes.string.isRequired
};

export default CurrencyCounter;
