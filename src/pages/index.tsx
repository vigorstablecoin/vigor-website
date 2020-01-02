import React from 'react'
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import BorrowEarnTabs from '../components/BorrowEarnTabs';
import JoinBuildEarn from "../components/JoinBuildEarn";
import LocalizedLink from '../components/LocalizedLink';
import BorrowLendInsure  from '../components/BorrowLendInsure';
import CompareDeFiTable  from '../components/CompareDeFiTable';
// @ts-ignore
import Grid from 'styled-components-grid';
import styled from "styled-components";

const GridCentered = styled(Grid)`
  justify-content: center;
`;

const Index: React.FC<{}> = (props) => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <GridCentered>
        <Grid.Unit size={{sm: 10/12, md: 1 / 2 }}>
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
        <Grid.Unit size={{sm: 10/12, md: 1 / 2 }}>
          <BorrowEarnTabs />
        </Grid.Unit>
      </GridCentered>

      <GridCentered>
        <Grid.Unit size={10/12}>
          <JoinBuildEarn
            title={ t(`joinBuildEarn-title`) }
            content={ t(`joinBuildEarn-content`) }
            link={ <LocalizedLink to={ '/community' }>{ t(`getInvolved`) }</LocalizedLink> }
          />
        </Grid.Unit>
      </GridCentered>

      <GridCentered>
        <Grid.Unit size={10 / 12}>
          <BorrowLendInsure
            subtitle={ t(`borrowLendInsure-subtitle`) }
            link={ <a href = { '../vigor.pdf' } target = "_blank">{ t(`readTheWhitepaper`) } <strong>&#8594;</strong></a> }
          />
        </Grid.Unit>
      </GridCentered>

      <GridCentered>
        <Grid.Unit size={{sm: 10 / 12}}>
          <CompareDeFiTable/>
        </Grid.Unit>
      </GridCentered>
    </React.Fragment>
  )
};

export default Index

