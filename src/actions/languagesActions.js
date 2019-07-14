export const TypeOfLanguages = {
  PL: "PL",
  EN: "EN"
};

export const changeLanguage = languageName => {
  console.log("languageName", languageName);
  return {
    type: "CHANGE_LANGUAGE",
    languageName
  };
};
