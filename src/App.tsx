import React, { ReactElement } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";
import AppRoutes from "./routes/Router";

function App(): ReactElement {
  return (
    <ReduxProvider store={store}>
      <div className="App">
        <AppRoutes />
      </div>
    </ReduxProvider>
  );
}

export default App;
