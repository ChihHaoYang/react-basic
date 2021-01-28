import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import enLocaleData from './en';
import jaLocaleData from './ja';
import zhLocaleData from './zh';
import { RootState } from '../store/reducers';


interface LocaleDataMap {
  [lang: string]: {
    [wordString: string]: string;
  }
}
const Provider: React.FC = ({ children }) => {
  const browserLang = useSelector((state: RootState) => state.user.browserLang);
  const localeDataMap: LocaleDataMap = {
    'en-us': enLocaleData,
    'en': enLocaleData,
    'ja-jp': jaLocaleData,
    'ja': jaLocaleData,
    'zh-tw': zhLocaleData,
    'zh': zhLocaleData,
  };
  const localeData = localeDataMap[browserLang] || zhLocaleData;
  const providerLocale = browserLang.split('-')[0];

  return (
    <IntlProvider locale={providerLocale} textComponent="span" messages={localeData}>
      {children}
    </IntlProvider>
  )
}

export default Provider;