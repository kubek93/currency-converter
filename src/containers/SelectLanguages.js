import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { TypeOfLanguages } from '../utils/constants';
import { changeLanguage } from '../actions/languagesActions';
import SelectLanguagesWrapper from '../components/SelectLanguages/SelectLanguagesWrapper';
import SelectLanguagesOption from '../components/SelectLanguages/SelectLanguagesOption';

const SelectLanguages = props => {
  const { languages, changeCurrentLanguage } = props;

  const onChangeSelectLanguages = event => changeCurrentLanguage(event.target.value);

  const renderSelectLanguagesOptions = () => {
    return Object.keys(TypeOfLanguages).map(key => (
      <SelectLanguagesOption value={key} key={key}>
        {TypeOfLanguages[key]}
      </SelectLanguagesOption>
    ));
  };

  return (
    <SelectLanguagesWrapper
      name="language"
      id="language"
      value={languages.currentLanguage}
      onChange={event => onChangeSelectLanguages(event)}
    >
      {renderSelectLanguagesOptions()}
    </SelectLanguagesWrapper>
  );
};

const mapStateToProps = state => ({
  languages: state.languages
});

const mapDispatchToProps = dispatch => ({
  changeCurrentLanguage: languageCode => dispatch(changeLanguage(languageCode))
});

SelectLanguages.propTypes = {
  languages: PropTypes.shape({
    currentLanguage: PropTypes.string.isRequired
  }).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectLanguages);
