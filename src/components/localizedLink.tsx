import React from "react";
import { Link } from "gatsby";
import LocaleContext from "../localeContext";
import locales from "../../config/i18n";

type Props = {
  to: string;
}
// Use the globally available context to choose the right path
const LocalizedLink: React.FC<Props> = ({ to, ...props }) => {
  const { locale } = React.useContext<{ locale: string }>(LocaleContext);

  const isIndex = to === `/`;

  // If it's the default language, don't do anything
  // If it's another language, add the "path"
  // However, if the homepage/index page is linked don't add the "to"
  // Because otherwise this would add a trailing slash
  const localeObject = (locales as any)[locale]!
  const path = localeObject.default
    ? to
    : `${localeObject.path}${isIndex ? `` : `${to}`}`;

  return <Link {...props} to={path} />;
};

export default LocalizedLink;
