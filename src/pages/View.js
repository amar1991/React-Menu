import React from 'react'
import { useStateValue } from '../Components/StateProvider';
import ViewPage from './ViewPage';

function View({id,title,body}) {
   /* const [{api}] = useStateValue();
    return (
        <div>
           {api?.length === 0 ? (
               <div>
                   <h2>Cannot get value</h2>
               </div>
           ) : (
            <div>
            <h2 className="checkout__title">Your value</h2>
            {api?.map(item =>
                <ViewPage
                    id={item.id}
                    title={item.title}
                    body={item.body}
                />
            )}
            </div>

           )

           }            
        </div>
    )*/
}

export default View
