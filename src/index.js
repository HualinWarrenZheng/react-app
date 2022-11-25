import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './components/App';
import MyForm from './components/MyForm';
import AddEventListeners from './components/AddEventListeners'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <MyForm /> */}
    <AddEventListeners />
  </React.StrictMode>
);

reportWebVitals(console.log);
