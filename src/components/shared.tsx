import React from "react";
import styled, { css } from "styled-components";

const BlueButtonStyles = css`
  font-size: 14px;
  line-height: 18px;
  font-weight: bold;
  text-align: center;
  height: 40px;
  padding: 11px 30px;
  margin: ${props => (props as any).margin || `0`};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const BlueButtonButton = styled.button`
  ${BlueButtonStyles}
`;
const BlueButtonAnchor = styled.a`
  ${BlueButtonStyles}
`;

type BlueButtonProps = {
  as: `a` | `button`;
  margin: string;
};
export const BlueButton: React.FC<BlueButtonProps &
  React.HTMLProps<HTMLButtonElement> &
  React.HTMLProps<HTMLAnchorElement>> = ({ as, ...otherProps }) => {
  if (as === `a`) return <BlueButtonAnchor {...(otherProps as any)} />;

  return <BlueButtonButton {...(otherProps as any)} />;
};
