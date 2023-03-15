import React from "react";
import Newslist from "./news_list_item";

export default function news(props) {
  console.log(props);

  const news = props.news.map((item) => <Newslist item={item} key={item.id} />);

  return (
    <div>
      {news}
      {props.children}
    </div>
  );
}
