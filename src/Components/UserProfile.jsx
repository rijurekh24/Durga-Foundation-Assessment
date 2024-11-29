import React from "react";

const UserProfile = () => {
  return (
    <div className="profile">
      <img
        src="https://randomuser.me/api/portraits/men/3.jpg"
        alt="Profile"
        className="profile-image"
      />
      <span className="username">Fakhar Naveed</span>
      <span className="arrow">▼</span>
    </div>
  );
};

export default UserProfile;
