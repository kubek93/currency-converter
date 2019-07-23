import React from 'react';
import { render } from '@testing-library/react';

import { TypeOfCurrency } from '../../utils/constants';
import CurrencyCounter from '../LayoutElements/CurrencyCounter';

describe('Tests components renders without crashing', () => {
  it('CurrencyCounter - Should render with correct value', () => {
    const pocketExchangeFrom = TypeOfCurrency.PLN;
    const pocketExchangeTo = TypeOfCurrency.USD;
    const currencies = {
      [TypeOfCurrency.PLN]: 1.64,
      [TypeOfCurrency.USD]: 4.32
    };

    const { getByText } = render(
      <CurrencyCounter
        currencies={currencies}
        pocketExchangeFrom={pocketExchangeFrom}
        pocketExchangeTo={pocketExchangeTo}
      />
    );

    expect(getByText('1 zł = 2.63 $'));
  });
});
