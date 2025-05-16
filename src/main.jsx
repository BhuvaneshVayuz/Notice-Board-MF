import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { getMuiTheme } from './theme/muiTheme.jsx';
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import ReactDOM from 'react-dom';
import React from 'react';


const Wrapper = () => {
  window.process = { env: {} };
  window.React = React;
  window.ReactDOM = ReactDOM;
  return (<>
    <ThemeProvider theme={getMuiTheme()}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </>)
}




createRoot(document.getElementById('root')).render(
  <>
    <Wrapper />
  </>
)
