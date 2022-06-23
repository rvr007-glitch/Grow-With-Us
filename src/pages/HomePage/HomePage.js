import React from 'react'
import HorizontalRow from '../../components/Homepage/HorizontalRow'
import Topbar from '../../components/Homepage/topbar/Topbar'
import "./HomePage.css"
const HomePage = () => {
  return (
    <>
        <div className="topbar">
            <Topbar/>
        </div>
        <HorizontalRow/> 
        <HorizontalRow/> 
        <HorizontalRow/> 
        <HorizontalRow/> 
    </>
  )
}

export default HomePage