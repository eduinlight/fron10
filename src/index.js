import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import { ThemeProvider } from '@material-ui/styles';
import GlobalDispatchWrapper from './components/GlobalDispatchWrapper'
import theme from './theme';
import Routes from './Routes';
import './styles.css'
import { CssBaseline } from '@material-ui/core';
import { SnackbarProvider } from 'notistack';
import NotiWrapper from './components/NotiWrapper';
import Config from './config';

ReactDOM.render(
  <>
    <CssBaseline />
    <Provider store={store}>
      <GlobalDispatchWrapper>
        <SnackbarProvider
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          transitionDuration={Config.notifications.transitionDuration}
          autoHideDuration={Config.notifications.autoHideDuration}
          maxSnack={3}>
          <NotiWrapper>
            <ThemeProvider theme={theme}>
              <Router>
                <Routes />
              </Router>
            </ThemeProvider>
          </NotiWrapper>
        </SnackbarProvider>
      </GlobalDispatchWrapper>
    </Provider>
  </>
  , document.getElementById('root'));
// document.body)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
