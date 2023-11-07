import styles from "./css/team-page.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../../images/ubc bolt dog copy.png"
import Profile from "./profile.js"

function TeamDisplay(props) {

  return (
    <div className="windows">
      {/* <Profile key="profile" name={props.teamName}/> */}
      <div className="profile-card">
        <img className="circle-image" src={logo} alt="Profile" />
        <div className="text">
          <div className="profile-name">{props.teamName}</div>
          <div className="profile-title">Executive</div>
        </div>
      </div>
    </div>
  );
}

export default TeamDisplay;

