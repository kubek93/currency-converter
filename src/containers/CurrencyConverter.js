import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";

import CurrencyCounter from "../components/LayoutElements/CurrencyCounter";
import CurrencyExchangeElement from "./CurrencyExchangeElement";
import {
  changePocketExchangeFrom,
  changePocketExchangeTo,
  changePocketExchangeValueFrom,
  changePocketExchangeValueTo
} from "../actions/pocketActions";

const CurrencyExchangeWrapperParent = styled.div`
  max-width: 400px;
  margin: 0 auto;
  position: relative;
`;

const CurrencyExchangeWrapper = styled.ul`
  /* max-width: 400px;
  margin: 50px auto 0; */
`;

const Button = styled.button`
  background: red;
  border-radius: 50px;
  border: none;
  color: white;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  font-size: 22px;
  font-weight: 600;
  height: 50px;
  margin-top: 25px;
  opacity: ${props => (props.disabled ? "0.4" : "1")};
  padding: 10px 0;
  width: 100%;
`;

class CurrencyConverter extends React.Component {
  componentDidMount() {
    console.log("componentDidMount CurrencyConverter");
  }

  onClickExchange = () => {
    console.log("onClickExchange");
  };

  onChangePocketValueFrom = event => {
    this.props.changePocketExchangeValueFrom(
      event.target.value,
      this.props.currencies
    );
  };

  onChangePocketValueTo = event => {
    console.log(event.target.value);
    this.props.changePocketExchangeValueTo(
      event.target.value,
      this.props.currencies
    );
  };

  onChangePocketFrom = event => {
    const {
      userPocketsAllCurrencies,
      changePocketExchangeTo,
      changePocketExchangeFrom,
      pocketExchangeTo
    } = this.props;
    changePocketExchangeFrom(event.target.value);

    if (event.target.value === pocketExchangeTo) {
      const userPocketsAfterRemoveDuplicate = userPocketsAllCurrencies.filter(
        el => el !== event.target.value
      );
      changePocketExchangeTo(userPocketsAfterRemoveDuplicate[0]);
    }
  };

  onChangePocketTo = event => {
    const {
      userPocketsAllCurrencies,
      changePocketExchangeTo,
      changePocketExchangeFrom,
      pocketExchangeFrom
    } = this.props;
    changePocketExchangeTo(event.target.value);

    if (event.target.value === pocketExchangeFrom) {
      const userPocketsAfterRemoveDuplicate = userPocketsAllCurrencies.filter(
        el => el !== event.target.value
      );
      changePocketExchangeFrom(userPocketsAfterRemoveDuplicate[0]);
    }
  };

  render() {
    const {
      currencies,
      userPocketsAllCurrencies,
      userPocketsById,
      pocketExchangeFrom,
      pocketExchangeTo,
      pocketValueFrom,
      pocketValueTo
    } = this.props;

    console.log("pocketValueFrom", pocketValueFrom);

    const shouldDisableExchangeButton =
      pocketValueFrom === "0" ||
      pocketValueFrom === "" ||
      pocketValueFrom > userPocketsById[pocketExchangeFrom].amount;

    return (
      <CurrencyExchangeWrapperParent>
        <CurrencyCounter
          currencies={currencies}
          pocketExchangeFrom={pocketExchangeFrom}
          pocketExchangeTo={pocketExchangeTo}
        />
        <CurrencyExchangeWrapper>
          <CurrencyExchangeElement
            exchangeFrom={true}
            userPocketsAllCurrencies={userPocketsAllCurrencies}
            userPocketsById={userPocketsById}
            pocketValue={pocketValueFrom}
            pocketExchange={pocketExchangeFrom}
            onChangePocket={this.onChangePocketFrom}
            onChangePocketValue={this.onChangePocketValueFrom}
          />
          <CurrencyExchangeElement
            exchangeFrom={false}
            userPocketsAllCurrencies={userPocketsAllCurrencies}
            userPocketsById={userPocketsById}
            pocketValue={pocketValueTo}
            pocketExchange={pocketExchangeTo}
            onChangePocket={this.onChangePocketTo}
            onChangePocketValue={this.onChangePocketValueTo}
          />
        </CurrencyExchangeWrapper>
        <Button
          disabled={shouldDisableExchangeButton}
          onClick={this.onClickExchange}
        >
          <FormattedMessage
            id="button.exchange"
            defaultMessage="Exchange Money"
          />
        </Button>
      </CurrencyExchangeWrapperParent>
    );
  }
}

const mapStateToProps = state => {
  console.log("state", state);

  return {
    currencies: state.currenct.currency.currencyExchangeRate,
    userPocketsAllCurrencies: state.pocket.userPocketsAllIds,
    userPocketsById: state.pocket.userPocketsById,
    pocketExchangeFrom: state.exchange.pocketExchangeFrom,
    pocketExchangeTo: state.exchange.pocketExchangeTo,
    pocketValueFrom: state.exchange.pocketValueFrom,
    pocketValueTo: state.exchange.pocketValueTo
  };
};

const mapDispatchToProps = dispatch => ({
  changePocketExchangeFrom: currencyCode =>
    dispatch(changePocketExchangeFrom(currencyCode)),
  changePocketExchangeTo: currencyCode =>
    dispatch(changePocketExchangeTo(currencyCode)),
  changePocketExchangeValueFrom: (pocketValue, currencies) =>
    dispatch(changePocketExchangeValueFrom(pocketValue, currencies)),
  changePocketExchangeValueTo: (pocketValue, currencies) =>
    dispatch(changePocketExchangeValueTo(pocketValue, currencies))
});

CurrencyConverter.propTypes = {
  userPocketsAllCurrencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  pocketValueFrom: PropTypes.string.isRequired,
  pocketValueTo: PropTypes.string.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyConverter);
