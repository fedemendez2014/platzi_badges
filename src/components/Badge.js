import React, { Component } from "react";
import logoConference from "../assets/badge-header.svg";
import "./styles/Badge.css";

class Badge extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={logoConference} alt="Logo conference" />
        </div>
        <div className="Badge__section-name">
          <img className="Badge__avatar" alt="Avatar"
            src={this.props.avatarUrl}
          />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>
        <div className="Badge__footer">#PlatziConf</div>
      </div>
    );
  }
}

export default Badge;
