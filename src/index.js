import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import tournamentReducer from "./Store/Reducers/TournamentReducer";
import { colors, createTheme, ThemeProvider } from "@mui/material";
import Colors from "./Constants/Colors";
import playerReducer from "./Store/Reducers/PlayerReducer";
import matchReducer from "./Store/Reducers/MatchReducer";

const appReducer = combineReducers({
  tournament: tournamentReducer,
  player: playerReducer,
  match: matchReducer,
});

const store = createStore(appReducer, applyMiddleware(ReduxThunk));

const theme = createTheme({
  palette: {
    mode: "light",
    text: {
      primary: Colors.dark_blue,
      secondary: Colors.gold,
    },
    divider: Colors.black,
    primary: colors.lightBlue,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
