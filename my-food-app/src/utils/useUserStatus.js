import { useEffect, useState } from "react";

import React from "react";

const useUserStatus = ()=>{
    const[userStatus, setUserStatus]=useState(true)

    useEffect(()=>{
         window.addEventListener('offline',()=>{
            setUserStatus(false)
            
         });

         window.addEventListener('online', ()=>{
            setUserStatus(true);
         })
    },[])
    


   return userStatus;

}
export default useUserStatus;