export type TLanguageCodes = `en` | `de` | `zh` | `ko`;

export const supportedLanguageCodes:TLanguageCodes[] = [`en`, `de`, `zh`, `ko`];

export const getFullLanguage = (code:TLanguageCodes) => {
    switch (code) {
        case `zh`:
            return `中文`;
        case `ko`:
            return `한국어`;
        case `de`:
            return `Deutsch`;
        case `en`:
        default:
            return `English`;
    }
};

export const getLanguageFlag = (code:TLanguageCodes) => {
    switch (code) {
        case `zh`:
            return `🇨🇳`;
        case `ko`:
            return `🇰🇷`;
        case `de`:
          return `🇩🇪`;
        case `en`:
        default:
            return `🇺🇸`;
    }
};
