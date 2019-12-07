import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { BlueButton } from './shared';

const BorrowCalculatorWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const AmountWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AmountInputWrap = styled.div`
  width: 50%;
`;

const AmountInputLabel = styled.label`
  font-size: 14px;
  font-weight: 400;
  color: ${ props => props.theme.colors.light };
`;

const ButtonWrap = styled.div`
  margin-top: auto;
`;

const BorrowCalculator: React.FC = props => {
  const { t } = useTranslation();

  return (
    <BorrowCalculatorWrap>
      <AmountWrap>
        <AmountInputWrap>
          <AmountInputLabel>Loan Amount</AmountInputLabel>
        </AmountInputWrap>
        <AmountInputWrap>
          <AmountInputLabel>Collateral Amount</AmountInputLabel>
        </AmountInputWrap>
      </AmountWrap>
      <ButtonWrap>
        <BlueButton as="button" margin="0" fullWidth={true}>Coming soon</BlueButton>
      </ButtonWrap>
    </BorrowCalculatorWrap>
  );
};

export default BorrowCalculator;
