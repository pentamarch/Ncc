import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./testcases.css";

const CurrentScore = () => {
    return (  
        <div >
            <div style={{
                        fontSize:"35px",
                        marginLeft:"10px"
                        }}>
                SCORE
            </div>
            <div className="score">
                 100
            </div>
            <div  style={{
                marginTop:"4vh",
                marginLeft:"-4vw",
                fontSize:"20px",
                // border: "1px solid black",
                padding:"1vh"

            }}>
                1 out of 8 questions solved
            </div>
            <button className="btn retry"
                >
                Retry</button>
        </div>
    );
}
 
export default CurrentScore;