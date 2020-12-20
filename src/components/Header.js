import React, { Component } from 'react';
import "../styles/Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Employee Directory</h1>
        <p>Use the carrots to order the Name in alphabetical order.</p>
        <p>The search box will narrow the names.</p>
      </div>
    )
  }
}
