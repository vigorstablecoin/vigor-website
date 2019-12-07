import React from "react"
import { useTranslation } from "react-i18next";
import Hero from "../components/Hero";
import LocalizedLink from "../components/LocalizedLink";

const Index: React.FC<{}> = (props) => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Hero
        title={ t(`Vigor Stablecoin`) }
        content={
          <React.Fragment>
            { t(`A Borrow and Earn Community.`) }
            <br/>
            { t(`100% Decentralized, Peer to Peer Lending.`) }
          </React.Fragment>
        }
        link={ <LocalizedLink to={ '/community' }>{ t(`Get Involved`) }</LocalizedLink> }
      />
    </React.Fragment>
  )
};

export default Index

