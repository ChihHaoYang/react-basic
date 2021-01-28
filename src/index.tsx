import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import LocaleProvider from './locales/Provider';
import ThemeProvider from './theme/Provider';
import PickerProvider from './theme/PickerProvider';

import App from './App';
import store from './store';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <LocaleProvider>
        <ThemeProvider>
          <PickerProvider>
            <CssBaseline />
            <App />
          </PickerProvider>
        </ThemeProvider>
      </LocaleProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
