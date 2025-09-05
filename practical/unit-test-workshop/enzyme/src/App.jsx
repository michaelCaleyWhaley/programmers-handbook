import React from "react";
import PageTitle from "./components/PageTitle/PageTitle";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    this.setState({ count: 1 });
  }

  internalReactMethod() {
    return "I am internal";
  }

  render() {
    return (
      <div className="App">
        <PageTitle />
        <p>{this.state.count}</p>
      </div>
    );
  }
}

export default App;
