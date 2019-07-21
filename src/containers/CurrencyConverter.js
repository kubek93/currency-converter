import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import Button from '../components/LayoutElements/Button';
import CurrencyCounter from '../components/LayoutElements/CurrencyCounter';
import { CurrencyExchangeList, CurrencyExchangeListElement } from '../components/CurrencyExchange';
import { PocketSwitch } from '../components/LayoutElements/PocketSwitch';
import {
  changePocketExchangeFrom,
  changePocketExchangeTo,
  changePocketExchangeValueFrom,
  changePocketExchangeValueTo,
  exchangeMoney,
  replacePocketsPosition
} from '../actions/pocketActions';

const CurrencyConverterWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  position: relative;
  margin-top: 35px;
`;

class CurrencyConverter extends React.PureComponent {
  onClickExchange = () => {
    this.props.exchangeMoney(this.props.pocketExchange);
  };

  onChangePocketValueFrom = event => {
    this.props.changePocketExchangeValueFrom(event.target.value, this.props.currencies);
  };

  onChangePocketValueTo = event => {
    this.props.changePocketExchangeValueTo(event.target.value, this.props.currencies);
  };

  onChangePocketFrom = event => {
    const { userPocketsAllCurrencies, changePocketExchangeTo, changePocketExchangeFrom, pocketExchange } = this.props;
    changePocketExchangeFrom(event.target.value);

    if (event.target.value === pocketExchange.pocketExchangeTo) {
      const userPocketsAfterRemoveDuplicate = userPocketsAllCurrencies.filter(el => el !== event.target.value);
      changePocketExchangeTo(userPocketsAfterRemoveDuplicate[0]);
    }
  };

  onChangePocketTo = event => {
    const { userPocketsAllCurrencies, changePocketExchangeTo, changePocketExchangeFrom, pocketExchange } = this.props;
    changePocketExchangeTo(event.target.value);

    if (event.target.value === pocketExchange.pocketExchangeFrom) {
      const userPocketsAfterRemoveDuplicate = userPocketsAllCurrencies.filter(el => el !== event.target.value);
      changePocketExchangeFrom(userPocketsAfterRemoveDuplicate[0]);
    }
  };

  replacePocketsPosition = () => {
    this.props.replacePocketsPosition();
  };

  render() {
    const { currencies, userPocketsAllCurrencies, userPocketsById, pocketExchange } = this.props;
    const { pocketValueFrom, pocketValueTo, pocketExchangeFrom, pocketExchangeTo } = pocketExchange;

    const shouldDisableExchangeButton =
      parseFloat(pocketValueFrom) === 0 ||
      (['', ['0']].includes(pocketValueFrom) || pocketValueFrom > userPocketsById[pocketExchangeFrom].amount);

    return (
      <CurrencyConverterWrapper>
        <PocketSwitch>
          <button onClick={this.replacePocketsPosition}>+</button>
        </PocketSwitch>
        <CurrencyCounter
          currencies={currencies}
          pocketExchangeFrom={pocketExchangeFrom}
          pocketExchangeTo={pocketExchangeTo}
        />
        <CurrencyExchangeList>
          <CurrencyExchangeListElement
            exchangeFrom={true}
            userPocketsAllCurrencies={userPocketsAllCurrencies}
            userPocketsById={userPocketsById}
            pocketValue={pocketValueFrom}
            pocketExchange={pocketExchangeFrom}
            onChangePocket={this.onChangePocketFrom}
            onChangePocketValue={this.onChangePocketValueFrom}
          />
          <CurrencyExchangeListElement
            exchangeFrom={false}
            userPocketsAllCurrencies={userPocketsAllCurrencies}
            userPocketsById={userPocketsById}
            pocketValue={pocketValueTo}
            pocketExchange={pocketExchangeTo}
            onChangePocket={this.onChangePocketTo}
            onChangePocketValue={this.onChangePocketValueTo}
          />
        </CurrencyExchangeList>
        <Button disabled={shouldDisableExchangeButton} onClick={this.onClickExchange}>
          <FormattedMessage id="button.exchange" defaultMessage="Exchange Money" />
        </Button>
      </CurrencyConverterWrapper>
    );
  }
}

const mapStateToProps = state => ({
  currencies: state.currenct.currency.currencyExchangeRate,
  userPocketsAllCurrencies: state.pocket.userPocketsAllIds,
  userPocketsById: state.pocket.userPocketsById,
  pocketExchange: state.exchange
});

const mapDispatchToProps = dispatch => ({
  changePocketExchangeFrom: currencyCode => dispatch(changePocketExchangeFrom(currencyCode)),
  changePocketExchangeTo: currencyCode => dispatch(changePocketExchangeTo(currencyCode)),
  changePocketExchangeValueFrom: (pocketValue, currencies) =>
    dispatch(changePocketExchangeValueFrom(pocketValue, currencies)),
  changePocketExchangeValueTo: (pocketValue, currencies) =>
    dispatch(changePocketExchangeValueTo(pocketValue, currencies)),
  exchangeMoney: pocketExchange => dispatch(exchangeMoney(pocketExchange)),
  replacePocketsPosition: pocketExchange => dispatch(replacePocketsPosition())
});

CurrencyConverter.propTypes = {
  userPocketsAllCurrencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  pocketExchange: PropTypes.shape({
    pocketExchangeFrom: PropTypes.string.isRequired,
    pocketExchangeTo: PropTypes.string.isRequired,
    pocketValueFrom: PropTypes.string.isRequired,
    pocketValueTo: PropTypes.string.isRequired
  }).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyConverter);
