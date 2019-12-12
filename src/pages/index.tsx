import React from 'react'
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import BorrowEarnTabs from '../components/BorrowEarnTabs';
import LocalizedLink from '../components/LocalizedLink';
import BorrowLendInsure  from '../components/BorrowLendInsure';
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
        <BorrowLendInsure
          subtitle={ t(`Borrow, lend, insure, and vote through open source smart contracts.`) }
          link={ <LocalizedLink to={ '/whitepaper' }>{ t(`Read The Whitepaper`) } <strong>&#8594;</strong></LocalizedLink> }
        />
      </Grid>
    </React.Fragment>
  )
};

export default Index

