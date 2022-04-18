import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";

const Button = ({ click, name }) => {
  useEffect(() => {
    console.log("button update");
  }, [name]);

  return <button onClick={() => click()}>Update</button>;
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Siema Kurwie",
    };
  }

  componentDidMount() {
    console.log("app Mount");
  }

  componentDidUpdate() {
    console.log("app update");
  }

  handleClick = () => {
    this.setState({ name: "Elo mordy" });
  };

  render() {
    return (
      <div>
        <div>{this.state.name}</div>
        <Button click={this.handleClick} name={this.state.name} />
      </div>
    );
  }
}

export default App;
