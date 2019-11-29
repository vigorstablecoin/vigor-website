import React from "react";
import { Link } from "gatsby";
import { useTranslation } from "react-i18next";
import LocalizedLink from "./localizedLink";

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <nav>
      <LocalizedLink to="/" aria-label={t(`backToHome`)}>
        Homepage
      </LocalizedLink>
      <div>
        <Link to="/" hrefLang="en">
          English
        </Link>
        {` `}/{` `}
        <Link to="/de" hrefLang="de">
          Deutsch
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
