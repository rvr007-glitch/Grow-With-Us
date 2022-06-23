import React from 'react'
import "./HorizontalRow.css"
import {useRef, useState,useEffect} from 'react'

import { Listitem } from './ListItem'
import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from "react-icons/bs"

const HorizontalRow = () => {
    
    const movies = [
        "https://ntvb.tmsimg.com/assets/p8696131_b_h10_aa.jpg?w=1280&h=720",
        "https://whiteaways.lk/wp-content/uploads/2021/01/6.Game-of-Thrones.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS1blwiqk_rdux3hsubArZkucOnOHktD8BizDybDZreg0goWllDz8YYEeRTxxZyZUDKRs&usqp=CAU",
        "https://imageio.forbes.com/specials-images/imageserve/5d30c8e5eab9270008f9bd2a/Casa-de-Papel-3/960x0.jpg?format=jpg&width=960",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-2MPsY1oI6AfRBGqKS-w-4VZ5WCdzDgpFuUEMvn9vdi01M3j2_waIT4PE3xbHPQwmD0&usqp=CAU",
        "https://whiteaways.lk/wp-content/uploads/2021/01/6.Game-of-Thrones.jpg",
        "https://ntvb.tmsimg.com/assets/p8696131_b_h10_aa.jpg?w=1280&h=720",
        "https://whiteaways.lk/wp-content/uploads/2021/01/6.Game-of-Thrones.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS1blwiqk_rdux3hsubArZkucOnOHktD8BizDybDZreg0goWllDz8YYEeRTxxZyZUDKRs&usqp=CAU",
        "https://imageio.forbes.com/specials-images/imageserve/5d30c8e5eab9270008f9bd2a/Casa-de-Papel-3/960x0.jpg?format=jpg&width=960",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-2MPsY1oI6AfRBGqKS-w-4VZ5WCdzDgpFuUEMvn9vdi01M3j2_waIT4PE3xbHPQwmD0&usqp=CAU",
        "https://whiteaways.lk/wp-content/uploads/2021/01/6.Game-of-Thrones.jpg",
      ];
      
   
    //   const [style, set] = useSpring(() => ({
    //     transform: "perspective(500px) rotateY(0deg)"
    //   }));
    
    //   const bind = useScroll(event => {
    //     set({
    //       transform: `perspective(500px) rotateY(${
    //         event.scrolling ? event.delta[0] : 0
    //       }deg)`
    //     });
    //   });
    const listRef= useRef();
    const[slideNumber,setslideNumber]=useState(0);
    const[val,setval]=useState(0);
    // setval(movies.length);
    const[isMoved,setisMoved]=useState(false);
    const handleClick=(direction)=>{
        console.log(val)
        setisMoved(true);
        const distance=listRef.current.getBoundingClientRect().x-10;
        if(direction=="left"&& slideNumber>0){
            setslideNumber(slideNumber-1);
           

            listRef.current.style.transform=`translateX(${258+distance}px)`
        }
        if(direction=="right" &&slideNumber<movies.length-6){
            setslideNumber(slideNumber+1);
            

            listRef.current.style.transform=`translateX(${-258+distance}px)`
        }
    }
console.log(movies.length)
  return (
    <>
    <div className="wrapper" >
    <BsArrowLeftCircleFill fill='rgba(130, 9, 9, 0.878)' className="ArrowSliderLeft arrow"onClick={()=>handleClick("left")}style={{display:!isMoved && "none"}}/>
            <div className="container" ref={listRef}>
            {movies.map(i => (
                <Listitem index={i}/>
                /* <Listitem index={1}/>
                <Listitem index={2}/>
                <Listitem index={3}/>
                <Listitem index={4}/>
                <Listitem index={5}/>
                <Listitem index={6}/>
                <Listitem index={7}/>
                <Listitem index={8}/>
                <Listitem index={9}/>
                <Listitem index={10}/>
                <Listitem index={11}/>
                <Listitem index={12}/>
                <Listitem index={13}/> */
            ))}
            </div>
            <BsArrowRightCircleFill fill='rgba(130, 9, 9, 0.878)' className="ArrowSliderRight arrow" onClick={()=>handleClick("right")}/>
      
    </div>
  </>
  )
}

export default HorizontalRow