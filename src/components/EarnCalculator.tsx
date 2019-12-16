import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { BlueButton, StyledInput, FlexRow } from './shared';

const BorrowCalculatorWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
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

function calculate(collateralAmount: number, collateralCurrency: string, dummyData: any): Results {
  const collateralCurrencyRate = dummyData.exchangeRates.USD[collateralCurrency];
  const collateralValue = collateralCurrencyRate * collateralAmount;

  const interestRate = 3.4; // @todo: get rate from somewhere
  const repaymentAmount = collateralValue + (collateralValue * (interestRate / 100));

  return {
    investmentAmount: collateralValue,
    interestRate,
    repaymentAmount,
  };
}

interface Results {
  investmentAmount: number,
  interestRate: number;
  repaymentAmount: number;
}

const EarnCalculator: React.FC = props => {
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

  const [ collateralAmount, setCollateralAmount ] = useState<number>(150);
  const [ collateralCurrency, setCollateralCurrency ] = useState<string>('EOS');

  const { investmentAmount, interestRate, repaymentAmount } = calculate(collateralAmount, collateralCurrency, dummyData);

  return (
    <BorrowCalculatorWrap>
        <AmountInputLabel>{ t(`insuranceCollateralAmount`) }</AmountInputLabel>
        <FlexRow as="spaceBetween">
          <StyledInput as="number" id="insuranceCollateralAmount" name="insuranceCollateralAmount" autoComplete="off"
                       value={collateralAmount}
                       onChange={(e) => setCollateralAmount(Number(e.target.value))}
          />
          <StyledInput as="select" value={collateralCurrency}
                        onChange={(e) => setCollateralCurrency(e.target.value)}
          >
            <option value="EOS">EOS</option>
          </StyledInput>
        </FlexRow>
      <ResultWrap>
        <FlexRow as="spaceBetween">
          <ResultLabel>{ t(`investmentAmount`) }</ResultLabel>
          <ResultValue>${ Math.round(investmentAmount * 100) / 100 }</ResultValue>
        </FlexRow>
        <FlexRow as="spaceBetween">
          <ResultLabel>{ t(`interestRate`) }</ResultLabel>
          <ResultValue>{ Math.round(interestRate * 100) / 100 }%</ResultValue>
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

export default EarnCalculator;
