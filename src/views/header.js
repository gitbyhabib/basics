import React from "react";

class Header extends React.Component {
  state = {
    name: "habibi",
    title: "keywords are",
    keywords: "",
    count: 0,
  };

  inputChangeHandle = (event) => {
    this.setState({
      keywords: event.target.value,
    });
  };

  addone() {
    this.setState((state, props) => ({
      count: state.count + 1,
    }));
  }
  render() {
    console.log(this.state);
    return (
      <header>
        <div className="logo">Logos</div>

        <input onChange={this.inputChangeHandle} />

        <div>{this.state.title}</div>
        <div>{this.state.keywords}</div>
        <div> Count is:{this.state.count}</div>

        <button onClick={() => this.addone()}>Add One</button>
      </header>
    );
  }
}

export default Header;
