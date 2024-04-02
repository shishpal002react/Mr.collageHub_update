import React, { useState } from 'react'
import Navbar from '../Component/Navbar/Navbar2'
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Popover from 'react-bootstrap/Popover';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "../App.css"
import Navbar2 from '../Component/Navbar/Navbar2';


const ShortListedCollage = () => {
    
    return (
        <>
            <Navbar2 />
           <div className='shortList_collage'>
            <p className='short_size_header_font'>12 College Shortlisted</p>

            <div className='shortList_header_list'>

                <div className='shortList_header_list_parent'>
                <p>Show Only</p>

                <div className='shortList_header_list_left'>
                        <div>
                            <input type="checkbox"/>
                            <label>USP’s</label>
                        </div>
                        <div >
                        <input type="checkbox"/>
                            <label>Facilities</label>
                        </div>
                        <div >
                        <input type="checkbox"/>
                            <label>Placements</label>
                        </div>
                        <div >
                        <input type="checkbox"/>
                            <label>Course & Fees</label>
                        </div>
                </div>

                </div>
                <button className='button_header_style' style={{textAlign:"right"}}>
                Send more info
                </button>
            </div>

            <div className='shortList_Box'>
                <div className='shortList_Box_first_child'>
                    <p>SAM Global Universities (SGU- Bhopal, Madhya Pradesh)</p>

                    <div className='shortList_Box_first_child_left'>
                        <div>
                            <p>CAF : Not Available</p>
                        </div>
                        <div>
                            <p>Status : Interested</p>
                        </div>
                        <div>
                            <p>User form Details</p>
                        </div>
                    </div>
                </div>

                <div className='shortList_Box_second_child'>
                    <p style={{marginTop:"10px"}}>Source Landing</p>

                    <div className='shortList_Box_second_child_child'>
                        <div><p>CAF Course Link</p></div>
                        <div><p>CAF Cart Link</p></div>
                        <div><p>Update Status</p></div>
                        <div><p>Admission Document</p></div>
                    </div>
                </div>

                <div className='single_flex_short'>
                    <p style={{paddingTop:"5px"}}>L3: </p>

                    <div className='button_short'>
                    Proceed with counselling
                    </div>
                </div>

            </div>



           </div>
        </>
    )
}

export default ShortListedCollage;