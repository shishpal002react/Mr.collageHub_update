import React from "react";
import Navbar2 from "../Component/Navbar/Navbar2";

const Loan = () => {
    return (
      <>
        <Navbar2/>

        <div className="loan_div">
          
          <div >
                <p>Document Type</p>
            <div className="loan_div_child">
                
                    <select className="internal_div">
                        <option value="Aadhar Card">Aadhar Card</option>
                    </select>
                
              
                    <input type="file" className="internal_div"/>
               
                <div className="Loan_button">
                    <p>Submit</p>
                </div>
            </div>
          </div>
            
        </div>

      </>
    );
}

export default Loan;