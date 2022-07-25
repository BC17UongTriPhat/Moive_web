import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {store} from './redux/configStore';
//  muốn import thư viện vào toàn file thì import vào index
//  muốn import vào 1 file thì import vào chính file đó 

import './i18n'

// thư viện antd
import "antd/dist/antd.css";
// thư viện react Slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
