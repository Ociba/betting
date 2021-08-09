import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Route from './Route';
import reportWebVitals from './reportWebVitals';
//import "assets/css/bootstrap.min.css";
//import "assets/css/font-awesome.min.css";
//import "assets/css/animate.css";
//import "assets/css/jquery-ui.css";
//import "assets/css/magnific-popup.css";
//import "assets/css/main.css";
//import "assets/css/owl.carousel.min.css";
//import "assets/css/owl.video.play.html";
ReactDOM.render(
  <React.StrictMode>
    <Route />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
