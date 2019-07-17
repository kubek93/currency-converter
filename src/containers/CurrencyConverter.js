import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";

import CurrencyExchangeElement from "./CurrencyExchangeElement";
import {
  changePocketExchangeFrom,
  changePocketExchangeTo
} from "../actions/pocketActions";

const CurrencyExchangeWrapper = styled.ul`
  max-width: 400px;
  margin: 50px auto 0;
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
      userPocketsAllCurrencies,
      userPocketsById,
      pocketExchangeFrom,
      pocketExchangeTo
    } = this.props;

    return (
      <div>
        <CurrencyExchangeWrapper>
          <CurrencyExchangeElement
            userPocketsAllCurrencies={userPocketsAllCurrencies}
            userPocketsById={userPocketsById}
            pocketExchange={pocketExchangeFrom}
            onChangePocket={this.onChangePocketFrom}
          />
          <CurrencyExchangeElement
            userPocketsAllCurrencies={userPocketsAllCurrencies}
            userPocketsById={userPocketsById}
            pocketExchange={pocketExchangeTo}
            onChangePocket={this.onChangePocketTo}
          />
          <Button onClick={this.onClickExchange}>
            <FormattedMessage
              id="button.exchange"
              defaultMessage="button.exchange"
            />
          </Button>
        </CurrencyExchangeWrapper>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userPocketsAllCurrencies: state.pocket.userPocketsAllIds,
  userPocketsById: state.pocket.userPocketsById,
  pocketExchangeFrom: state.exchange.pocketExchangeFrom,
  pocketExchangeTo: state.exchange.pocketExchangeTo
});

const mapDispatchToProps = dispatch => ({
  changePocketExchangeFrom: currencyCode =>
    dispatch(changePocketExchangeFrom(currencyCode)),
  changePocketExchangeTo: currencyCode =>
    dispatch(changePocketExchangeTo(currencyCode))
});

CurrencyConverter.propTypes = {
  userPocketsAllCurrencies: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyConverter);
