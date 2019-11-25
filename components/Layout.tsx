import Toolbar from "./Toolbar";
import GlobalStyles from "./GlobalStyles";

const Layout = props => (
  <div>
    <GlobalStyles />
    <header>
      <Toolbar />
    </header>
    <main>{props.children}</main>
  </div>
);

export default Layout;
