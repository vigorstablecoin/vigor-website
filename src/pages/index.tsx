

import React from 'react'
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import BorrowEarnTabs from '../components/BorrowEarnTabs';
import JoinBuildEarn from "../components/JoinBuildEarn";
import LocalizedLink from '../components/LocalizedLink';
import BorrowLendInsure  from '../components/BorrowLendInsure';
import Grid from 'styled-components-grid';

const Index: React.FC<{}> = (props) => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Grid>
        <Grid.Unit size={{ md: 1 / 2 }}>
          <Hero
            title={ t(`vigorStablecoin`) }
            content={
              <>
                { t(`getInvolvedHero-title-row1`) }
                <br/>
                { t(`getInvolvedHero-title-row2`) }
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

      <Grid>
        <BorrowLendInsure
          subtitle={ t(`borrowLendInsure-subtitle`) }
          link={ <a href = { '../VIGOR.pdf' } target = "_blank">{ t(`readTheWhitepaper`) } <strong>&#8594;</strong></a> }
        />
      </Grid>
    </React.Fragment>
  )
};

export default Index

