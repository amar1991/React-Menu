import React from 'react'
import "./About.css"
import { useStateValue } from '../Components/StateProvider';


function ViewPage({id, title,body}) {
    console.log("VIEWPAGE");
    const [{api}] = useStateValue();
    return (
        <div>
           
            <div>
            <h2 className="checkout__title">Your value</h2>
           
           {api.map((item) => (
             <p key={item.id}><br />
             
               <p>{item.title}</p>
               <p>{item.body}</p>

             </p>
             )          
             )}

            </div>
        
        </div>
    )       

}

export default ViewPage
