import * as React from "react";
import { NavBar } from "../components/NavBar";

export class Home extends React.Component {
    render() {
      return (
        <>
          <NavBar />
          <h2>Home</h2>
        </>
      );
    }
  }