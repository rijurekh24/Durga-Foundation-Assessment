import React, { useState, useEffect } from "react";
import EmployeeCard from "./EmployeeCard";
import employeesData from "../employees.json";

const EmployeeList = ({ searchQuery, filter, handleFilter }) => {
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    let updatedEmployees = employeesData;

    if (filter === "active") {
      updatedEmployees = updatedEmployees.filter((employee) => employee.active);
    } else if (filter === "inactive") {
      updatedEmployees = updatedEmployees.filter(
        (employee) => !employee.active
      );
    }

    if (searchQuery) {
      updatedEmployees = updatedEmployees.filter((employee) =>
        employee.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredEmployees(updatedEmployees);
  }, [searchQuery, filter]);

  return (
    <div style={{ padding: "0 20px" }}>
      <div className="filter-row">
        <h2>Employees</h2>
        <div className="filter-buttons">
          <button
            className={filter === "all" ? "active-filter" : ""}
            onClick={() => handleFilter("all")}
          >
            All
          </button>
          <button
            className={filter === "active" ? "active-filter" : ""}
            onClick={() => handleFilter("active")}
          >
            Active
          </button>
          <button
            className={filter === "inactive" ? "active-filter" : ""}
            onClick={() => handleFilter("inactive")}
          >
            Inactive
          </button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div className="employee-list">
          {filteredEmployees.map((employee) => (
            <EmployeeCard key={employee.id} employee={employee} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
