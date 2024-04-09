import React from "react";
import Navbar2 from "../Component/Navbar/Navbar2";

const Profile = () => {
  return (
    <div style={{ marginBottom: "5rem" }}>
      <Navbar2 />

      <div className="profile_div">
        <div className="profile_child_div">
            <p>Student Details</p>

            <div className="pofile_interal">
                    <p>Name</p>
                    <input type="text" />
            </div>
            <div className="pofile_interal">
                    <p>Email</p>
                    <input type="text" />
            </div>
            <div className="pofile_interal">
                    <p>Alternate Email</p>
                    <input type="text" />
            </div>
            <div className="pofile_interal">
                    <p>Alternate Phone</p>
                    <input type="text" />
            </div>
            <div className="pofile_interal">
                    <p>Gender</p>
                    <div className="profile_radio">
                        <div>
                            <input type="radio" />
                            <label >Male</label>
                        </div>
                        <div>
                            <input type="radio" />
                            <label >Female</label>
                        </div>
                    </div>
            </div>
            <div className="pofile_interal">
                    <p>Current State</p>
                    <input type="text" />
            </div>
            <div className="pofile_interal">
                    <p>Current city</p>
                    <input type="text" />
            </div>
            <div className="pofile_interal">
                    <p>Category</p>
                    <div className="profile_radio">
                        <div>
                            <input type="radio" />
                            <label >Not Available</label>
                        </div>
                        <div>
                            <input type="radio" />
                            <label >General</label>
                        </div>
                        <div>
                            <input type="radio" />
                            <label >OBC</label>
                        </div>
                        <div>
                            <input type="radio" />
                            <label >SC</label>
                        </div>
                        <div>
                            <input type="radio" />
                            <label >ST</label>
                        </div>
                        <div>
                            <input type="radio" />
                            <label >Others</label>
                        </div>

                    </div>
            </div>
            <div className="pofile_interal">
                    <p>Date Of Birth</p>
                    <input type="date" placeholder="DD/MM/YEAR"/>
            </div>
            <div className="pofile_interal">
                    <p>Pin Code</p>
                    <input type="number" placeholder="Pin Code"/>
            </div>
          
            <div className="profile_button">
                    Save
            </div>
            

        </div>

        <div className="profile_child_div">
            <p>Parent Details</p>

            <div className="pofile_interal">
                    <p>Parent Number</p>
                    <input type="text" />
            </div>
            <div className="pofile_interal">
                    <p>Father Name</p>
                    <input type="text" />
            </div>
            <div className="pofile_interal">
                    <p>Father Occupation</p>
                    <input type="text" />
            </div>

            <p>Parent Details</p>

            <div className="pofile_interal">
                    <p>10th Score</p>
                    <input type="text" />
            </div>
            <div className="pofile_interal">
                    <p>12th Score</p>
                    <input type="text" />
            </div>
            <div className="pofile_interal">
                    <p>Last Educational Level</p>
                    <div className="profile_radio">
                        <div>
                            <input type="radio" />
                            <label >12th</label>
                        </div>
                        <div>
                            <input type="radio" />
                            <label >UG</label>
                        </div>
                        <div>
                            <input type="radio" />
                            <label >PG</label>
                        </div>
                    </div>
            </div>
            <div className="pofile_interal">
                    <p>Board</p>
                    <input type="text" />
            </div>
            <div className="pofile_interal">
                    <p>School</p>
                    <input type="text" />
            </div>
          
          
            <div className="profile_button">
                    Save
            </div>
            

        </div>

        <div className="profile_child_div">
            <p>Preference </p>

            <div className="pofile_interal">
                    <p>Preferred Year</p>
                    <div className="profile_radio">
                        <div>
                            <input type="radio" />
                            <label >2023</label>
                        </div>
                        <div>
                            <input type="radio" />
                            <label >Next-Year</label>
                        </div>
                     
                    </div>
            </div>
         
            <div className="pofile_interal">
                    <p>Preferred Mode</p>
                    <div className="profile_radio">
                        <div>
                            <input type="radio" />
                            <label >Full Time</label>
                        </div>
                        <div>
                            <input type="radio" />
                            <label >Part Number</label>
                        </div>
                        <div>
                            <input type="radio" />
                            <label >Distance</label>
                        </div>
                        <div>
                            <input type="radio" />
                            <label >Other</label>
                        </div>
                    </div>
            </div>
            <div className="pofile_interal">
                    <p>Level</p>
                    <input type="text" />
            </div>
            <div className="pofile_interal">
                    <p>Degree</p>
                    <input type="text" />
            </div>
            <div className="pofile_interal">
                    <p>Stream</p>
                    <select>
                        <option>Enginnering</option>
                        <option>Docter</option>
                        <option>Teacher</option>
                    </select>
            </div>
            <div className="pofile_interal">
                    <p>Specialisation</p>
                    <select>
                        <option>Enginnering</option>
                        <option>Docter</option>
                        <option>Teacher</option>
                    </select>
            </div>
            <div className="pofile_interal">
                    <p>Preferred Location</p>
                    <input type="number" placeholder="Pin Code"/>
            </div>
            <div className="pofile_interal">
                    <p>Budget</p>
                    <select>
                        <option>Enginnering</option>
                        <option>Docter</option>
                        <option>Teacher</option>
                    </select>
            </div>

               
            <div className="pofile_interal">
                    <p>Domestic Loan
Required</p>
                    <div className="profile_radio">
                        <div>
                            <input type="radio" />
                            <label >Doesn’t Need</label>
                        </div>
                        <div>
                            <input type="radio" />
                            <label >Needs</label>
                        </div>
                    
                    </div>
            </div>

               
            <div className="pofile_interal">
                    <p>Interested in 
Study Abroad</p>
                    <div className="profile_radio">
                        <div>
                            <input type="radio" />
                            <label >Yes</label>
                        </div>
                        <div>
                            <input type="radio" />
                            <label >No</label>
                        </div>
                    
                    </div>
            </div>

               
            <div className="pofile_interal">
                    <p>Interested in 
Hotel</p>
                    <div className="profile_radio">
                        <div>
                            <input type="radio" />
                            <label >Yes</label>
                        </div>
                        <div>
                            <input type="radio" />
                            <label >No</label>
                        </div>
                   
                    </div>
            </div>
            
            <div className="profile_button">
            Save & View Recommendation
            </div>
          
            <div className="profile_button">
                    Save
            </div>
            

        </div>


      </div>
    </div>
  );
};

export default Profile;
