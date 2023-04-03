import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import UserStore from "./store/UserStore";
import DeviceStore from "./store/DeviceStore";
import BasketStore from "./store/BasketStore";

export const Context = createContext(null)


const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(process.env.REACT_APP_API_URL)
root.render(

  <React.StrictMode>
      <Context.Provider value={
          {
              user: new UserStore(),
              device: new DeviceStore(),
              basket: new BasketStore()

          }
      }>
          <App />
      </Context.Provider>

  </React.StrictMode>

);


serviceWorkerRegistration.register();


reportWebVitals();
