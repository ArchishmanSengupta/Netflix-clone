import React from 'react'
import Nav from '../Nav';
import {useSelector} from 'react-redux';
import {selectUser } from "../features/userSlice";
import {auth} from './firebase';
import "./ProfileScreen.css";
function ProfileScreen() {

    // Fetching up the email which was stored in redux

    const user=useSelector(selectUser);
    return (
        <div className="profileScreen">
            <Nav />
            <div className="profileScreen__body">
                <h1> Edit Profile</h1>
                <div className="profileScreen__info">
                    <img 
                    src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                    alt=""
                    />
                </div>

                <div className="profileScreen__details">
                    <h2>{user.email}</h2>
                    <div className="profileScreen__plans">
                        <h3> Plans (Curent Plan: premium)</h3>

                        <h4> Renewal Date: 04/08/2022</h4>
                        <div className="profileScreen__money">
                            <h4> Netlfix Standard </h4>
                            <button className="profileScreen__standard"> Subscribe
                        </button>
                        <h4> Netlfix Basic</h4>
                            <button className="profileScreen__standard"> Subscribe
                        </button>
                        <h4> Netlfix Premium </h4>
                            <button className="profileScreen__standard"> Subscribe
                        </button>

                        </div>
                        <button onClick={()=> auth.signOut()}
                        className="profileScreen__signOut"> Sign Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
