import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const TableWrap = styled.div`
  font-weight: 400;
`;

const TableRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

const TableColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  
  @media (min-width: 768px) {
    order: 2;
  }
`;

const TableColumnHeader = styled(TableColumn)`
  @media (min-width: 768px) {
    order: 1;
  }
`;

const TableColumnPrimary = styled(TableColumn)`
  @media (min-width: 768px) {
    order: 1;
  }
`;

const CompareDeFiTable: React.FC = props => {
  const { t } = useTranslation();

  return (
    <TableWrap role="table">
      <TableRow role="row">
        <TableColumnHeader role="rowheader"/>
        <TableColumn role="cell">[ MKR LOGO ]</TableColumn>
        <TableColumnPrimary role="cell">[ VIG LOGO ]</TableColumnPrimary>
        <TableColumn role="cell">[ EQUI LOGO ]</TableColumn>
      </TableRow>
      <TableRow role="row">
        <TableColumnHeader role="rowheader">Stablecoin Token</TableColumnHeader>
        <TableColumn role="cell">DAI</TableColumn>
        <TableColumnPrimary role="cell">VIGOR</TableColumnPrimary>
        <TableColumn role="cell">EOSDT</TableColumn>
      </TableRow>
      <TableRow role="row">
        <TableColumnHeader role="rowheader">Fee Token</TableColumnHeader>
        <TableColumn role="cell">MKR</TableColumn>
        <TableColumnPrimary role="cell">VIG</TableColumnPrimary>
        <TableColumn role="cell">NUT</TableColumn>
      </TableRow>
      <TableRow role="row">
        <TableColumnHeader role="rowheader">Collateral backed</TableColumnHeader>
        <TableColumn role="cell">YES</TableColumn>
        <TableColumnPrimary role="cell">YES</TableColumnPrimary>
        <TableColumn role="cell">YES</TableColumn>
      </TableRow>
      <TableRow role="row">
        <TableColumnHeader role="rowheader">Collateral Requirement</TableColumnHeader>
        <TableColumn role="cell">150%</TableColumn>
        <TableColumnPrimary role="cell">111%</TableColumnPrimary>
        <TableColumn role="cell">130%</TableColumn>
      </TableRow>
      <TableRow role="row">
        <TableColumnHeader role="rowheader">Short Selling</TableColumnHeader>
        <TableColumn role="cell">NO</TableColumn>
        <TableColumnPrimary role="cell">YES</TableColumnPrimary>
        <TableColumn role="cell">NO</TableColumn>
      </TableRow>
    </TableWrap>
  );
};

export default CompareDeFiTable;
