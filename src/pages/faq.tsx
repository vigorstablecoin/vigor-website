import React from "react";
import { useTranslation } from "react-i18next";
import ComingSoon from "../components/ComingSoon";

const Index: React.FC<{}> = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t(`faq`)}</h1>
      <ComingSoon />
    </>
  )
};

export default Index

