const languages = require("../src/constants/Languages");
const fs = require('fs');

var allLanguagesTranslation = {};
for (var i = 0; i < languages.length; i++) {

  let currentLanguage = languages[i];
  try {
    const messages = require("../src/translations/" + currentLanguage + ".json");
    allLanguagesTranslation[currentLanguage] = messages;
  } catch (e) {
    throw new Error("File with translations for language '" + currentLanguage + "' not found.");
  }
}

fs.writeFile(__dirname+ "/../src/translations/translationData.json", JSON.stringify(allLanguagesTranslation), (err)=> {
  if (err) {
    console.log("File creation error")
  }
});
