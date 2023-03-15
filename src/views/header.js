import React from "react";

class Header extends React.Component {
  state = {
    active: "active",
    name: "habibi",
    title: "keywords are",
    keywords: "",
    count: 0,
  };

  inputChangeHandle = (event) => {
    const value = event.target.value === "" ? "active" : "not-active";
    this.setState({
      active: value,
      keywords: event.target.value,
    });
  };

  addone() {
    this.setState((state, props) => ({
      count: state.count + 1,
    }));
  }
  render() {
    console.log(this.props);

    const { title, keywords, count, active } = this.state;

    return (
      /* <header style={{ background: `${active ? "gray" : "red"}` }}> */
      <header className={active}>
        <div className="logo">Logos</div>

        <input onChange={this.props.keywords} />

        <div>{title}</div>
        <div>{keywords}</div>
        <div> Count is:{count}</div>

        <button onClick={() => this.addone()}>Add One</button>
      </header>
    );
  }
}

export default Header;
