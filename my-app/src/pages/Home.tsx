import * as React from "react";
import { NavBar } from "../components/NavBar";

export class Home extends React.Component {
    render() {
      return (
        <>
          <NavBar />
          <div style={{
            height: '100%',
            backgroundColor: 'black'
          }}>
            <h2>Home</h2>
          </div>
        </>
      );
    }
  }