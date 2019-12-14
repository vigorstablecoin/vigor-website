import React from "react";
import Helmet from "react-helmet";
import styled, { ThemeProvider } from "styled-components";
import Toolbar from "../components/Toolbar";
import GlobalStyles from "../components/GlobalStyles";
import withI18next from "../i18n/withI18next";
import theme from "../utils/theme";
import Footer from "../components/Footer";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PageHeader = styled.header`
  width: 100%;
`;

const MainSection = styled.main`
  width: 100%;
  max-width: 1240px;
`;

const Layout: React.FC<GlobalProps> = props => {
  return (
    <ThemeProvider theme={theme}>
      <Page>
        <GlobalStyles />
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <PageHeader>
          <Toolbar {...props} />
        </PageHeader>
        <MainSection>{props.children}</MainSection>
        <Footer />
      </Page>
    </ThemeProvider>
  );
};

export default withI18next()(Layout);
