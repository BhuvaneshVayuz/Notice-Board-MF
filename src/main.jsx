import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { getMuiTheme } from './theme/muiTheme.jsx';
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";



createRoot(document.getElementById('root')).render(
  <>
    <ThemeProvider theme={getMuiTheme()}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </>
)
