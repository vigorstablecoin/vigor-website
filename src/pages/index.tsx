import React from 'react'
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import BorrowEarnTabs from '../components/BorrowEarnTabs';
import LocalizedLink from '../components/LocalizedLink';
import Grid from 'styled-components-grid';

const Index: React.FC<{}> = (props) => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Grid>
        <Grid.Unit size={{ md: 7 / 12 }}>
          <Hero
            title={ t(`Vigor Stablecoin`) }
            content={
              <>
                { t(`A Borrow and Earn Community.`) }
                <br/>
                { t(`100% Decentralized, Peer to Peer Lending.`) }
              </>
            }
            link={ <LocalizedLink to={ '/community' }>{ t(`Get Involved`) }</LocalizedLink> }
          />
        </Grid.Unit>
        <Grid.Unit size={{ md: 5 / 12 }}>
          <BorrowEarnTabs />
        </Grid.Unit>
      </Grid>
    </React.Fragment>
  )
};

export default Index

