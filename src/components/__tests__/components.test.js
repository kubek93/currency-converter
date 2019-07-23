import React from 'react';
import { shallow } from 'enzyme';

import Button from '../LayoutElements/Button';
import CurrencyConverterWrapper from '../LayoutElements/CurrencyConverterWrapper';
import { SelectCurrencyWrapper } from '../LayoutElements/SelectCurrency';
import Loader from '../LayoutElements/Loader';

describe('Tests components renders without crashing', () => {
  it('Button - Should render', () => {
    shallow(<Button />);
  });

  it('CurrencyConverterWrapper - Should render', () => {
    shallow(<CurrencyConverterWrapper />);
  });

  it('Loader - Should render', () => {
    shallow(<Loader />);
  });

  it('SelectCurrencyWrapper - Should render', () => {
    shallow(<SelectCurrencyWrapper />);
  });
});
