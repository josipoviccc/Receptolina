import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
declare const BASE_PATH: string;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter basename={BASE_PATH}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);