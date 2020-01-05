import i18n from "i18next";

export default () => {
  i18n.init({
    debug: process.env.NODE_ENV === "development",
    fallbackLng: "en",
    keySeparator: `.`,
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    react: { useSuspense: false }
  });

  return i18n;
};
