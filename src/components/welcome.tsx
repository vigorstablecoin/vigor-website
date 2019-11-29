import React from "react";
import { useTranslation } from "react-i18next";

const Welcome: React.FC<{}> = () => {
  const { t, i18n } = useTranslation();

  return <div>{t("Using i18next")}</div>;
};

export default Welcome;
