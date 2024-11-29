import React, { useState } from "react";
import EmployeeList from "./Components/EmployeeList";
import "./App.css";
import UserProfile from "./Components/UserProfile";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilter = (status) => {
    setFilter(status);
  };

  return (
    <div className="App">
      <header className="header">
        <input
          type="text"
          placeholder="Search..."
          className="search-bar"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <UserProfile />
      </header>
      <EmployeeList
        searchQuery={searchQuery}
        filter={filter}
        handleFilter={handleFilter}
      />
    </div>
  );
}

export default App;
