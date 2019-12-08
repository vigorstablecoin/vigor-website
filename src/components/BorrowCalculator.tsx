import React, { useState, useEffect } from 'react';
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
  padding: 15px 0;
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

function calculate(loanAmount: number, loanCurrency: string, collateralAmount: number, collateralCurrency: string, dummyData: any, setResult: any) {
  const loanCurrencyRate = dummyData.exchangeRates.USD[loanCurrency];
  const collateralCurrencyRate = dummyData.exchangeRates.USD[collateralCurrency];

  const loanValue = loanCurrencyRate * loanAmount;
  const collateralValue = collateralCurrencyRate * collateralAmount;

  const ltv = loanValue / collateralValue * 100;
  const interestRate = 4;
  const serviceFee = 0;
  const creditScore = ltv * 5;
  const repaymentAmount = loanValue + (loanValue * (interestRate / 100));

  setResult({
    ltv,
    interestRate,
    serviceFee,
    creditScore,
    repaymentAmount,
  });
}

interface Results {
  ltv: number;
  interestRate: number;
  serviceFee: number;
  creditScore: number;
  repaymentAmount: number;
}

const BorrowCalculator: React.FC = props => {
  const { t } = useTranslation();

  // @todo: replace dummy data with actual data source
  const [ dummyData, /* setDummyData */ ] = useState({
    exchangeRates: {
      USD: {
        VIGOR: 0.00092,
        EOS: 2.72,
        BTC: 7500,
      },
      BTC: {
        VIGOR: 0.00092,
        EOS: 2.72,
        BTC: 1,
      },
      EOS: {
        VIGOR: 0.00092,
        EOS: 1,
        BTC: 7500,
      },
      VIGOR: {
        VIGOR: 1,
        EOS: 2.72,
        BTC: 7500,
      }
    }
  });

  const [ loanAmount, setLoanAmount ] = useState<number>(1000);
  const [ collateralAmount, setCollateralAmount ] = useState<number>(0.5);

  const [ loanCurrency, setLoanCurrency ] = useState<string>('VIGOR');
  const [ collateralCurrency, setCollateralCurrency ] = useState<string>('EOS');

  const [ results, setResults ] = useState<Results>({
    ltv: 0,
    interestRate: 0,
    serviceFee: 0,
    creditScore: 0,
    repaymentAmount: 0,
  });

  useEffect(() => {
    calculate(loanAmount, loanCurrency, collateralAmount, collateralCurrency, dummyData, setResults);
  }, [loanAmount, loanCurrency, collateralAmount, collateralCurrency]);

  return (
    <BorrowCalculatorWrap>
      <AmountWrap>
        <AmountInputWrap>
          <AmountInputLabel htmlFor="loanAmount">{ t(`loanAmount`) }</AmountInputLabel>
          <FlexRow>
            <StyledInput type="number" id="loanAmount" name="loanAmount"
                         value={loanAmount}
                         onChange={(e) => setLoanAmount(Number(e.target.value))}
            />
            <StyledSelect value={loanCurrency}
                          onChange={(e) => setLoanCurrency(e.target.value)}
            >
              <option value="VIGOR">VIGOR</option>
              <option value="BTC">BTC</option>
            </StyledSelect>
          </FlexRow>
        </AmountInputWrap>
        <AmountInputWrap>
          <AmountInputLabel>{ t(`collateralAmount`) }</AmountInputLabel>
          <FlexRow>
            <StyledInput type="number" id="collateralAmount" name="collateralAmount"
                         value={collateralAmount}
                         onChange={(e) => setCollateralAmount(Number(e.target.value))}
            />
            <StyledSelect value={collateralCurrency}
                          onChange={(e) => setCollateralCurrency(e.target.value)}
            >
              <option value="EOS">EOS</option>
              <option value="BTC">BTC</option>
            </StyledSelect>
          </FlexRow>
        </AmountInputWrap>
      </AmountWrap>
      <ResultWrap>
        <FlexRowSpaceBetween>
          <ResultLabel>{ t(`loanToValue`) }</ResultLabel>
          <ResultValue>{ Math.round(results.ltv * 100) / 100 }%</ResultValue>
        </FlexRowSpaceBetween>
        <FlexRowSpaceBetween>
          <ResultLabel>{ t(`interestRate`) }</ResultLabel>
          <ResultValue>{ Math.round(results.interestRate * 100) / 100 }%</ResultValue>
        </FlexRowSpaceBetween>
        <FlexRowSpaceBetween>
          <ResultLabel>{ t(`serviceFee`) }</ResultLabel>
          <ResultValue>{ results.serviceFee === 0 ? 'No Fees' : Math.round(results.serviceFee * 100) / 100 }</ResultValue>
        </FlexRowSpaceBetween>
        <FlexRowSpaceBetween>
          <ResultLabel>{ t(`creditScore`) }</ResultLabel>
          <ResultValue>{ Math.round(results.creditScore) }</ResultValue>
        </FlexRowSpaceBetween>
        <Divider/>
        <FlexRowSpaceBetween>
          <ResultLabel>{ t(`estRepaymentAmount`) }</ResultLabel>
          <RepaymentAmount>${ Math.round(results.repaymentAmount * 100) / 100 }</RepaymentAmount>
        </FlexRowSpaceBetween>
      </ResultWrap>
      <ButtonWrap>
        <BlueButton as="button" margin="0" fullWidth={true}>{ t(`comingSoon`) }</BlueButton>
      </ButtonWrap>
    </BorrowCalculatorWrap>
  );
};

export default BorrowCalculator;
