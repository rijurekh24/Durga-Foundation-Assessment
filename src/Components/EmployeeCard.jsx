import React from "react";

const EmployeeCard = ({ employee }) => {
  return (
    <div className="employee-card">
      <div className="employee-header">
        <img
          src={employee.image}
          alt={employee.name}
          className="employee-image"
        />
        <div>
          <h3>{employee.name}</h3>
          <p className="employee-role">{employee.role}</p>
          <p className="employee-email">
            Email: <span>{employee.email}</span>
          </p>
          <div className="card-buttons">
            <button className="block-btn">Block</button>
            <button className="details-btn">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
