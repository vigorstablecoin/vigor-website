import React from "react";
import ComingSoon from "../components/ComingSoon";
import { useTranslation } from "react-i18next";

const Learn: React.FC<{}> = props => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <h1>{t(`learn`)}</h1>
      <ComingSoon />
    </React.Fragment>
  );
};

export default Learn;
