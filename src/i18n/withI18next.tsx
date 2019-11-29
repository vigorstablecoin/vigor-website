import React, { Component } from "react";
import { I18nextProvider } from "react-i18next";
import LocaleContext from "../localeContext";
import setupI18next from "./setupI18next";

type HocProps = {} & GlobalProps

const withI18next = () => (Comp: React.ComponentType<any>) => {
  class I18nHOC extends Component<HocProps> {
    private i18n:any;
    constructor(props:any) {
      super(props);
      
      this.i18n = setupI18next();
    }

    changeLanguage = () => {
      const { pageContext } = this.props;

      this.addResources(pageContext);
      if(this.i18n.language !== pageContext.locale) {
        this.i18n.changeLanguage(pageContext.locale);
      }
    };

    // @see https://www.i18next.com/overview/api#resource-handling
    // `translation` is the default NS we use consistently.
    addResources = (pageContext:HocProps["pageContext"]) => {
      if (
        pageContext &&
        pageContext.localeResources &&
        pageContext.localeResources.translation
      ) {
        const {
          locale: lng,
          localeResources: { translation }
        } = pageContext;

        if (!this.i18n.hasResourceBundle(lng, "translation")) {
          this.i18n.addResourceBundle(lng, "translation", translation);
        }
      }
    };

    render() {
      const { locale } = this.props.pageContext
      this.changeLanguage()

      return (
        <LocaleContext.Provider
          value={{ locale: this.props.pageContext.locale }}
        >
          <I18nextProvider i18n={this.i18n}>
            <Comp {...this.props} />
          </I18nextProvider>
        </LocaleContext.Provider>
      );
    }
  }

  return I18nHOC;
};

export default withI18next;
