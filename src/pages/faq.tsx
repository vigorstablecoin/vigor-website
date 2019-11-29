import React from "react"
import { graphql } from "gatsby"
import { useTranslation } from "react-i18next";

const Index: React.FC<{}> = (props) => {
  const { t } = useTranslation()

  return (
    <>
      <h1>{t(`faq`)}</h1>
    </>
  )
}

export default Index

