import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import store from './app/store/store'
import { Provider } from 'react-redux'
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";

i18next.init({
    interpolation: {escapeValue: false},
    lng: 'es',
    resources: {
        es: {
           global: global_es
        },
        en: {
           global: global_en
        }
    }
});

ReactDOM.render(
    <Provider store={store}>
        <I18nextProvider i18n={i18next}>
    <Router>
        <App />
    </Router>
        </I18nextProvider>
    </Provider>,
    document.getElementById("root")
);
