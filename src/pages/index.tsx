

import React from 'react'
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import BorrowEarnTabs from '../components/BorrowEarnTabs';
import JoinBuildEarn from "../components/JoinBuildEarn";
import LocalizedLink from '../components/LocalizedLink';
// @ts-ignore
import Grid from 'styled-components-grid';


const Index: React.FC<{}> = (props) => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Grid>
        <Grid.Unit size={{ md: 1 / 2 }}>
          <Hero
            title={ t(`Vigor Stablecoin`) }
            content={
              <>
                { t(`A Borrow and Earn Community.`) }
                <br/>
                { t(`100% Decentralized, Peer to Peer Lending.`) }
              </>
            }
            link={ <LocalizedLink to={ '/community' }>{ t(`getInvolved`) }</LocalizedLink> }
          />
        </Grid.Unit>
        <Grid.Unit size={{ md: 1 / 2 }}>
          <BorrowEarnTabs />
        </Grid.Unit>
      </Grid>

      <Grid>
        <JoinBuildEarn
          title="Join. Build. Earn."
          content="The Vigor Stablecoin project is governed by a DAC, (Decentralized Autonomous Community) whose goal is to build and deploy the Vigor Project based on the specifications of the Vigor Whitepaper."
          link={ <LocalizedLink to={ '/community' }>{ t(`Get Involved`) }</LocalizedLink> } 
        />
      </Grid>
    </React.Fragment>
  )
};

export default Index

