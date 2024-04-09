import React from "react";
import Navbar2 from "../Component/Navbar/Navbar2";

const Loan = () => {
  return (
    <>
      <div style={{ marginBottom: "5rem" }}>
        <Navbar2 />

        <div className="loan_div">
          <div>
            <p>Document Type</p>
            <div className="loan_div_child">
              <select className="loan_internal_div">
                <option value="Aadhar Card">Aadhar Card</option>
              </select>

              <div className="loan_internal_div ">
                <input type="file" />
              </div>

              <div className="Loan_button">
                <p>Submit</p>
              </div>
            </div>
          </div>

          <div>
            <p>Document Type</p>
            <div className="loan_div_child">
              <select className="loan_internal_div">
                <option value="Aadhar Card">Aadhar Card</option>
              </select>

              <div className="loan_internal_div ">
                <input type="file" />
              </div>

              <div className="Loan_button">
                <p>Submit</p>
              </div>
            </div>
          </div>

          <div>
            <p>Document Type</p>
            <div className="loan_div_child">
              <select className="loan_internal_div">
                <option value="Aadhar Card">Aadhar Card</option>
              </select>

              <div className="loan_internal_div ">
                <input type="file" />
              </div>

              <div className="Loan_button">
                <p>Submit</p>
              </div>
            </div>
          </div>

          <div className="Loan_button" style={{ display: "inline-flex" }}>
            <p>Send Email</p>
          </div>
        </div>

        <div className="loan_main_div">
          <p>College Advance Payment ( 1st loan EMI)</p>

          <div className="loan_main_child">
            <div className="Loan_main_parent_left">
              <div className="Loan_main_left">
                <p>Select college</p>
                <select name="" id="">
                  <option value="">abc</option>
                  <option value="">abc</option>
                  <option value="">abc</option>
                  <option value="">abc</option>
                </select>
              </div>

              <div className="Loan_main_left">
                <p>Select course</p>
                <select name="" id="">
                  <option value="">abc</option>
                  <option value="">abc</option>
                  <option value="">abc</option>
                  <option value="">abc</option>
                </select>
              </div>

              <div className="Loan_main_left">
                <p>Total fee payable to college</p>
                <select name="" id="">
                  <option value="">abc</option>
                  <option value="">abc</option>
                  <option value="">abc</option>
                  <option value="">abc</option>
                </select>
              </div>

              <div className="Loan_main_left">
                <p>Has student paid any advance to college</p>
                <div className="loan_radio">
                  <div>
                    <input type="radio" />
                    <label>Yes</label>
                  </div>

                  <div>
                    <input type="radio" />
                    <label>No</label>
                  </div>
                </div>
              </div>

              <div className="Loan_main_left">
                <p>Payment Link Status</p>
                <div className="loan_radio">
                  <div>
                    <input type="radio" />
                    <label>Active</label>
                  </div>

                  <div>
                    <input type="radio" />
                    <label>Inactive</label>
                  </div>
                </div>
              </div>


              <div className="loan_Button">
                <p>Submit</p>
              </div>
            </div>

            <div className="Loan_main_right">

              <div>
                <p>Payment status</p>
                <p>Not Connected</p>
              </div>

              <div>
                <p>1st EMI payable to college</p>
              </div>

              <div>
                <p>EMI for next 5 month</p>
              </div>

              <div>
                <p>Processing Fee</p>
                <p>Rs. 850 ( 750 +GST)</p>
              </div>

              <div>
                <p>Total Amount Payable to
college_HUB</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loan;
