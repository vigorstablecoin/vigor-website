import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { BlueButton } from './shared';

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

const FlexRow = styled.div`
  display: flex;
  width: 100%;
`;

const FlexRowSpaceBetween = styled(FlexRow)`
  justify-content: space-between;
  
  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
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
        <FlexRowSpaceBetween>
          <StyledInput type="number" id="insuranceCollateralAmount" name="insuranceCollateralAmount" autoComplete="off"
                       value={collateralAmount}
                       onChange={(e) => setCollateralAmount(Number(e.target.value))}
          />
          <StyledSelect value={collateralCurrency}
                        onChange={(e) => setCollateralCurrency(e.target.value)}
          >
            <option value="EOS">EOS</option>
          </StyledSelect>
        </FlexRowSpaceBetween>
      <ResultWrap>
        <FlexRowSpaceBetween>
          <ResultLabel>{ t(`investmentAmount`) }</ResultLabel>
          <ResultValue>${ Math.round(investmentAmount * 100) / 100 }</ResultValue>
        </FlexRowSpaceBetween>
        <FlexRowSpaceBetween>
          <ResultLabel>{ t(`interestRate`) }</ResultLabel>
          <ResultValue>{ Math.round(interestRate * 100) / 100 }%</ResultValue>
        </FlexRowSpaceBetween>
        <Divider/>
        <FlexRowSpaceBetween>
          <ResultLabel>{ t(`estRepaymentAmount`) }</ResultLabel>
          <RepaymentAmount>${ Math.round(repaymentAmount * 100) / 100 }</RepaymentAmount>
        </FlexRowSpaceBetween>
      </ResultWrap>
      <ButtonWrap>
        <BlueButton as="button" margin="0" fullWidth={true}>{ t(`comingSoon`) }</BlueButton>
      </ButtonWrap>
    </BorrowCalculatorWrap>
  );
};

export default EarnCalculator;
