import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const UseAuth = () =>{
    const Navigate = useNavigate()

    useEffect(()=>{

        const token = localStorage.getItem('token');

    if(!token){
        Navigate('/login');
    }
    } , [Navigate]);
    
}

export default UseAuth;