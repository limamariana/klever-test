import "./App.css";
import Header from "./components/Header/Header";
import ComponentContainer from "./components/Container/Container";
import { Content } from "./components/Content/Content";
import { AppContentProvider } from "./resources/context/AppContext";

function App() {
  return (
    <div className="App">
      <AppContentProvider>
        <ComponentContainer>
          <Header />
          <Content />
        </ComponentContainer>
      </AppContentProvider>
    </div>
  );
}

export default App;
