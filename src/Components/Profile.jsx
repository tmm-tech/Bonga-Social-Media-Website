import React from "react";

const Profile = ({ setShowProfile }) => {
    const handleClick = () => {
        setShowProfile(false);
    };
    return (
        <div className="profileoptions">
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
            <ul >
                <li>
                    <a href="#view profile"><span ><i className="fab fa-facebook-square" ></i></span> View Profile</a>
                </li>
                <li>
                    <a href="#edit profile"><span><i className="fab fa-twitter-square" ></i></span> Edit Profile</a>
                </li>
                <li>
                    <a href="#activity log"><span><i className="fab fa-instagram" ></i></span> Activity Log</a>
                </li>
                <li>
                    <a href="#account setting"><span><i className="fab fa-google-plus-square" ></i></span> Account Setting</a>
                </li>
                <li>
                    <a href="#log out"><span><i className="fab fa-pinterest-square" ></i></span> Log out</a>
                </li>
            </ul>



            <p>Account Settings</p>
            <p>General setting</p>
            <p>Help</p>
            <div className="closeIcon">
                <a href="button icon" onClick={handleClick}>
                    <i class="fa fa-window-close" ></i>
                </a>
            </div>
        </div>
    );
}

export default Profile;