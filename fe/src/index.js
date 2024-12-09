import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import store from './store/store';
=======
import store from './Store/store.js';
>>>>>>> b870790e953376d7f80c0b92c2590ff338a715cd
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<<<<<<< HEAD
  <React.StrictMode>
=======
  <>
  {/* <React.StrictMode> */}
>>>>>>> b870790e953376d7f80c0b92c2590ff338a715cd
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
<<<<<<< HEAD
  </React.StrictMode>
=======
  {/* </React.StrictMode> */}
  </>
>>>>>>> b870790e953376d7f80c0b92c2590ff338a715cd
);

reportWebVitals();
