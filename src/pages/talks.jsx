import React, { Component } from "react";
import Helmet from "react-helmet";
import Talks from "../components/Talks/Talks";
import config from "../../data/SiteConfig";
import talksJson from "./talks.json";

class TalksPage extends Component {
  render() {
    return (
      <div className="talks-container">
        <Talks talks={talksJson} />
      </div>
    );
  }
}

export default TalksPage;
