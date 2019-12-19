import React, { HTMLAttributes, AnchorHTMLAttributes } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import TelegramIcon from "../../assets/svgs/telegram.svg";
import PdfIcon from "../../assets/svgs/pdf.svg";
import BadgeIcon from "../../assets/svgs/badge.svg";
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
`;

const ColumnsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Column = styled.div<any>(
  props => `
  flex: 1 0 auto;
  width: 33.3333%;
  display: flex;
  flex-direction: column;
  align-items: ${props.align || `center`};
`
);

const Block = styled.div<any>(
  props => `
  display: flex;
  flex-direction: column;
  align-items: ${props.align || `center`};
  margin: ${props.margin || `0`}
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
`
);
const LinkWithIcon: React.FC<{
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
} & AnchorHTMLAttributes<any>> = props => {
  const { iconLeft, iconRight, ...anchorProps } = props;
  const anchorMargin = iconLeft ? `0 0 0 16px` : iconRight ? `0 16px 0 0` : `0`;
  return (
    <LinkWithIconWrapper anchorMargin={anchorMargin}>
      {iconLeft}
      <a target="_blank" rel="noopener noreferrer" {...anchorProps} />
      {iconRight}
    </LinkWithIconWrapper>
  );
};

const HorizontalFlex = styled.div`
  display: flex;
  justify-content: center;
`;

const SocialBar = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0 32px 0;

  & > a:not(:last-child) {
    margin: 0 32px 0 0;
  }
`;

const CopyrightNotice = styled.div(
  props => `
	color: ${props.theme.colors.bgLightest};
	font-size: 15px;
	font-weight: 500;
	line-height: 19px;
`
);

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
        <Column align="flex-end">
          <Block align="flex-start">
            <SubHeader>{t(`footer.headerTGPublic`)}</SubHeader>
            <LinkWithIcon
              href="https://t.me/vigorstablecoin"
              iconLeft={<TelegramIcon />}
            >
              {t(`footer.linkTGVigorstablecoin`)}
            </LinkWithIcon>
            <LinkWithIcon />
            <LinkWithIcon />
            <SubSectionDivider />
            <SubHeader>{t(`footer.headerTGPWG`)}</SubHeader>
            <LinkWithIcon
              href="https://t.me/VIGORgov"
              iconLeft={<TelegramIcon />}
            >
              {t(`footer.linkTGVigorGov`)}
            </LinkWithIcon>
            <LinkWithIcon
              href="https://t.me/VIGORdev"
              iconLeft={<TelegramIcon />}
            >
              {t(`footer.linkTGVigorDev`)}
            </LinkWithIcon>
            <LinkWithIcon
              href="https://t.me/VIGORmedia"
              iconLeft={<TelegramIcon />}
            >
              {t(`footer.linkTGVigorMedia`)}
            </LinkWithIcon>
            <LinkWithIcon
              href="https://t.me/VigorWebsiteWG"
              iconLeft={<TelegramIcon />}
            >
              {t(`footer.linkTGVigorWebsite`)}
            </LinkWithIcon>
            <LinkWithIcon
              href="https://t.me/vigormarketingandintegrations"
              iconLeft={<TelegramIcon />}
            >
              {t(`footer.linkTGVigorMarketing`)}
            </LinkWithIcon>
          </Block>
        </Column>
        <Column>
          <Block align="center" margin="48px 0 0 0">
            {/* <img src={BadgeIcon} alt="Vigor Badge" height={245} width={245} /> */}
            <BadgeIcon alt="Vigor Badge" height={245} width={245} />
          </Block>
        </Column>
        <Column align="flex-start">
          <Block align="flex-end">
            <SubHeader>{t(`footer.headerDACClients`)}</SubHeader>
            <LinkWithIcon target="_self" href="https://vigor.ai">
              {t(`footer.linkVigorAI`)}
            </LinkWithIcon>
            <LinkWithIcon target="_self" href="https://vig.ai">
              {t(`footer.linkVigAI`)}
            </LinkWithIcon>
            <LinkWithIcon target="_self" href="https://vigstack.io">
              {t(`footer.linkVigstack`)}
            </LinkWithIcon>
            <SubSectionDivider />
            <SubHeader>{t(`footer.headerDocs`)}</SubHeader>
            <LinkWithIcon href="/vigor.pdf" iconRight={<PdfIcon />}>
              {t(`footer.linkDocsSummary`)}
            </LinkWithIcon>
            <LinkWithIcon href="/vigor.pdf" iconRight={<PdfIcon />}>
              {t(`footer.linkDocsWPen`)}
            </LinkWithIcon>
            <LinkWithIcon href="/vigor.pdf" iconRight={<PdfIcon />}>
              {t(`footer.linkDocsWPzh`)}
            </LinkWithIcon>
            <LinkWithIcon href="/vigor.pdf" iconRight={<PdfIcon />}>
              {t(`footer.linkDocsWPes`)}
            </LinkWithIcon>
            <LinkWithIcon href="/vigor.pdf" iconRight={<PdfIcon />}>
              {t(`footer.linkDocsWPid`)}
            </LinkWithIcon>
          </Block>
        </Column>
      </ColumnsWrapper>
      <SocialBar>
        <a
          href="https://twitter.com/vigorstablecoin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TelegramIcon height={20} />
        </a>
        <a
          href="https://www.reddit.com/r/vigorstablecoin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TelegramIcon height={20} />
        </a>
        <a
          href="https://github.com/vigorstablecoin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TelegramIcon height={20} />
        </a>
        <a
          href="https://t.me/vigorstablecoin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TelegramIcon height={20} />
        </a>
      </SocialBar>
      <HorizontalFlex>
        <CopyrightNotice>{t(`footer.copyright`)}</CopyrightNotice>
      </HorizontalFlex>
    </Wrapper>
  );
};

export default Footer;
