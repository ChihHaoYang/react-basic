import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { LocalizationProvider } from '@material-ui/lab';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
// import { useSelector } from 'react-redux';
import enLocale from 'date-fns/locale/en-US';
import twLocale from 'date-fns/locale/zh-TW';
import jaLocale from 'date-fns/locale/ja';

const PickerProvider: React.FC = ({ children }) => {
  // const locale = useSelector((state) => state.user.locale);

  const localeMap = {
    en: enLocale,
    tw: twLocale,
    ja: jaLocale,
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={localeMap['tw']}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        {children}
      </LocalizationProvider>
    </MuiPickersUtilsProvider>
  );
};

export default PickerProvider;