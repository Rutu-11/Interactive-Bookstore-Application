import React from "react";
import "./_Sidebar.scss";
import { useDispatch } from "react-redux";

import {
  MdSubscriptions,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdLogout,
  MdLogin
} from "react-icons/md";
import {GiBookshelf} from 'react-icons/gi'
import {BsFillBookmarkHeartFill, BsSearch} from 'react-icons/bs'

// import { log_out } from "../../Redux/Actions/Auth.Action";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ sidebar, handleSidebar }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const logOutHandler = () => {
    // dispatch(log_out());
  };
  return (
    // conditional class to handle toggle of menu  && event to toggle side or clicking each li
    <nav
      className={sidebar ? "sidebar open" : "sidebar close"}
      onClick={() => handleSidebar(false)}
    >
      <li onClick={()=>{navigate('/') }} >
        <MdHome size={23} />
        <span>Home</span>
      </li>

      <li>
        <GiBookshelf size={23} />
        <span>Books List</span>
      </li>

      <li>
        <BsFillBookmarkHeartFill size={23} />
        <span>Favourite</span>
      </li>

      <hr />

      <li>
        <BsSearch size={23} />
        <span>Search</span>
      </li>

      <li>
        <MdLibraryBooks size={23} />
        <span>Library</span>
      </li>


     

      <hr />
      <li onClick={()=>{navigate('/auth') }} >
        <MdLogin size={23} />
        <span>Login</span>
      </li>

      <li  onClick={logOutHandler}>
        <MdLogout size={23} />
        <span>Logout</span>
      </li>
      <hr />
      {/* <li>
          <MdHome size={23} />
          <span>Home</span>
        </li> */}
    </nav>
  );
};

export default Sidebar;
