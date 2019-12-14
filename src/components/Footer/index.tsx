import React, { HTMLAttributes } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import TelegramIcon from "../../assets/telegram.svg";
import LocalizedLink from "../LocalizedLink";

const Wrapper = styled.div(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${theme.colors.bgLight};
  padding: 0 0 51px 0;
`
);

const NavBlock = styled.nav`
  display: flex;
  align-items: center;
  margin: 51px 0 59px 0;
`;

const StyledLocalizedLink = styled(LocalizedLink)`
  font-size: 15px;
  line-height: 19px;
  &:not(:last-of-type) {
    margin-right: 48px;
  }
`;

const Header = styled.h3(
  ({ theme }) => `
	color: ${theme.colors.bgLightest};
	font-size: 27px;
	font-weight: bold;
	line-height: 33px;
  text-align: center;
  margin: 0 0 40px 0;
`
);

const SubHeader = styled.h4(
  ({ theme }) => `
	color: ${theme.colors.primaryLighter};
	font-size: 16px;
	font-weight: bold;
  line-height: 19px;
  margin: 0 0 16px 0;
`
);
const SubSectionDivider = styled.div`
  height: 48px;
`

const ColumnsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Column = styled.div(
  props => `
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`
);

const Block = styled.div<any>(
  props => `
  display: flex;
  flex-direction: column;
  align-items: ${props.align || `center`};
`
);

const LinkWithIconWrapper = styled.span<any>(
  props => `
  display: inline-flex;
  align-items:center;
  height: 35px;
  & a {
    margin: ${props.anchorMargin}
  }
`)
const LinkWithIcon: React.FC<{ iconLeft?: React.ReactNode, iconRight?: React.ReactNode } & HTMLAttributes<
  HTMLAnchorElement
>> = props => {
  const { iconLeft, iconRight, ...anchorProps } = props;
  const anchorMargin = iconLeft ? `0 0 0 16px` : iconRight ? `0 16px 0 0` : `0`
  return (
    <LinkWithIconWrapper anchorMargin={anchorMargin}>
      {iconLeft}
      <a {...anchorProps} />
      {iconRight}
    </LinkWithIconWrapper>
  );
};

const HorizontalFlex = styled.div`
  display: flex;
  justify-content: center;
`

const CopyrightNotice = styled.div(props => `
	color: ${props.theme.colors.bgLightest};
	font-size: 15px;
	font-weight: 500;
	line-height: 19px;
`)

const Footer: React.FC<{}> = props => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <NavBlock>
        <StyledLocalizedLink to="/products">
          {t(`products`)}
        </StyledLocalizedLink>
        <StyledLocalizedLink to="/learn">{t(`learn`)}</StyledLocalizedLink>
        <StyledLocalizedLink to="/community">
          {t(`community`)}
        </StyledLocalizedLink>
        <StyledLocalizedLink to="/faq">{t(`faqShort`)}</StyledLocalizedLink>
      </NavBlock>
      <Header>{t(`footer.welcome`)}</Header>
      <ColumnsWrapper>
        <Column>
          <Block align="flex-start">
            <SubHeader>{t(`footer.headerTGPublic`)}</SubHeader>
            <LinkWithIcon iconLeft={<TelegramIcon />}>
              {t(`footer.linkTGVigorstablecoin`)}
            </LinkWithIcon>
            <LinkWithIcon />
            <LinkWithIcon />
            <SubSectionDivider />
            <SubHeader>{t(`footer.headerTGPWG`)}</SubHeader>
            <LinkWithIcon iconLeft={<TelegramIcon />}>
              {t(`footer.linkTGVigorGov`)}
            </LinkWithIcon>
            <LinkWithIcon iconLeft={<TelegramIcon />}>
              {t(`footer.linkTGVigorDev`)}
            </LinkWithIcon>
            <LinkWithIcon iconLeft={<TelegramIcon />}>
              {t(`footer.linkTGVigorMedia`)}
            </LinkWithIcon>
            <LinkWithIcon iconLeft={<TelegramIcon />}>
              {t(`footer.linkTGVigorWebsite`)}
            </LinkWithIcon>
            <LinkWithIcon iconLeft={<TelegramIcon />}>
              {t(`footer.linkTGVigorMarketing`)}
            </LinkWithIcon>
          </Block>
        </Column>
        <Column>mid</Column>
        <Column>
          <Block align="flex-end">
            <SubHeader>{t(`footer.headerDACClients`)}</SubHeader>
            <LinkWithIcon iconRight={<TelegramIcon />}>
              {t(`footer.linkVigorAI`)}
            </LinkWithIcon>
            <LinkWithIcon iconRight={<TelegramIcon />}>
              {t(`footer.linkVigAI`)}
            </LinkWithIcon>
            <LinkWithIcon iconRight={<TelegramIcon />}>
              {t(`footer.linkVigstack`)}
            </LinkWithIcon>
            <SubSectionDivider />
            <SubHeader>{t(`footer.headerDocs`)}</SubHeader>
            <LinkWithIcon iconRight={<TelegramIcon />}>
              {t(`footer.linkDocsSummary`)}
            </LinkWithIcon>
            <LinkWithIcon iconRight={<TelegramIcon />}>
              {t(`footer.linkDocsWPen`)}
            </LinkWithIcon>
            <LinkWithIcon iconRight={<TelegramIcon />}>
              {t(`footer.linkDocsWPzh`)}
            </LinkWithIcon>
            <LinkWithIcon iconRight={<TelegramIcon />}>
              {t(`footer.linkDocsWPes`)}
            </LinkWithIcon>
            <LinkWithIcon iconRight={<TelegramIcon />}>
              {t(`footer.linkDocsWPid`)}
            </LinkWithIcon>
          </Block>
        </Column>
      </ColumnsWrapper>
      <HorizontalFlex>
        <CopyrightNotice>{t(`footer.copyRight`)}</CopyrightNotice>
      </HorizontalFlex>
    </Wrapper>
  );
};

export default Footer;
