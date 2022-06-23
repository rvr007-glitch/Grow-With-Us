import "./topbar.css";


import { BsFillPersonFill } from "react-icons/bs"
import { BsFillChatSquareFill } from "react-icons/bs"
import { IoIosNotifications } from "react-icons/io"
import { ImSearch } from "react-icons/im"




export default function Topbar() {
 
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        
          <span className="logo">Grow With Us</span>
       
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <ImSearch  className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Market</span>
          <span className="topbarLink">Offers</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <BsFillPersonFill />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <BsFillChatSquareFill/>
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <IoIosNotifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
      
          <img
            src=""
            alt=""
            className="topbarImg"
          />
     
      </div>
    </div>
  );
}