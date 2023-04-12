import * as React from "react";
import './style.css'

export class NavBar extends React.Component {

  render() {
    return (
      <>
        

        <nav className="nav-bar">
          <h1>Nicholas Januar</h1> 
          <ul className='linkGroup'>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/projects'>Projects</a>
            </li>
            <li>
              <a href='/contact'>Contact</a>
            </li>
          </ul>
        </nav>

      </>
    );
  }
}
