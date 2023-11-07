import React from 'react';
//import logo from "../../images/logo/bolt.png"

function Profile() {
  return() => {
    // Define your profile picture URL
    // const profilePictureURL = ''; // Replace with your image URL
    // Define the text to display
    const textLine2 = 'Developer';

    return (
      <div className="profile-picture-container">
        <h1>Happy</h1>
        {/* <div className="circle-image">
          <img src={logo} alt="Profile" />
        </div>
        <div className="text">
          <div>Hello there</div>
          <div>{textLine2}</div>
        </div> */}
      </div>
    );
  }
}

export default Profile;