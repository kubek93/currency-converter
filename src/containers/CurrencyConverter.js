import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  changePocketExchangeFrom,
  changePocketExchangeTo
} from "../actions/pocketActions";
import DispalyBalance from "../components/LayoutElements/DisplayBalance";

const CurrencyExchangeWrapper = styled.ul`
  max-width: 400px;
  margin: 50px auto 0;
`;

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
  text-align: right;
  font-size: 24px;
  line-height: 24px;
  height: 30px;
  border: none;
`;

class CurrencyConverter extends React.Component {
  componentDidMount() {
    console.log("componentDidMount CurrencyConverter");
  }

  onChangePocketFrom = event => {
    const {
      userPocketsAllIds,
      changePocketExchangeTo,
      changePocketExchangeFrom,
      pocketExchangeTo
    } = this.props;
    changePocketExchangeFrom(event.target.value);

    if (event.target.value === pocketExchangeTo) {
      const userPocketsAfterRemoveDuplicate = userPocketsAllIds.filter(
        el => el !== event.target.value
      );
      changePocketExchangeTo(userPocketsAfterRemoveDuplicate[0]);
    }
  };

  onChangePocketTo = event => {
    const {
      userPocketsAllIds,
      changePocketExchangeTo,
      changePocketExchangeFrom,
      pocketExchangeFrom
    } = this.props;
    changePocketExchangeTo(event.target.value);

    if (event.target.value === pocketExchangeFrom) {
      const userPocketsAfterRemoveDuplicate = userPocketsAllIds.filter(
        el => el !== event.target.value
      );
      changePocketExchangeFrom(userPocketsAfterRemoveDuplicate[0]);
    }
  };

  render() {
    const {
      userPocketsAllIds,
      userPocketsById,
      pocketExchangeFrom,
      pocketExchangeTo
    } = this.props;

    return (
      <div>
        {/* <SelectCurrencies /> */}
        <CurrencyExchangeWrapper>
          <CurrencyExchangeElement>
            <SelectCurrencyWrapper>
              <select
                onChange={this.onChangePocketFrom}
                value={pocketExchangeFrom}
              >
                {userPocketsAllIds.map(userPocketCurrency => {
                  return (
                    <option key={userPocketCurrency}>
                      {userPocketCurrency}
                    </option>
                  );
                })}
              </select>
              <DispalyBalance
                currencyType={pocketExchangeFrom}
                currencyValue={userPocketsById[pocketExchangeFrom].amount}
              />
            </SelectCurrencyWrapper>
            <InputCurrency type="text" value="0" />
          </CurrencyExchangeElement>
          <CurrencyExchangeElement colorGrey>
            <SelectCurrencyWrapper>
              <select onChange={this.onChangePocketTo} value={pocketExchangeTo}>
                {userPocketsAllIds.map(userPocketCurrency => {
                  return (
                    <option key={userPocketCurrency}>
                      {userPocketCurrency}
                    </option>
                  );
                })}
              </select>
              <DispalyBalance
                currencyType={pocketExchangeTo}
                currencyValue={userPocketsById[pocketExchangeTo].amount}
              />
            </SelectCurrencyWrapper>
            <InputCurrency type="text" value="0" />
          </CurrencyExchangeElement>
        </CurrencyExchangeWrapper>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userPocketsAllIds: state.pocket.userPocketsAllIds,
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
  userPocketsAllIds: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyConverter);
