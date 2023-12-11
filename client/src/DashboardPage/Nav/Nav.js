import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../resources/images/logo.svg";
import { useUserDetails } from "../../shared/hooks";

import "../dashboardPage.css";

const NavLogo = () => {
  return (
    <div className="nav-logo-container">
      <img className="nav-logo" width="100%" height="100%" src={logo} />
    </div>
  );
};

const NavButton = ({ text, onClickHandler }) => {
  return (
    <span
      style={{ color: "white", fontWeight: "bold" }}
      className="nav-button"
      onClick={onClickHandler}
    >
      {text}
    </span>
  );
};

const NavSearch = () => {
  return (
    <center>
      <input
        type="text"
        placeholder="Search..."
        style={{
          width: "100%",
          backgroundColor: "#202020",
          border: "none",
          borderRadius: "5px",
          paddingLeft: "1rem",
          color: "white",
        }}
      />
    </center>
  );
};

export const Nav = () => {
  const { username, isLogged, logout } = useUserDetails();

  const navigate = useNavigate();

  const handleNavigateToAuth = () => {
    navigate("/auth");
  };

  const handleNavigateToSettings = () => {
    navigate("/settings");
  };

  const handleNavigateToChannels = () => {
    navigate("/channels");
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="nav-container">
      <div
        className="nav-buttons-container"
        style={{ display: "block", textAlign: "end", marginRight: "2rem"}}
      >
        {!isLogged ? (
          <NavButton text="Login" onClickHandler={handleNavigateToAuth} />
        ) : (
          <div style={{}}>
            <NavButton
              text={username}
              onClickHandler={handleNavigateToSettings}
            />
            <NavButton text="Logout" onClickHandler={handleLogout} />
          </div>
        )}
      </div>
    </div>
  );
};
