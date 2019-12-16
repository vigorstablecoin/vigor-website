import styled, {css} from "styled-components";
import React from "react";

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
