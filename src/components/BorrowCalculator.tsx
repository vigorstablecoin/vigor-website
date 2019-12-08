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
  &:last-child {
    margin-left: 16px;
  }
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

const FlexRowSpaceBetween = styled(FlexRow)`
  justify-content: space-between;
  margin-bottom: 8px;
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
  text-align: right;
  padding: 15px;
  width: 100%;
`;

const StyledSelect = styled.select`
  ${ InputStyle }
  margin-left: 8px;
`;

const ResultWrap = styled.div`
  padding: 22px;
`;

const ResultLabel = styled.div`
  font-weight: 600;
  font-size: 14px;
  height: 34px;
  line-height: 34px;
`;

const ResultValue = styled(ResultLabel)`
  color: ${ props => props.theme.colors.secondary };
  background-color: ${ props => props.theme.colors.bg };
  border-radius: 8px;
  width: 86px;
  text-align: center;
`;

const Divider = styled.div`
  background-color: ${ props => props.theme.colors.bg };
  height: 1px;
  width: 100%;
  margin: 16px 0;
`;

const RepaymentAmount = styled(ResultLabel)`
  font-size: 20px;
  color: ${ props => props.theme.colors.primaryLighter };
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
      <ResultWrap>
        <FlexRowSpaceBetween>
          <ResultLabel>LTV (Loan-to-Value Ratio)</ResultLabel>
          <ResultValue>90%</ResultValue>
        </FlexRowSpaceBetween>
        <FlexRowSpaceBetween>
          <ResultLabel>Interest Rate</ResultLabel>
          <ResultValue>3.4%</ResultValue>
        </FlexRowSpaceBetween>
        <FlexRowSpaceBetween>
          <ResultLabel>Service Fee</ResultLabel>
          <ResultValue>No Fees</ResultValue>
        </FlexRowSpaceBetween>
        <FlexRowSpaceBetween>
          <ResultLabel>Credit Score</ResultLabel>
          <ResultValue>760</ResultValue>
        </FlexRowSpaceBetween>
        <Divider/>
        <FlexRowSpaceBetween>
          <ResultLabel>Est. Repayment Amount</ResultLabel>
          <RepaymentAmount>$1,034</RepaymentAmount>
        </FlexRowSpaceBetween>
      </ResultWrap>
      <ButtonWrap>
        <BlueButton as="button" margin="0" fullWidth={true}>{ t(`comingSoon`) }</BlueButton>
      </ButtonWrap>
    </BorrowCalculatorWrap>
  );
};

export default BorrowCalculator;
