import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import AzureAD from "react-aad-msal";
import { signInAuthProvider} from "./authProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AzureAD provider={signInAuthProvider} forceLogin={true}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </AzureAD>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
