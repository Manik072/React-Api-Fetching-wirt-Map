import React from 'react'
import { useState, useEffect } from 'react';

export default function Test() {
    const [call ,setApi] =useState([]);

    const getApi =  async () => {
            const get = await fetch("https://jsonplaceholder.typicode.com/users");
            setApi(await get.json());
            // console.log(response);
      }
  
      useEffect(()=>{
          getApi();
      },[]);
  return (
    <div>
      {
        call.map((elem)=>{
            return(
                <div key={elem.id}>
                <h1>{elem.name}</h1>
                </div>
            );
        })
      }
    </div>
  )
}
