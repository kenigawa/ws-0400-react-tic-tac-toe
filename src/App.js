import logo from './logo.svg';
import './App.css';


const initialState = {
  count: 0,
  isCircleTurn: true,
  progress: true,
  cells: new Array(9)
}

export default class App extends React.Component() {
  constructor(props) {
    super(props);
    this.state = {...initialState};
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        </a>
      </header>
      </div>
    );
  }
}

