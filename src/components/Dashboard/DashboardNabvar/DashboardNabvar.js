import React, { useContext} from 'react';
import { AiOutlineArrowLeft,AiOutlineArrowRight } from "react-icons/ai";
import { UserContext } from '../../../App';



const DashboardNabvar = () => {
 
    const [show,setShow] = useContext(UserContext)

    return (
        <div className=" container shadow p-2 mt-3 bg-white rounded">
        
   {
       show? 
       < AiOutlineArrowLeft onClick={()=>setShow(!show)}/>
       :
       < AiOutlineArrowRight onClick={()=>setShow(!show)}/>
    
               
           
   }

            
        </div>
    );
};

export default DashboardNabvar;