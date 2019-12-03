import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import {
  getFullLanguage,
  getLanguageFlag,
  supportedLanguageCodes,
  TLanguageCodes
} from "../utils/languages";
import Menu from "./Menu";
import { LocalizedChangeLanguageLink } from "./LocalizedLink";

const languageOptions = supportedLanguageCodes.map(code => ({
  content: getFullLanguage(code),
  icon: getLanguageFlag(code),
  value: code
}));

const LanguageButton = styled.button`
  font-size: 2rem;
  margin-right: 16px;
  height: 2rem;
`;

const OptionWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100px;
`;

const IconWrapper = styled.div<any>`
  margin-right: 16px;
  font-size: 20px;
`;

export const ItemOption: React.FC<any> = ({ content, icon, value, path }) => (
  <LocalizedChangeLanguageLink currentPath={path} locale={value}>
    <OptionWrapper>
      <IconWrapper>{icon}</IconWrapper>
      <div>{content}</div>
    </OptionWrapper>
  </LocalizedChangeLanguageLink>
);

type Props = {
  path: string;
};
const LanguageDropdown: React.FC<Props> = props => {
  const { i18n } = useTranslation();
  const locale = i18n.language.split(`-`)[0];

  return (
    <Menu
      trigger={
        <LanguageButton>
          {getLanguageFlag(locale as TLanguageCodes)}
        </LanguageButton>
      }
      options={languageOptions}
      onSelect={() => null}
      renderOption={(option: any) => (
        <ItemOption {...option} path={props.path} />
      )}
    />
  );
};

export default LanguageDropdown;
