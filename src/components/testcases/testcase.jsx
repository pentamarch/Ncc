import React, { Component } from 'react';
import "./testcases.css"

const Testcase = (props) => {
    return (
        <div className="tc">
            {props.testcase}
        </div>
      );
}
 
export default Testcase;