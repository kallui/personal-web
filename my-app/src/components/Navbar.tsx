import * as React from "react";


export class NavBar extends React.Component {

  render() {
    return (
      <>
        <h1>Nicholas Januar</h1>

        <nav className="nav-bar">
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/projects'>Projects</a>
            </li>
          </ul>
        </nav>

      </>
    );
  }
}
