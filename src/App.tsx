import React, { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";
import AppRoutes from "./routes/Router";
import { Header } from "./components/Header";
import { Container } from "./components/Layouts/Container";

function App(): ReactElement {
  return (
    <BrowserRouter>
      <ReduxProvider store={store}>
        <div className="App">
          <Header />
          <Container>
            <AppRoutes />
          </Container>
        </div>
      </ReduxProvider>
    </BrowserRouter>
  );
}

export default App;
