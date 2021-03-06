import React, { useEffect,useState } from 'react'
import "./Nav.css"
import {useHistory} from 'react-router-dom';
// import { auth } from "src/screens/firebase";
// import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
function Nav() {
    const [show,handleshow]=useState(false);
    //useSate for initializing a variable

    // HISTORY 
    const history = useHistory();
    // DropDown
    //const [dropdown, setDropdown] = useState(false);
    const transitionNavBar=()=>{
        if(window.scrollY>100)
        {
            handleshow(true);
        }
        else{
            handleshow(false);
        }
    };
    // const handleDropdown = () => {
    //     if (!dropdown) {
    //       setDropdown(true);
    //     } else {
    //       setDropdown(false);
    //     }
    //   };
    useEffect(()=>{
        window.addEventListener("scroll",transitionNavBar);
        return()=>window.removeEventListener("scroll",transitionNavBar);
    },[]);
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__contents">
            <img 
            onClick={()=> history.push("/")}

            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png" 
            alt=""/>

            <img
            onClick={()=> history.push("/profile")} // routing

            className="nav__avatar" 
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png" 
            alt=""/>
            </div>
        </div>
    )
}

export default Nav
