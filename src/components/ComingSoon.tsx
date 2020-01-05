import React from "react";
import styled from 'styled-components'
import { useTranslation } from "react-i18next";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 48px 0 96px 0;
`

const ComingSoon: React.FC<{}> = () => {
  const { t } = useTranslation();

  return <Wrapper>{t(`comingSoon`)}</Wrapper>;
};

export default ComingSoon;
