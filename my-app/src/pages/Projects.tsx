import * as React from "react";
import { NavBar } from "../components/NavBar";

export class Projects extends React.Component {
    render() {
      console.log('Projects')
      return (
        <>
          <NavBar />
          <h2>Projects</h2>
        </>
      );
    }
  }