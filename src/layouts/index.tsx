import React from "react";
import Helmet from "react-helmet";
import Welcome from "../components/Welcome";
import Toolbar from "../components/Toolbar";
import GlobalStyles from "../components/GlobalStyles";
import withI18next from "../i18n/withI18next";

const Layout: React.FC<GlobalProps> = props => {
  return (
    <div>
      <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet" />
      </Helmet>
      <GlobalStyles />
      <header>
        <Toolbar {...props} />
      </header>
      <Welcome />
      <main>{props.children}</main>
    </div>
  );
};

export default withI18next()(Layout);
