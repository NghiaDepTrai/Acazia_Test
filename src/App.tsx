import { ConnectedRouter } from "connected-react-router";
import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import { PersistGate } from "redux-persist/integration/react";
import "./App.scss";
import configureStore from "./boot/configureStore";
import LoadingComponent from "./containers/components/loading";
import DashboardComponent from "./screens/dashboard";
const store = configureStore.setup();
export default function App() {
  return (
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <LoadingComponent />
        <ConnectedRouter history={configureStore.history}>
          <Suspense fallback={<LoadingComponent />}>
            <Switch>
              <Redirect path="/" exact to="/dashboard" />
              <Route path="/dashboard" component={DashboardComponent} />
            </Switch>
          </Suspense>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
}
