import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import 'normalize.css'

import App from './App';
import '@/assets/css/index.less'
import store from '@/store'
import { theme } from '@/assets/theme'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
);