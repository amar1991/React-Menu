import React,{useState, useEffect} from 'react';
import {Hero} from '../Components/Hero';
export const Home = () => {

  
  const [search, setSearch] = useState("");

  useEffect(() =>{
  },[search]);
  
  
  const searching = (text) => {
    setSearch(text);
  }
  return (
    <>
     <Hero search = {searching} />
    </>
  )
}
