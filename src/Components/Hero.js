import React from 'react'
import {HeroContainer, HeroImg} from './StyledComponents/Hero.style.js';
import {SearchBar} from './SearchBar';
export const Hero =  function ({search}) {
  return (
      <HeroImg> 
        <HeroContainer>
          <h1> Welcome to the resturant <span> Get the best recipe</span></h1>
          <SearchBar search = {search} />
        </HeroContainer>
      </HeroImg>
  )
}


