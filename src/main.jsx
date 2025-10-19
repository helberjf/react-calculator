import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.jsx'
import GlobalStyles from './global'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>
);