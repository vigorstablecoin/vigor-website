import React from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.div`
  padding: 16px;
`;

const HeroTitle = styled.h1`
  text-transform: uppercase;
  color: ${props => props.theme.colors.primary};
  font-size: 56px;
  font-weight: 700;
  margin: 16px 0;
`;

const HeroTitleSeparator = styled.div`
  width: 81px;
  height: 2px;
  background-color: ${props => props.theme.colors.secondary};
`;

const HeroContent = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin: 16px 0 71px 0;
`;

// @todo: this should come from a global base button style
const HeroLinkWrap = styled.div`
  a {
    padding: 11px 50px;
    border-radius: 4px;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    text-decoration: none;
    font-size: 14px;
  }
`;

type Props = {
  title: string,
  content: React.ReactNode,
  link: React.ReactNode,
};

const Hero: React.FC<Props> = props => {
  const { title, content, link } = props;

  return (
    <HeroWrapper>
      <HeroTitle>{ title }</HeroTitle>
      <HeroTitleSeparator/>
      <HeroContent>{ content }</HeroContent>
      <HeroLinkWrap>{ link }</HeroLinkWrap>
    </HeroWrapper>
  );
};

export default Hero;
