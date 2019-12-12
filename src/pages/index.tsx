

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
          title={ t(`joinBuildEarn-title`) }
          content={ t(`joinBuildEarn-content`) }
          link={ <LocalizedLink to={ '/community' }>{ t(`getInvolved`) }</LocalizedLink> } 
        />
      </Grid>
    </React.Fragment>
  )
};

export default Index

