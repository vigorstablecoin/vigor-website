import React from 'react';
import styled from 'styled-components';

const JumbotronWrapper = styled.div`
  margin-top:152px;
`;

const JumbotronSubtitle = styled.h2`
  font-size: 40px;
  font-weight: bold;
  margin: 16px 0 71px 0;
  max-width: 516px;
  color: ${props => props.theme.colors.primary};
  letter-spacing: 0.75px;
  line-height: 44px;
`;

const JumbotronLinkWrap = styled.div`
  
  a {
    padding: 11px 0;
    color: ${props => props.theme.colors.secondary};
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0.3px;
    line-height:19px;
    text-transform: uppercase;
  }
`;

type Props = {
  subtitle:    string,
  link:     React.ReactNode,
};

const BorrowLendInsure: React.FC<Props> = props => {
  const { subtitle, link } = props;

  return (
    <JumbotronWrapper>
      <JumbotronSubtitle>{ subtitle }</JumbotronSubtitle>
      <JumbotronLinkWrap>{ link }</JumbotronLinkWrap>
    </JumbotronWrapper>
  );
};

export default BorrowLendInsure;
