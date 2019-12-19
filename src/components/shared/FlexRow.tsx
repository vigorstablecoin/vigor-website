import styled from "styled-components";
import React from "react";

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

