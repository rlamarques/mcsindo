const manageTranslations = require('react-intl-translations-manager').default;
const languages = require('../src/constants/languages')

manageTranslations({
  messagesDirectory: 'build/messages/extracted',
  translationsDirectory: 'src/translations/',
  languages: languages,
  singleMessagesFile: true
});
