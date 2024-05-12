import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';

import { BrowserRouter } from "react-router-dom"; //used to navigate between views of the page
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>   {/*needs to wrap around App*/}
      <App />
    </BrowserRouter>
  </React.StrictMode>, 
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
