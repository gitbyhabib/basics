import React from "react";

const Header = (props)=> {
    return (
      <header >
        <div className="logo">Logos</div>

        <input onChange={props.keywords} />
      </header>
    )
  }
export default Header;
