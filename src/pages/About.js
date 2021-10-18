import React, { useState, useEffect } from 'react';
import {HeroContainer,HeroImg} from '../Components/StyledComponents/Hero.style.js';
import { useStateValue } from '../Components/StateProvider';
import axios from 'axios';
import "./About.css"
import { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import View from './View.js';

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

    const submithandler = (id,title,body) => {    
      const _id = id;
      const _title = title;
      const _body = body;
      console.log(_id);
      console.log(_title);  
      console.log(_body);
      
       //ADD ITEM TO BASKET
       dispatch({
        type:'ADD_API',
        item: {
            //key, value
            id:_id,
            title:_title,
            body:_body
        },
    });
    
    history.push("/ViewPage");

  }

 
  return (
                        
            <div className="post">
            {posts.map((post) => (
             <p className="post__info" key={post.id}><br />
               <p>{post.title}</p> 
               <button onClick={(evt) => submithandler(post.id, post.title, post.body, evt)}>View</button>                       
             </p>
             )          
             )}
            </div>
  )
}
