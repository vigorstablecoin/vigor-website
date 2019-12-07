import React from "react";
import { useTranslation } from "react-i18next";
import ComingSoon from "../components/ComingSoon";

const Products: React.FC<{}> = props => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <h1>{t(`products`)}</h1>
      <ComingSoon />
    </React.Fragment>
  );
};

export default Products;
