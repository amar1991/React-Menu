import React, { useState, useEffect } from 'react';
import {HeroContainer,HeroImg} from '../Components/StyledComponents/Hero.style.js';
import { useStateValue } from '../Components/StateProvider';
import axios from 'axios';
import "./About.css"
import { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

export const About = () => {
  

  const [{user,api}, dispatch] = useStateValue();
  const history = useHistory();
  console.log("ABOUT PAGE");
  console.log(user.searchVal);

  const [posts, setposts] = useState([]);


  
  useEffect(()=> { 
    axios.get(`https://jsonplaceholder.typicode.com/${user.searchVal}`)
    .then(res=>{
      console.log(res)
      setposts(res.data)
      })
      .catch( err => {
        console.log(err)
      }
    )},[])

    const submithandler = (id) => {     
      console.log(id);
  
    }

 
  return (
    
   
    <HeroImg> 
      <HeroContainer className="post">
      
                               
            <div>
            {posts.map((post) => (
             <p className="post__info" key={post.id}><br />
               <p>{post.post}</p>
               <Link to={{ pathname: '/View', query: post.id }}> Search </Link>          
             </p>
             )          
             )}
            </div>

         </HeroContainer>  
        </HeroImg>      
    
  )
}
