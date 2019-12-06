import React from "react"
import { useTranslation } from "react-i18next";
import Hero from "../components/Hero";
import LocalizedLink from "../components/LocalizedLink";

const Index: React.FC<{}> = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <Hero
        title={ t(`Vigor Stablecoin`) }
        content={
          <>
            { t(`A Borrow and Earn Community.`) }
            <br/>
            { t(`100% Decentralized, Peer to Peer Lending.`) }
          </>
        }
        link={ <LocalizedLink to={ '/' }>{ t(`Get Involved`) }</LocalizedLink> }
      />
    </>
  )
};

export default Index

