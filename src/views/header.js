import React from "react";

class Header extends React.Component {

inputChangeHandle(event){
  console.log(event.target.value)
}



  render() {
    return (
      <header>
        <div className="logo">Logos</div>

        <input onChange={this.inputChangeHandle} />
      </header>
    );
  }
}

export default Header;
