import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import EosWriter from "../assets/svgs/partner/eoswriter.svg";
import EosDAC from "../assets/svgs/partner/eosdac.svg";
import NewDex from "../assets/svgs/partner/newdex.svg";
import Moran from "../assets/images/partner/moran.png";
import NovaWallet from "../assets/images/partner/novawallet.png";
import TokenPocket from "../assets/images/partner/tokenpocket.png";
import MathWallet from "../assets/images/partner/MathWallet.png";
import Lynx from "../assets/images/partner/lynx.png";
import LiquidApps from "../assets/svgs/partner/liquidapps_logo.svg";
import MeetOne from "../assets/images/partner/meetone.png";
import StartEOS from "../assets/images/partner/StartEOS.png";
import Layer from "../assets/svgs/partner/layer.svg";
import Dice from "../assets/images/partner/dice.png";
import Lumi from "../assets/svgs/partner/Lumi.svg";
import UpliftNation from "../assets/svgs/partner/uplift-nation.svg";
import Scatter from "../assets/svgs/partner/scatter-logo.svg";
import EverythingEOS from "../assets/images/partner/everything-eos.png";
import { media } from "../utils/breakpoints";

const PartnersWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 62px;
`;

const Headline = styled.h2`
  font-size: 32px;
  font-weight: bold;
  letter-spacing: 0.6px;
  line-height: 56px;
  color: ${p => p.theme.colors.primary};
  text-align: center;
`;

const LogosWrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  width: 100%;
  max-width: ${p => p.theme.breakpoints.md}px;

  grid-template-columns: 25% 25% 25% 25%;
  grid-gap: 48px 0;

  & > *:last-child {
    grid-column: 1 / span 4;
  }

  ${media.lessThan(`md`)} {
    grid-template-columns: 50% 50%;
    grid-gap: 36px 0;

    & > *:last-child {
      grid-column: 1 / span 2;
    }
  }
`;

type Props = {};

const Logo: React.FC<{ logo: any; height?: number }> = ({ logo, height }) => {
  if (typeof logo === `string`) {
    return <img height={height || 40} src={logo} />;
  }

  const Element = logo;
  return <Element height={height || 40} />;
};

const Partners: React.FC<Props> = props => {
  const { t } = useTranslation();

  return (
    <PartnersWrapper>
      <Headline>{t(`partners`)}</Headline>
      <LogosWrapper>
        <Logo logo={EosWriter} />
        <Logo logo={EosDAC} />
        <Logo logo={NewDex} />
        <Logo logo={Moran} />
        <Logo logo={NovaWallet} height={30} />
        <Logo logo={TokenPocket} height={25} />
        <Logo logo={MathWallet} height={20} />
        <Logo logo={Lynx} height={35} />
        <Logo logo={LiquidApps} />
        <Logo logo={MeetOne} />
        <Logo logo={StartEOS} />
        <Logo logo={Layer} />
        <Logo logo={Dice} />
        <Logo logo={Lumi} />
        <Logo logo={UpliftNation} />
        <Logo logo={Scatter} />
        <Logo logo={EverythingEOS} />
      </LogosWrapper>
    </PartnersWrapper>
  );
};

export default Partners;
