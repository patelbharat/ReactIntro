import React from "react";
import ToDo from "./ToDo";
import Header from "./Header";

class App extends React.Component {
  _handleButtonClick = () => {
    alert("Congratulations you won $10 Millions");
  };

  render() {
    return (
      <div className="App">
        <Header>
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
        </Header>
        <ToDo task="Code the first React js function" />
        <ToDo task="Using codesandbox.io  online editor" />
        <button onClick={this._handleButtonClick}>Click Me</button>
      </div>
    );
  }
}

export default App;
