import React from "react";

export default function Newslist({ item }) {
  return (
    <div className="newsitem">
      <h3>{item.title}</h3>
      <div>
        <p>{item.feed}</p>
      </div>
    </div>
  );
}
