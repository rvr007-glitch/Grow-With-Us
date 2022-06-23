
import React,{useState} from 'react'
import "./ListItem.css"

export const Listitem = ({index}) => {
    const [isHover,setisHoverd]=useState(true);
 
    return (
        
        <div className="listItem"style={{left: isHover}}    onMouseEnter={()=>setisHoverd(true)} onMouseLeave={()=>setisHoverd(false)}>
        <img src="https://mypostercollection.com/wp-content/uploads/2018/08/The-Dark-Knight-Poster-2018-MyPosterCollection.com-1-683x1024.jpg"></img>
        
          <div className='deekhjaa'>
   
           <div className="iteminfo">
           
           {/* <div className="icons">
           
          <Add className="icon"/>
           <ThumbUpAltOutlined className="icon"/>
           <ThumbDownAltOutlined className="icon"/> 
           </div>*/}

         
           <div className="listiteminfo">
               <span>1 hr 14 min</span>
               <span className="limit">18+</span>
               <span>2008</span>
               </div>
               <div className="desc">
               The Dark Knight Rises is a 2012 superhero film directed by 
               Christopher Nolan,
    
                 
               </div>
               <div className="genre">Action/Thriller</div>

           </div>
           
           </div>
      
          
        </div>
    )
}
