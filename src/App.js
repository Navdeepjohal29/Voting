import './App.scss';
import Application from "./Application";
import 'bootstrap/dist/css/bootstrap.min.css';
//import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import configureStore from "./store";
//import { history } from "./redux/reducers/history";

import { PersistGate } from "redux-persist/lib/integration/react";
// import { BrowserRouter } from 'react-router-dom';
let { store, persistor } = configureStore();
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        {/* <ConnectedRouter history={history}> */}
            <Application></Application>
        {/* </ConnectedRouter> */}
      </PersistGate>
      </Provider>
    </div>
  );
}
export const storeInstance = store;
export default App;
