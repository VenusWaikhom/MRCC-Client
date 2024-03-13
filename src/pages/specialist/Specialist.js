import React from "react";
import Top from "../../common/top-block/Top";
import Nav from "../../common/nav-block/Nav";
import Bottom from "../../common/bottom-block/Bottom";
import { SpecialistData } from "./SpecialistData";
import "./Specialist.css";

function Specialist() {
  return (
    <div className="SpecialistWrapper">
      <Top />
      <Nav />
      <div className="flex-c-c">
        <div className="SpecialistItemWrappers">
          {SpecialistData.map((item, index) => {
            return (
              <div key={index} className="EmployeeWrapper">
                <div className="EmployeePicWrapper">
                  <img src="" alt="Employee Pic" />
                </div>
                <div className="EmployeeInfo EmployeeName">{item.Name},</div>
                <div className="EmployeeInfo">{item.Profession}</div>
              </div>
            );
          })}
        </div>
      </div>
      <Bottom />
    </div>
  );
}

export default Specialist;
