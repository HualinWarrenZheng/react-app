import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './components/App';
import MyForm from './components/MyForm';
import AddEventListeners from './components/AddEventListeners'
import ShouldComponentUpdate from './components/ShouldComponentUpdate'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <MyForm /> */}
    {/* <AddEventListeners /> */}
    <ShouldComponentUpdate />
  </React.StrictMode>
);

reportWebVitals(console.log);
