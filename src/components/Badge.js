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
            src="https://static.platzi.com/media/avatars/avatars/fedemendez2014_408bd
                  1e4-89a7-480e-b911-ef51b0b79de8.png"
          />
          <h1>
            Federico <br /> Méndez
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>Software developer</h3>
          <div>@fede.mendez.395</div>
        </div>
        <div className="Badge__footer">#PlatziConf</div>
      </div>
    );
  }
}

export default Badge;
