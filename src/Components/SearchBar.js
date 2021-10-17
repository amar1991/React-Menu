import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
import {Form,InputField, Button } from './StyledComponents/SearchBar.style';
import { useStateValue } from './StateProvider';



export const SearchBar =  function SearchBar() {

  

  const [searchVal, setSearch] = useState("");
  const history = useHistory();
  
  const[{user},dispatch] = useStateValue();

  const submitHandler = (event) => {
    event.preventDefault();

    dispatch({
      type: "SET_USER",
      user:{searchVal}     
  })
  
    history.push("/about");   
  }


  return (
    <Form>
      <InputField onChange={(event) => setSearch(event.target.value)} type="text"/>
      <Button onClick={submitHandler}>Search</Button>
    </Form>
  )
}
 