import React from "react";

import Profile from '../components/Profile/Profile';

import Footer from '../components/Footer/Footer';

const ProfilePage = () => {
    return (
        <div>
            <div className="profile">
                <Profile />
            </div>
            <div className="stopka">
                <Footer />
            </div>
        </div>

    );
}

export default ProfilePage;