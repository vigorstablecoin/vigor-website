import React from "react";
import { useTranslation } from "react-i18next";

const ComingSoon: React.FC<{}> = () => {
  const { t } = useTranslation();

  return <div>{t(`comingSoon`)}</div>;
};

export default ComingSoon;
