import React from "react";
import { connect } from "react-redux";
import { IntlProvider } from "react-intl";
import PropTypes from "prop-types";

import messagesPl from "../languages/pl.json";
import messagesEn from "../languages/en.json";

const messages = {
  PL: messagesPl,
  EN: messagesEn
};

const LanguageProvider = props => {
  const { languages, children } = props;
  console.log("languages", languages);
  console.log("languages", messages[languages.currentLanguage]);
  return (
    <IntlProvider
      locale={languages.currentLanguage}
      messages={messages[languages.currentLanguage]}
    >
      {children}
    </IntlProvider>
  );
};

const mapStateToProps = state => ({
  languages: state.languages
});

LanguageProvider.defaultProps = {
  languages: {}
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
  languages: PropTypes.shape({})
};

export default connect(mapStateToProps)(LanguageProvider);
