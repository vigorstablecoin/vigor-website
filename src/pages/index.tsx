import React from "react";
import { useTranslation } from "react-i18next";
import Welcome from "../components/ComingSoon";

const Index: React.FC<{}> = (props) => {
  // useTranslations is aware of the global context (and therefore also "locale")
  // so it'll automatically give back the right translations
  const { t, i18n } = useTranslation()

  return (
    <>

      <Welcome />
      <h1>{t(`hello`)}</h1>
      <p>{t(`subline`)}</p>
      <ul>
        <li>Hi</li>
        <li>Hi 2</li>
      </ul>
    </>
  )
}

export default Index

