import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import theme from "styles/theme";
import App from "./App";
import BaseStyles from "styles/global";
import { Provider } from "react-redux";
import { setupStore } from "store/store";
import { Modal } from "components/Modal";

const GlobalStyles = createGlobalStyle`
${BaseStyles}
`;

const store = setupStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
        <Modal />
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
