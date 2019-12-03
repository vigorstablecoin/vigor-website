import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import LocalizedLink, { LocalizedChangeLanguageLink } from "./LocalizedLink";
import VigorLogoText from "./VigorLogoText";
import LanguageDropdown from "./LanguageDropdown";

const StyledLocalizedLink = styled(LocalizedLink)`
  font-size: 15px;
  line-height: 19px;
  margin-right: 48px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1240px;
  align-items: center;
  margin: 0 auto;
  padding: 16px;
`;

const Spacer = styled.div`
  flex: 1 1 auto;
`;

const NavBlock = styled.nav`
  display: flex;
  align-items: center;
  flex: 1 0 auto;
`

const Toolbar: React.FC<GlobalProps> = props => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <VigorLogoText height={55} />
      <Spacer />
      <NavBlock>
        <StyledLocalizedLink to="/">Products</StyledLocalizedLink>
        <StyledLocalizedLink to="/learn">Learn</StyledLocalizedLink>
        <StyledLocalizedLink to="/community">Community</StyledLocalizedLink>
        <StyledLocalizedLink to="/faq">FAQ</StyledLocalizedLink>
        <LanguageDropdown path={props.path} />
      </NavBlock>
    </Wrapper>
  );
};

export default Toolbar;
