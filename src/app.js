import React from "react";
import { Provider } from "react-redux";
import makeStore from "./redux/store";
import MainLayout from "./components/MainLayout";
import Todos from "./components/todos";

const store = makeStore();

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <MainLayout>
            <Todos />
          </MainLayout>
        </Provider>
      </div>
    );
  }
}

export default App;
