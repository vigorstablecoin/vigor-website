import React from "react"
import { useTranslation } from "react-i18next";
import Hero from "../components/Hero";
import LocalizedLink from "../components/LocalizedLink";
import JoinBuildEarn from "../components/JoinBuildEarn";

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

      <JoinBuildEarn
        title="Join. Build. Earn."
        content="The Vigor Stablecoin project is governed by a DAC, (Decentralized Autonomous Community) whose goal is to build and deploy the Vigor Project based on the specifications of the Vigor Whitepaper."
        link={ <LocalizedLink to={ '/community' }>{ t(`Get Involved`) }</LocalizedLink> } 
      />
    </React.Fragment>
  )
};

export default Index

