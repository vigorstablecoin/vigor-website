// LCID strings https://www.science.co.il/language/Locale-codes.php
module.exports = {
  en: {
    default: true,
    path: `en`,
    locale: `en-US`,
    dateFormat: `DD/MM/YYYY`,
    siteLanguage: `en`,
    ogLanguage: `en_US`,
    defaultTitle: `Using i18n with Gatsby`,
    defaultDescription: `Gatsby example site using MDX and dependency-free i18n`,
  },
  de: {
    path: `de`,
    locale: `de-DE`,
    dateFormat: `DD.MM.YYYY`,
    siteLanguage: `de`,
    ogLanguage: `de_DE`,
    defaultTitle: `i18n mit Gatsby nutzen`,
    defaultDescription: `Gatsby Beispielseite, die MDX und i18n (frei von dependencies) nutzt`,
  },
  zh: {
    path: `zh`,
    locale: `zh-CN`,
    dateFormat: `DD.MM.YYYY`,
    siteLanguage: `zh`,
    ogLanguage: `zh_CN`,
    defaultTitle: `Chinese title`,
    defaultDescription: `Chinese description`,
  },
  ko: {
    path: `ko`,
    locale: `ko`,
    dateFormat: `DD.MM.YYYY`,
    siteLanguage: `ko`,
    ogLanguage: `ko`,
    defaultTitle: `Korean title`,
    defaultDescription: `Korean description`,
  },
}
