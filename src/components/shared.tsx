import React from "react";
import styled, { css } from "styled-components";

const BlueButtonStyles = css`
  font-size: 14px;
  line-height: 18px;
  font-weight: bold;
  text-align: center;
  height: 40px;
  padding: 11px 30px;
  margin: ${props => (props as any).margin || '0'};
  width: ${props => (props as any).fullWidth ? '100%' : 'initial'};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLighter};
  }
`;

const BlueButtonButton = styled.button`
  ${BlueButtonStyles}
`;
const BlueButtonAnchor = styled.a`
  ${BlueButtonStyles}
`;

type BlueButtonProps = {
  as: 'a' | 'button',
  margin: string,
  fullWidth?: boolean,
};
export const BlueButton: React.FC<BlueButtonProps &
  React.HTMLProps<HTMLButtonElement> &
  React.HTMLProps<HTMLAnchorElement>> = ({ as, ...otherProps }) => {
  if (as === 'a') return <BlueButtonAnchor {...(otherProps as any)} />;

  return <BlueButtonButton {...(otherProps as any)} />;
};

type StyledInputProps = {
  as: 'textarea' | 'text' | 'number' | 'select',
};

const InputStyle = css`
  background-color: ${ props => props.theme.colors.bg };
  color: ${ props => props.theme.colors.light };
  border: none;
  border-radius: 4px;
  font-size: 14px;
  line-height: 18px;
`;

const StyledInputNumber = styled.input`
  ${ InputStyle }
  text-align: right;
  padding: 15px 0;
  width: 100%;
`;

const StyledInputText = styled.input`
  ${ InputStyle }
  padding: 15px;
  width: 100%;
`;

const StyledInputTextArea = styled.select`
  ${ InputStyle }
  padding: 15px;
  width: 100%;
`;

const StyledInputSelect = styled.select`
  ${ InputStyle }
  margin-left: 16px;
`;

export const StyledInput: React.FC<StyledInputProps &
  React.HTMLProps<HTMLInputElement> &
  React.HTMLProps<HTMLSelectElement> &
  React.HTMLProps<HTMLTextAreaElement>> = ({ as, ...otherProps}) => {

  if (as === 'select') {
    return <StyledInputSelect type={as} {...(otherProps as any) }/>;
  }

  if (as === 'textarea') {
    return <StyledInputTextArea type={as} {...(otherProps as any) }/>;
  }

  if (as === 'number') {
    return <StyledInputNumber type={as} {...(otherProps as any) }/>;
  }

  return <StyledInputText type="text" {...(otherProps as any) }/>
};

/**
 * Flex
 */
type FlexRowProps = {
  as?: 'spaceBetween' | 'spaceAround',
};

const FlexRowStyle = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 8px;
`;

const FlexRowSpaceBetweenStyle = styled(FlexRowStyle)`
  justify-content: space-between;
`;

const FlexRowSpaceAroundStyle = styled(FlexRowStyle)`
  justify-content: space-around;
`;

export const FlexRow: React.FC<FlexRowProps & React.HTMLProps<HTMLDivElement>> = ({ as, ...otherProps }) => {
  if (as === 'spaceBetween') {
    return <FlexRowSpaceBetweenStyle {...(otherProps as any)} />;
  }

  if (as === 'spaceAround') {
    return <FlexRowSpaceAroundStyle {...(otherProps as any)} />;
  }

  return <FlexRowStyle {...(otherProps as any)} />;
};

