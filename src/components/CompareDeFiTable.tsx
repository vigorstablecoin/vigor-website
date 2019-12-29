import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import {media} from "../utils/breakpoints";

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
  
  ${media.lessThan('sm-max')} {
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
  
  ${media.lessThan('sm-max')} {
    order: 1;
  }
`;

const TableColumnPrimary = styled(TableColumn)`  
  background-color: ${({ theme }) => theme.colors.primary};
  
  ${media.lessThan('sm-max')} {
    order: 1;
  }
`;

const TableColumnSecondary = styled(TableColumn)`
  
`;

const TableRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  
  :not(:last-of-type):not(:first-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.bg}
  }

  :first-of-type {
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
  
  : last-of-type {
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

const CompareDeFiTable: React.FC = props => {
  const { t } = useTranslation();

  return (
    <TableWrap role="table">
      <TableRow role="row">
        <TableColumnHeader role="rowheader"/>
        <TableColumnSecondary role="cell">[ MKR LOGO ]</TableColumnSecondary>
        <TableColumnPrimary role="cell">[ VIG LOGO ]</TableColumnPrimary>
        <TableColumnSecondary role="cell">[ EQUI LOGO ]</TableColumnSecondary>
      </TableRow>
      <TableRow role="row">
        <TableColumnHeader role="rowheader">Stablecoin Token</TableColumnHeader>
        <TableColumnSecondary role="cell">DAI</TableColumnSecondary>
        <TableColumnPrimary role="cell">VIGOR</TableColumnPrimary>
        <TableColumnSecondary role="cell">EOSDT</TableColumnSecondary>
      </TableRow>
      <TableRow role="row">
        <TableColumnHeader role="rowheader">Fee Token</TableColumnHeader>
        <TableColumnSecondary role="cell">MKR</TableColumnSecondary>
        <TableColumnPrimary role="cell">VIG</TableColumnPrimary>
        <TableColumnSecondary role="cell">NUT</TableColumnSecondary>
      </TableRow>
      <TableRow role="row">
        <TableColumnHeader role="rowheader">Collateral backed</TableColumnHeader>
        <TableColumnSecondary role="cell">[ YES ]</TableColumnSecondary>
        <TableColumnPrimary role="cell">[ YES ]</TableColumnPrimary>
        <TableColumnSecondary role="cell">[ YES ]</TableColumnSecondary>
      </TableRow>
      <TableRow role="row">
        <TableColumnHeader role="rowheader">Collateral Requirement</TableColumnHeader>
        <TableColumnSecondary role="cell">150%</TableColumnSecondary>
        <TableColumnPrimary role="cell">111%</TableColumnPrimary>
        <TableColumnSecondary role="cell">130%</TableColumnSecondary>
      </TableRow>
      <TableRow role="row">
        <TableColumnHeader role="rowheader">Short Selling</TableColumnHeader>
        <TableColumnSecondary role="cell">[ NO ]</TableColumnSecondary>
        <TableColumnPrimary role="cell">[ YES ]</TableColumnPrimary>
        <TableColumnSecondary role="cell">[ NO ]</TableColumnSecondary>
      </TableRow>
    </TableWrap>
  );
};

export default CompareDeFiTable;
