import { languagesActionsTypes as actions } from '../utils/constants';

export const changeLanguage = languageName => ({
  type: actions.changeLanguage,
  languageName
});
