import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { CURRENCY_SYMBOL } from '../../utils/constants';

const DispalyBalanceWrapper = styled.span`
  font-size: 14px;
  margin: 5px;
  text-align: left;
  color: grey;
  display: block;
`;

const DispalyBalance = ({ currencyType, currencyValue }) => (
  <DispalyBalanceWrapper>
    <FormattedMessage id="exchange.balance" defaultMessage="exchange.balance" />
    <span>
      {currencyValue} {CURRENCY_SYMBOL[currencyType]}
    </span>
  </DispalyBalanceWrapper>
);

DispalyBalance.propTypes = {
  currencyType: PropTypes.string.isRequired,
  currencyValue: PropTypes.string.isRequired
};

export default DispalyBalance;
