import React from 'react';
import styled from 'styled-components';

const JumbotronWrapper = styled.div`
  margin-top:152px;
  padding: 16px;
`;

const JumbotronTitle = styled.h1`
  text-transform: uppercase;
  color: ${props => props.theme.colors.white};
  font-size: 56px;
  font-weight: 700;
  margin: 16px 0;
  text-align: center;
`;

const JumbotronTitleSeparator = styled.div`
  width: 81px;
  height: 2px;
  margin: 0 auto;
  background-color: ${props => props.theme.colors.secondary};
`;

const JumbotronContent = styled.p`
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  margin: 16px auto 51px;
  max-width: 58%;
  text-align: center;
  color: ${props => props.theme.colors.primary};
`;

// @todo: this should come from a global base button style
const JumbotronLinkWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  
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
  title:    string,
  content:  React.ReactNode,
  link:     React.ReactNode,
};

const Hero: React.FC<Props> = props => {
  const { title, content, link } = props;

  return (
    <JumbotronWrapper>
      <JumbotronTitle>{ title }</JumbotronTitle>
      <JumbotronTitleSeparator/>
      <JumbotronContent>{ content }</JumbotronContent>
      <JumbotronLinkWrap>{ link }</JumbotronLinkWrap>
    </JumbotronWrapper>
  );
};

export default Hero;
