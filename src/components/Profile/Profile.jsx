import React from "react";
import {useUser} from '../userContext';
function Profile() {
    const { user } = useUser();

    if (!user) return <p>No user data!</p>;

    return (
        <div>
            <h1>User Profile</h1>
            <p>Email: {user.email}</p>
            <p>First Name: {user.firstName}</p>
            <p>Last Name: {user.lastName}</p>
        </div>
    );
}
export default Profile