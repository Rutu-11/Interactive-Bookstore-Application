import React, { useState } from 'react'
import "./Navbar.scss";

import {FaBars} from "react-icons/fa";
import { AiOutlineSearch } from 'react-icons/ai';
import { MdApps, MdNotifications} from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import {BsCartFill} from 'react-icons/bs'
function Navbar({handleSidebar}) {
 
  const [input, setInput] = useState('');

  const navigate = useNavigate()
  const handleSubmit = (e)=>{
      e.preventDefault();

      navigate(`/search/${input}`)

  }
  const loggedInUser = JSON.parse(sessionStorage.getItem('U-tube-user'));
  // console.log('loggedInUser',loggedInUser)
  return (
    <div className='border border-dark header' >
      <FaBars 
      className='header__menu' size={26}
      onClick={()=>handleSidebar()}

      />
      <div className='header__div'>
      <img
      src="https://tse2.mm.bing.net/th?id=OIP.rtjhDtdg78xMEuev0FuslQAAAA&pid=Api&P=0&h=180"
      
      className='header__logo'
      alt="Y-Logo"
      /> 
      <span className='header__youTube'>B<span className='header__O'>OO</span >KS ST<span className='header__O'>O</span>RE</span>
      </div>
      <form action="" onSubmit={handleSubmit} >
        <input type="text" placeholder='Search Books Here' value={input} onChange={(e)=>setInput(e.target.value)} />
        {/* <button type='submit'>
          <AiOutlineSearch size={22}/>
        </button> */}
      </form>

      <div className='header__icons'>
        <BsCartFill  size={28} />

        
        <MdApps  size={28}/>
        {/* <img src="https://www.shutterstock.com/image-vector/business-man-icon-600w-249914287.jpg" alt="avatar" /> */}
        <img  src={loggedInUser ? loggedInUser.photo : "https://www.shutterstock.com/image-vector/business-man-icon-600w-249914287.jpg"} alt="avatar" />
      </div>
    </div>
  )
}

export default Navbar
// react-lazy-load-image-component react-loading-skeleton react-show-more-text redux-devtools-extension axios