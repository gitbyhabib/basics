import { React, Component } from "react";
import ReactDOM from "react-dom/client";
import Header from "./views/header";
import News from "./views/news";
import Footer from "./views/footer";

import JSON from "./db.json";

import "./styles/style.css";

class App extends Component {
  state = {
    news: JSON,
    filtered:JSON,
    footerText: "I am happy footer",
  };

  getkeywords = (event) => {
    console.log(event.target.value);
    let keywords = event.target.value;
    let filtered = this.state.news.filter((item)=>{
      return item.title.indexOf(keywords)>-1; 

    })
  this.setState({
    filtered
  })
  };
  render() {
    const { filtered, footerText } = this.state;
    console.log(this.state.news);
    return (
      <div>
        <Header keywords={this.getkeywords}></Header>
        <News news={filtered}>
          <br />
          <h1>I am a Children</h1>
        </News>
        <Footer footerText={footerText}></Footer>
      </div>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
