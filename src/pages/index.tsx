import React from "react"
import { graphql } from "gatsby"
import { useTranslation } from "react-i18next";
import LocalizedLink from "../components/localizedLink"

const Index: React.FC<{}> = (props) => {
  // useTranslations is aware of the global context (and therefore also "locale")
  // so it'll automatically give back the right translations
  const { t, i18n } = useTranslation()

  console.log(`Index::render`, i18n.language, t(`hello`))

  return (
    <>
      <h1>{t(`hello`)}</h1>
      <p>{t(`subline`)}</p>
      <hr style={{ margin: `2rem 0` }} />
      <ul className="post-list">
        <li>Hi</li>
        <li>Hi 2</li>
      </ul>
    </>
  )
}

export default Index

