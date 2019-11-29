import React from "react";
import Welcome from "../components/Welcome";
import Toolbar from "../components/Toolbar";
import GlobalStyles from "../components/GlobalStyles";
import withI18next from "../i18n/withI18next";


const Layout: React.FC<GlobalProps> = (props) => {
  return (
    <div>
      <GlobalStyles />
      <header>
        <Toolbar {...props}/>
      </header>
      <Welcome />
      <main>{props.children}</main>
    </div>
  );
};

export default withI18next()(Layout);
