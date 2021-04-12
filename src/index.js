import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n';
import Loader from './components/Shared/Loader/Loader';

const App = React.lazy(() => import('./App'));
ReactDOM.render(
  <React.Suspense fallback={<Loader/>} >
    <App />
  </React.Suspense >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
