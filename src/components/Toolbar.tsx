import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import LocalizedLink from "./LocalizedLink";
import VigorLogoText from "./VigorLogoText";
import LanguageDropdown from "./LanguageDropdown";
import { BlueButton } from "./shared";

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
  margin: 0 auto 71px auto;
  padding: 16px;
`;

const Spacer = styled.div`
  flex: 1 1 auto;
`;

const NavBlock = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 0 0 auto;
`;

const Toolbar: React.FC<GlobalProps> = props => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <StyledLocalizedLink to="/">
        <VigorLogoText height={55} />
      </StyledLocalizedLink>
      <Spacer />
      <NavBlock>
        <StyledLocalizedLink to="/">{t(`products`)}</StyledLocalizedLink>
        <StyledLocalizedLink to="/learn">{t(`learn`)}</StyledLocalizedLink>
        <StyledLocalizedLink to="/community">{t(`community`)}</StyledLocalizedLink>
        <StyledLocalizedLink to="/faq">{t(`faqShort`)}</StyledLocalizedLink>
        <LanguageDropdown path={props.path} />
        <BlueButton
          as="a"
          margin="0 0 0 32px"
          href="https://newdex.io/trade/vig111111111-vig-eos"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          {t(`buyVig`)}
        </BlueButton>
      </NavBlock>
    </Wrapper>
  );
};

export default Toolbar;
