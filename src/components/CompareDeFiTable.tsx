import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { media } from "../utils/breakpoints";
import VigorLogo from "./VigorLogo";

const TableWrap = styled.div`
  font-weight: 400;
  margin-bottom: 80px;
`;

const TableColumn = styled.div`
  font-weight: 500;
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  text-align: center;
  
  margin-left: 2px;
  padding-top: 18px;
  padding-bottom: 18px;
  
  background-color: ${({ theme }) => theme.colors.bgLighter};
  
  ${media.lessThan('xs-max')} {
    order: 2;
  }
`;

const TableColumnHeader = styled(TableColumn)`
  margin-left: 0;
  font-size: 15px;
  color: #BCBDC1;
  line-height: 19px;
  text-align: initial;
  background-color: ${({ theme }) => theme.colors.bgLight};
  
  padding-left: 44px;
  
  ${media.lessThan('xs-max')} {
    order: 1;
    font-size: 14px;
    padding-left: 17px;
  }
`;

const TableColumnPrimary = styled(TableColumn)`  
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  
  ${media.lessThan('xs-max')} {
    order: 1;
    font-size: 14px;
  }
`;

const TableColumnSecondary = styled(TableColumn)`
  font-size: 16px;
  
  ${media.lessThan('xs-max')} {
    font-size: 14px;
    
    &.hidden {
      display: none;
    }
  }
`;

const TableRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  
  :not(:last-of-type):not(:first-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.bg}
  }

  &.first {
    & > ${TableColumnHeader} {
      border-radius: 4px 0 0 0;
      margin-top: 52px;
      padding-top: 24px;
    }
    
    & > ${TableColumnPrimary} {
      border-radius: 4px 4px 0 0;
      padding-top: 35px;
    }
    
    & > ${TableColumnSecondary} {
      border-radius: 4px 4px 0 0;
      margin-top: 17px;
    }
  }
  
  &.last {
    & > ${TableColumnHeader} {
      border-radius: 0 0 0 4px;
      margin-bottom: 52px;
      padding-bottom: 60px;
    }
    
    & > ${TableColumnPrimary} {
      border-radius: 0 0 4px 4px;
    }
    
    & > ${TableColumnSecondary} {
      border-radius: 0 0 4px 4px;
      margin-bottom: 17px;
    }
  }
`;

const TableFooter = styled(TableRow)`
  display: none;
  justify-content: space-around;
  
  ${media.lessThan('xs-max')} {
    display: flex;
  }
`;

const PagingButton = styled.button`
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.light};
  width: 10px;
  height: 10px;
  
  &:last-of-type {
    margin-left: 10px;
    margin-right: 15px;
  }
  
  &:disabled {
    cursor: initial;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const CompareDeFiTable: React.FC = props => {
  const [ currentColumn, setCurrentColumn ] = useState(0);
  const { t } = useTranslation();

  return (
    <TableWrap role="table">
      <TableRow role="row" className="first">
        <TableColumnHeader role="rowheader"/>
        <TableColumnSecondary role="cell" className={ currentColumn === 1 ? 'hidden' : '' }>[ MKR LOGO ]</TableColumnSecondary>
        <TableColumnPrimary role="cell">
          <VigorLogo height={55} inverted={true} primary={true} horizontal={true} />
        </TableColumnPrimary>
        <TableColumnSecondary role="cell" className={ currentColumn === 0 ? 'hidden' : '' }>[ EQUI LOGO ]</TableColumnSecondary>
      </TableRow>
      <TableRow role="row">
        <TableColumnHeader role="rowheader">Stablecoin Token</TableColumnHeader>
        <TableColumnSecondary role="cell" className={ currentColumn === 1 ? 'hidden' : '' }>DAI</TableColumnSecondary>
        <TableColumnPrimary role="cell">VIGOR</TableColumnPrimary>
        <TableColumnSecondary role="cell" className={ currentColumn === 0 ? 'hidden' : '' }>EOSDT</TableColumnSecondary>
      </TableRow>
      <TableRow role="row">
        <TableColumnHeader role="rowheader">Fee Token</TableColumnHeader>
        <TableColumnSecondary role="cell" className={ currentColumn === 1 ? 'hidden' : '' }>MKR</TableColumnSecondary>
        <TableColumnPrimary role="cell">VIG</TableColumnPrimary>
        <TableColumnSecondary role="cell" className={ currentColumn === 0 ? 'hidden' : '' }>NUT</TableColumnSecondary>
      </TableRow>
      <TableRow role="row">
        <TableColumnHeader role="rowheader">Collateral backed</TableColumnHeader>
        <TableColumnSecondary role="cell" className={ currentColumn === 1 ? 'hidden' : '' }>[ X ]</TableColumnSecondary>
        <TableColumnPrimary role="cell">[ X ]</TableColumnPrimary>
        <TableColumnSecondary role="cell" className={ currentColumn === 0 ? 'hidden' : '' }>[ X ]</TableColumnSecondary>
      </TableRow>
      <TableRow role="row">
        <TableColumnHeader role="rowheader">Collateral Requirement</TableColumnHeader>
        <TableColumnSecondary role="cell" className={ currentColumn === 1 ? 'hidden' : '' }>150%</TableColumnSecondary>
        <TableColumnPrimary role="cell">111%</TableColumnPrimary>
        <TableColumnSecondary role="cell" className={ currentColumn === 0 ? 'hidden' : '' }>130%</TableColumnSecondary>
      </TableRow>
      <TableRow role="row">
        <TableColumnHeader role="rowheader">Borrow Stablecoin</TableColumnHeader>
        <TableColumnSecondary role="cell" className={ currentColumn === 1 ? 'hidden' : '' }>[ X ]</TableColumnSecondary>
        <TableColumnPrimary role="cell">[ X ]</TableColumnPrimary>
        <TableColumnSecondary role="cell" className={ currentColumn === 0 ? 'hidden' : '' }>[ X ]</TableColumnSecondary>
      </TableRow>
      <TableRow role="row">
        <TableColumnHeader role="rowheader">Short Selling</TableColumnHeader>
        <TableColumnSecondary role="cell" className={ currentColumn === 1 ? 'hidden' : '' }>[ - ]</TableColumnSecondary>
        <TableColumnPrimary role="cell">[ X ]</TableColumnPrimary>
        <TableColumnSecondary role="cell" className={ currentColumn === 0 ? 'hidden' : '' }>[ - ]</TableColumnSecondary>
      </TableRow>
      <TableRow role="row">
        <TableColumnHeader role="rowheader">Bailout Mechanism</TableColumnHeader>
        <TableColumnSecondary role="cell" className={ currentColumn === 1 ? 'hidden' : '' }>Auction</TableColumnSecondary>
        <TableColumnPrimary role="cell">Automatic</TableColumnPrimary>
        <TableColumnSecondary role="cell" className={ currentColumn === 0 ? 'hidden' : '' }>Auction</TableColumnSecondary>
      </TableRow>
      <TableRow role="row">
        <TableColumnHeader role="rowheader">Onchain Price Discovery</TableColumnHeader>
        <TableColumnSecondary role="cell" className={ currentColumn === 1 ? 'hidden' : '' }>[ - ]</TableColumnSecondary>
        <TableColumnPrimary role="cell">[ X ]</TableColumnPrimary>
        <TableColumnSecondary role="cell" className={ currentColumn === 0 ? 'hidden' : '' }>[ - ]</TableColumnSecondary>
      </TableRow>
      <TableRow role="row">
        <TableColumnHeader role="rowheader">Risk Modeling & Compliance</TableColumnHeader>
        <TableColumnSecondary role="cell" className={ currentColumn === 1 ? 'hidden' : '' }>[ - ]</TableColumnSecondary>
        <TableColumnPrimary role="cell">[ X ]</TableColumnPrimary>
        <TableColumnSecondary role="cell" className={ currentColumn === 0 ? 'hidden' : '' }>[ - ]</TableColumnSecondary>
      </TableRow>
      <TableRow role="row" className="last">
        <TableColumnHeader role="rowheader">Stress Test Modeling</TableColumnHeader>
        <TableColumnSecondary role="cell" className={ currentColumn === 1 ? 'hidden' : '' }>[ - ]</TableColumnSecondary>
        <TableColumnPrimary role="cell">[ X ]</TableColumnPrimary>
        <TableColumnSecondary role="cell" className={ currentColumn === 0 ? 'hidden' : '' }>[ - ]</TableColumnSecondary>
      </TableRow>
      <TableFooter>
        <div></div>
        <div></div>
        <div></div>
        <div>
          <PagingButton disabled={ currentColumn === 0} onClick={ () => setCurrentColumn(0) }/>
          <PagingButton disabled={ currentColumn === 1 } onClick={ () => setCurrentColumn(1) }/>
        </div>
      </TableFooter>
    </TableWrap>
  );
};

export default CompareDeFiTable;
