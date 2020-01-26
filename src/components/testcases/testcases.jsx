import React, { Component } from 'react';
import "@fortawesome/fontawesome-free";
import "./testcases.css";
import Testcase from "./testcase";
import CurrentScore from "./currentScore";

class Testcases extends Component {
    state = {
        result: "Running Testcases...",
        testcases : ["testcase 1"," testcase 2 ","testcase 3","testcase 4","testcase 5","testcase 6"]

      }
    render() { 
        return (
            <div className="col">
        <h1 >Testcases</h1>
        <div className="row" style={{height:"55vh"}}>
           <div className="col-lg-7" style={{marginLeft:"5vw"}}>
               <div className="row" style={{display:"flex",justifyContent:"center",height:"54vh",alignItems:"center"}}>
                <div className="result col-lg-3">{this.state.result}</div>
                <div className="col-lg-1" style={{border:"1px solid black"}}></div>
                <div className="col" style={{borderLeft:"2px solid black",height:"40vh"}}>
    
                        {this.state.testcases.map(testcase => 
                        <div className="row" style={{height:"8vh"}}>
                            <div className="testcaseLines col-lg-2"> 
                            </div>
                            <div className="testcase">&#62;
                            <Testcase testcase={testcase}/>
                            <span style={{marginLeft:"2vh"}}> &#10004;</span>
                            </div>
                            </div>
                            )
                        }
                    
                </div>
                </div>
           </div>
           <div className="col" style={{display:"flex",justifyContent:"center",marginRight:"5vw"}}>
                <CurrentScore/>
           </div>
        </div>
         <div className="row" style={{ display:"flex",justifyContent:"center",height:"28vh"}}>
               <div className="col-lg-8 console" >Console</div>
         </div>
        </div>
        );
    }
}
 
export default Testcases;