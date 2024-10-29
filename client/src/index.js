import React from 'react';
import ReactDOM from 'react-dom';
import './css/bootstrap.css';
import './css/custom.css';
import './css/responsive.css';
import './css/style.css';
import './css/style.css.map';
import App from './App';
import { BrowserRouter} from 'react-router-dom';



ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

