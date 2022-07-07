// import logo from "./logo.svg";
// import './App.css';
import NestedComponent from "./containers/NestedComponent";
import ToDo from "./containers/ToDo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        {/* <ToDo /> */}
        <NestedComponent />
      </header>
    </div>
  );
}

export default App;
