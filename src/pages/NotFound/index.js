import React, { Component } from "react";
import "./style.css";
export class NotFound extends Component {
  render() {
    return (
      <div>
        <div id="header">
          <h1>Server Error</h1>
        </div>
        <div id="content">
          <div class="content-container">
            <fieldset>
              <h2>404 - File or directory not found.</h2>
              <h3>
                The resource you are looking for might have been removed, had
                its name changed, or is temporarily unavailable.
              </h3>
            </fieldset>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
