import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Link } from "gatsby";
import LocalizedLink, { LocalizedChangeLanguageLink } from "./LocalizedLink";

const StyledLink = styled.span`
  margin-right: 10px;
  cursor: pointer;
`;

const Toolbar: React.FC<GlobalProps> = props => {

  const { t } = useTranslation();
  return (
    <div>
      <LocalizedLink to="/">
        <StyledLink>Products</StyledLink>
      </LocalizedLink>
      <LocalizedLink to="/learn">
        <StyledLink>Learn</StyledLink>
      </LocalizedLink>
      <LocalizedLink to="/community">
        <StyledLink>Community</StyledLink>
      </LocalizedLink>
      <LocalizedLink to="/faq">
        <StyledLink>FAQ</StyledLink>
      </LocalizedLink>
      <div>
        <LocalizedChangeLanguageLink currentPath={props.path} locale="en">
          English
        </LocalizedChangeLanguageLink>
        {` `}/{` `}
        <LocalizedChangeLanguageLink currentPath={props.path} locale="de">
          Deutsch
        </LocalizedChangeLanguageLink>
      </div>
    </div>
  );
};

export default Toolbar;
