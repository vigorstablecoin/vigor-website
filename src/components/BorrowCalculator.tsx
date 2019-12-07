import React, { useState } from 'react';
import styled, { css } from 'styled-components';
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
  display: block;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 8px;
  color: ${ props => props.theme.colors.light };
`;

const ButtonWrap = styled.div`
  margin-top: auto;
`;

const FlexRow = styled.div`
  display: flex;
  width: 100%;
`;

const InputStyle = css`
  background-color: ${ props => props.theme.colors.bg };
  color: ${ props => props.theme.colors.light };
  border: none;
  border-radius: 4px;
  font-size: 14px;
  line-height: 18px;
`;

const StyledInput = styled.input`
  ${ InputStyle }
  padding: 15px;
  width: 100px;
`;

const StyledSelect = styled.select`
  ${ InputStyle }
  margin-left: 8px;
`;

const BorrowCalculator: React.FC = props => {
  const { t } = useTranslation();

  const [ loanAmount, setLoanAmount ] = useState(1000);
  const [ collateralAmount, setCollateralAmount ] = useState(900);

  const [ loanCurrency, setLoanCurrency ] = useState('VIGOR');
  const [ collateralCurrency, setCollateralCurrency ] = useState('EOS');

  return (
    <BorrowCalculatorWrap>
      <AmountWrap>
        <AmountInputWrap>
          <AmountInputLabel htmlFor="loanAmount">{ t(`loanAmount`) }</AmountInputLabel>
          <FlexRow>
            <StyledInput type="text" id="loanAmount" name="loanAmount"
                         value={loanAmount}
                         onChange={(e) => setLoanAmount(Number(e.target.value))}
            />
            <StyledSelect value={loanCurrency} onChange={(e) => setLoanCurrency(e.target.value)}>
              <option value="VIGOR">VIGOR</option>
              <option value="BTC">BTC</option>
            </StyledSelect>
          </FlexRow>
        </AmountInputWrap>
        <AmountInputWrap>
          <AmountInputLabel>{ t(`collateralAmount`) }</AmountInputLabel>
          <FlexRow>
            <StyledInput type="text" id="collateralAmount" name="collateralAmount"
                         value={collateralAmount}
                         onChange={(e) => setCollateralAmount(Number(e.target.value))}
            />
            <StyledSelect value={collateralCurrency} onChange={(e) => setCollateralCurrency(e.target.value)}>
              <option value="EOS">EOS</option>
              <option value="BTC">BTC</option>
            </StyledSelect>
          </FlexRow>
        </AmountInputWrap>
      </AmountWrap>
      <ButtonWrap>
        <BlueButton as="button" margin="0" fullWidth={true}>{ t(`comingSoon`) }</BlueButton>
      </ButtonWrap>
    </BorrowCalculatorWrap>
  );
};

export default BorrowCalculator;
