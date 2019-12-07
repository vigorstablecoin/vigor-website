import React from 'react';
import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useTranslation } from 'react-i18next';

const CalculatorWrap = styled.div`
  padding: 16px;
  height: 100%;
`;

const StyledTabs = styled(Tabs)`
  height: 100%;
`;

const StyledTabList = styled(TabList)`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  list-style-type: none;
`;

const StyledTab = styled(Tab)`
  cursor: pointer;
  width: 100%;
  text-align: center;
  font-size: 18px;
  background-color: ${ props => props.theme.colors.bgLighter };
  padding: 22px 0;
  
  &:first-child {
    border-radius: 8px 0 0 0;
  }
  
  &:last-child {
    border-radius: 0 8px 0 0;
  }
  
  &:not(.is-selected) {
    background-color: ${ props => props.theme.colors.primary };
  }
`;

const StyledTabPanel = styled(TabPanel)`
    background-color: ${ props => props.theme.colors.bgLighter };
    display: none;
    padding: 16px;
    border-radius: 0 0 8px 8px;
    height: calc(100% - 66px);
    
    &.is-selected {
      display: block;
    }
`;

const Hero: React.FC = props => {
  const { t } = useTranslation();

  return (
    <CalculatorWrap>
        <StyledTabs
          selectedTabClassName='is-selected'
          selectedTabPanelClassName='is-selected'
        >
          <StyledTabList>
            <StyledTab>{ t(`Borrow`) }</StyledTab>
            <StyledTab>{ t(`Earn`) }</StyledTab>
          </StyledTabList>
          <StyledTabPanel>
            Borrow content
          </StyledTabPanel>
          <StyledTabPanel>
            Earn content
          </StyledTabPanel>
        </StyledTabs>
    </CalculatorWrap>
  );
};

export default Hero;
