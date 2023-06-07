import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import routes from './routes/routes';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { RootStoreContext } from './context/RootStoreContext';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import navbarSlicer from './redux/navbarSlicer';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(routes)
const store = configureStore({
  reducer: { navbarSlicer }
})

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RootStoreContext>
        <RouterProvider router={router} />
      </RootStoreContext>
    </Provider>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
