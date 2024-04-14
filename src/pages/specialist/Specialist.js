import React, { useEffect, useState } from "react";
import Top from "../../common/top-block/Top";
import Nav from "../../common/nav-block/Nav";
import Bottom from "../../common/bottom-block/Bottom";
import "./Specialist.css";

function Specialist() {
  const [Data, SetData] = useState();

  useEffect(() => {
    fetch("https://mrcc-server.onrender.com/Employees")
      .then((res) => res.json())
      .then((json) => {
        SetData(json);
      });
  }, []);

  return (
    <div className="SpecialistWrapper">
      <Top />
      <Nav />
      <div className="flex-c-c">
        <div className="SpecialistItemWrappers">
          {Data?.map((item, index) => {
            return (
              <div key={index} className="EmployeeWrapper">
                <div className="EmployeePicWrapper">
                  <img
                    className="EmployeePicture flex-c-c"
                    src={"https://mrcc-server.onrender.com" + item?.photo}
                    alt="PersonPhoto"
                  />
                </div>
                <div className="EmployeeInfo EmployeeName">{item.name},</div>
                <div className="EmployeeInfo">{item.description}</div>
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
