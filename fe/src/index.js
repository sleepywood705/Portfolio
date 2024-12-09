import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
=======
import store from './store/store.js';
import { Provider } from 'react-redux';
>>>>>>> be3593ad60895c5ca8d94bd1134d674442c4386e
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <BrowserRouter>
      <App />
    </BrowserRouter>
=======
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
>>>>>>> be3593ad60895c5ca8d94bd1134d674442c4386e
  </React.StrictMode>
);

reportWebVitals();
