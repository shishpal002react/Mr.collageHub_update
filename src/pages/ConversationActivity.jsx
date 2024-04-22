import React, { useState } from "react";
import Navbar2 from "../Component/Navbar/Navbar2";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js";
import {
  CategoryScale,
  LinearScale,
  LineController,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TimeHeading from "../Component/Time_heading/TimeHeading";

Chart.register(
  CategoryScale,
  LinearScale,
  LineController,
  PointElement,
  LineElement,
  Title
);

const ConversationActivity = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const [activity,setActivity]=useState(null)
  const [remark,setRemark]=useState(null)



  const parts = pathname.split("/");
  const lastPart = parts[parts.length - 1];
  const data = {
    labels: [
      "Jan-2020",
      "Feb-2020",
      "Mar-2020",
      "Apr-2020",
      "May-2020",
      "Jun-2020",
      "Jul-2020",
      "Aug-2020",
      "Sep-2020",
      "Oct-2020",
      "Nov-2020",
      "Dec-2020",
      "Jan-2021",
      "Feb-2021",
      "Mar-2021",
      "Apr-2021",
      "May-2021",
      "Jun-2021",
      "Jul-2021",
      "Aug-2021",
      "Sep-2021",
      "Oct-2021",
      "Nov-2021",
      "Dec-2021",
    ],
    datasets: [
      {
        label: "User Activity 1",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0],
        backgroundColor: "rgba(0, 99, 132, 0.2)",
        borderColor: "rgba(0, 99, 132, 1)",
        pointRadius: 5,
        pointHitRadius: 10,
        pointHoverRadius: 15,
        pointBorderWidth: 2,
        pointBackgroundColor: "rgba(0, 99, 132, 1)",
        pointBorderColor: "#fff",
      },
      {
        label: "User Activity 2",
        data: [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        backgroundColor: "rgba(255, 99, 71, 0.2)",
        borderColor: "rgba(255, 99, 71, 1)",
        pointRadius: 5,
        pointHitRadius: 10,
        pointHoverRadius: 15,
        pointBorderWidth: 2,
        pointBackgroundColor: "rgba(255, 99, 71, 1)",
        pointBorderColor: "#fff",
      },
      {
        label: "User Activity 3",
        data: [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "rgba(124, 252, 0, 0.2)",
        borderColor: "rgba(124, 252, 0, 1)",
        pointRadius: 5,
        pointHitRadius: 10,
        pointHoverRadius: 15,
        pointBorderWidth: 2,
        pointBackgroundColor: "rgba(124, 252, 0, 1)",
        pointBorderColor: "#fff",
      },
    ],
  };
  const options = {
    scales: {
      x: {
        type: "category",
        offset: true,
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: "Week of the year",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "COUNT",
        },
      },
    },
  };

  return (
    <div style={{ marginBottom: "5rem" }}>
      <Navbar2 />

      <div className="conver-container">
        <p>Weekly Analysis of Lead</p>
        <div className="conver_top_parent">
          <div className="conver_top_child">
            <div
              style={{
                width: "68px",
                height: "29px",
                backgroundColor: "#208B06",
              }}
            ></div>
            <p>User Activity</p>
          </div>
          <div className="conver_top_child">
            <div
              style={{
                width: "68px",
                height: "29px",
                backgroundColor: "#003CC1",
              }}
            ></div>
            <p>L2 Activity</p>
          </div>
          <div className="conver_top_child">
            <div
              style={{
                width: "68px",
                height: "29px",
                backgroundColor: "#B93775",
              }}
            ></div>
            <p>L3 Activity</p>
          </div>
        </div>

        <div className="my-chart">
          <Line data={data} options={options} style={{ width: "100%" }} />
        </div>
      </div>

      <div className="coverage_main_header">
        <div className={activity ? "changeColor" : ""}>
          <input
            type="checkbox"
            onChange={() => setActivity(!activity)}
          />
          <label>Activity</label>
        </div>
        <div
          className={remark ? "changeColor" : ""}
        >
          <input
            type="checkbox"
            onChange={() => setRemark(!remark)}
          />
          <label>Remarks</label>
        </div>
         <div
          className={lastPart === "ConverationL3Activity" ? "changeColor" : ""}
        >
          <input
            type="checkbox"
            onChange={() => navigate("/ConverationL3Activity")}
          />
          <label>L3 Remarks</label>
        </div>
        <div
          className={
            lastPart === "shortlisted_course_fess" ? "changeColor" : ""
          }
        >
          <input
            type="checkbox"
            onChange={() => navigate("/shortlisted_course_fess")}
          />
          <label>Lead Score</label>
        </div>
        <div
          className={
            lastPart === "shortlisted_course_fess" ? "changeColor" : ""
          }
        >
       
          <label>All</label>
        </div>
      </div>


{
activity && 
<div>
<TimeHeading/>
<div className="conversation-container">
      <div>6:21 PM</div>
      <div>
        <p>Lead fill</p>
        <p>798736646743- <a href="#">Laxmipati Group of Institution</a></p>
      </div>
</div>         
<TimeHeading/>
<div className="conversation-container">
<div>6:21 PM</div>
<div>
  <p>Lead fill</p>
  <p>798736646743- <a href="#">Laxmipati Group of Institution</a></p>
</div>
</div>
</div>
}



{
 remark && <div>
 <TimeHeading/>
 <div className="conversation-container">
       <div>6:21 PM</div>
       <div>
         <p>(lorenepsom@gmail.com)</p>
         <p>Connectivity Status : Not connected</p>
         <p>Intent status : Low</p>
         <p>Callback scheduled for</p>
         <a href="#">Jun 1, 2023 11:00:00 PM</a>
       </div>
       <div>
         PNR
       </div>
 </div>  
 <div className="conversation-container">
       <div>5:14  PM</div>
       <div>
         <p>(lorenepsom@gmail.com)</p>
         <p>Connectivity Status : Not connected</p>
         <p>Intent status : Low</p>
         <p>Callback scheduled for</p>
         <a href="#">Jun 1, 2023 11:00:00 PM</a>
       </div>
       <div>
       Not Reachable
       </div> 
 </div>  
 
 <div className="conversation-container">
       <div>12:21 PM</div>
       <div>
         <p>(lorenepsom@gmail.com)</p>
         <p>Connectivity Status : Not connected</p>
         <p>Intent status : Low</p>
         <p>Callback scheduled for</p>
         <a href="#">Jun 1, 2023 11:00:00 PM</a>
       </div>
       <div>
       stdis in mid of the conversation // tried again - stdis
       </div>
 </div>  
 
 
 </div>
}



</div>
  );
};

export default ConversationActivity;
