import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { BlueButton, StyledInput, FlexRow } from './shared/';

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
  width: 90px;
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

function calculate(loanAmount: number, loanCurrency: string, collateralAmount: number, collateralCurrency: string, dummyData: any): Results {
  const loanCurrencyRate = dummyData.exchangeRates.USD[loanCurrency];
  const collateralCurrencyRate = dummyData.exchangeRates.USD[collateralCurrency];

  const loanValue = loanCurrencyRate * loanAmount;
  const collateralValue = collateralCurrencyRate * collateralAmount;

  const ltv = loanValue / collateralValue * 100;
  const interestRate = 4; // @todo: get rate from somewhere
  const serviceFee = 0; // @todo: service fee?
  const creditScore = ltv * 5; // @todo: calculate? currency?
  const repaymentAmount = loanValue + (loanValue * (interestRate / 100));

  return {
    ltv,
    interestRate,
    serviceFee,
    creditScore,
    repaymentAmount,
  };
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

  const [ loanAmount, setLoanAmount ] = useState<number>(150000);
  const [ collateralAmount, setCollateralAmount ] = useState<number>(125);

  const [ loanCurrency, setLoanCurrency ] = useState<string>('VIGOR');
  const [ collateralCurrency, setCollateralCurrency ] = useState<string>('EOS');

  const { ltv, interestRate, serviceFee, creditScore, repaymentAmount } = calculate(loanAmount, loanCurrency, collateralAmount, collateralCurrency, dummyData);

  return (
    <BorrowCalculatorWrap>
      <AmountWrap>
        <AmountInputWrap>
          <AmountInputLabel htmlFor="loanAmount">{ t(`loanAmount`) }</AmountInputLabel>
          <FlexRow>
            <StyledInput as="number" id="loanAmount" name="loanAmount" autoComplete="off"
                         value={loanAmount}
                         onChange={(e) => setLoanAmount(Number(e.target.value))}
            />
            <StyledInput as="select" value={loanCurrency}
                          onChange={(e) => setLoanCurrency(e.target.value)}
            >
              <option value="VIGOR">VIGOR</option>
            </StyledInput>
          </FlexRow>
        </AmountInputWrap>
        <AmountInputWrap>
          <AmountInputLabel>{ t(`collateralAmount`) }</AmountInputLabel>
          <FlexRow>
            <StyledInput as="number" id="collateralAmount" name="collateralAmount" autoComplete="off"
                         value={collateralAmount}
                         onChange={(e) => setCollateralAmount(Number(e.target.value))}
            />
            <StyledInput as="select" value={collateralCurrency}
                          onChange={(e) => setCollateralCurrency(e.target.value)}
            >
              <option value="EOS">EOS</option>
            </StyledInput>
          </FlexRow>
        </AmountInputWrap>
      </AmountWrap>
      <ResultWrap>
        <FlexRow as="spaceBetween">
          <ResultLabel>{ t(`loanToValue`) }</ResultLabel>
          <ResultValue>{ Math.round(ltv * 100) / 100 }%</ResultValue>
        </FlexRow>
        <FlexRow as="spaceBetween">
          <ResultLabel>{ t(`interestRate`) }</ResultLabel>
          <ResultValue>{ Math.round(interestRate * 100) / 100 }%</ResultValue>
        </FlexRow>
        <FlexRow as="spaceBetween">
          <ResultLabel>{ t(`serviceFee`) }</ResultLabel>
          <ResultValue>{ serviceFee === 0 ? 'No Fees' : Math.round(serviceFee * 100) / 100 }</ResultValue>
        </FlexRow>
        <FlexRow as="spaceBetween">
          <ResultLabel>{ t(`creditScore`) }</ResultLabel>
          <ResultValue>{ Math.round(creditScore) }</ResultValue>
        </FlexRow>
        <Divider/>
        <FlexRow as="spaceBetween">
          <ResultLabel>{ t(`estRepaymentAmount`) }</ResultLabel>
          <RepaymentAmount>${ Math.round(repaymentAmount * 100) / 100 }</RepaymentAmount>
        </FlexRow>
      </ResultWrap>
      <ButtonWrap>
        <BlueButton as="button" margin="0" fullWidth={true}>{ t(`comingSoon`) }</BlueButton>
      </ButtonWrap>
    </BorrowCalculatorWrap>
  );
};

export default BorrowCalculator;
