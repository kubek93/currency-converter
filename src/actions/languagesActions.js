export const TypeOfLanguages = {
  PL: 'PL',
  EN: 'EN'
};

export const changeLanguage = languageName => ({
  type: 'CHANGE_LANGUAGE',
  languageName
});
