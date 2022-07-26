import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Suggestions = () => {
  const [suggestions,setSuggestions]=useState([])
  useEffect(()=>{
    const config = {
      headers:{
        Authorization:"Bearer "+localStorage.getItem("jwt")
      }
    };
   
    axios.get("http://localhost:8080/auth",config).then(({data})=>{
      // console.log(data)
      setSuggestions(data)
    }).catch((e)=>console.log(e))
    // console.log(suggestions)
  },[])
  return (
    <div className="ml-7 mt-10">
    <div className="flex items-center justify-between">
      <h1 className="text-gray-400 font-medium">Suggestions for you</h1>
      <button>see all</button>
    </div>
    {suggestions.map((suggestion) => (
      <div
        key={suggestion._id}
        className="flex items-center justify-between mt-2"
      >
        <img
          src={suggestion.profile_photo}
          alt=""
          className="w-10 h-10 rounded-full object-cover border p-[2px]"
        />
        <div className="flex-1 m-1 ml-2">
          <p className="font-medium text-sm ">{suggestion.name}</p>
          <h1 className="text-xs  text-gray-500">suggestion for you</h1>
        </div>
        <div>
          <button className="text-sm text-blue-500">Follow</button>
        </div>
      </div>
    ))}
  </div>
  )
}

export default Suggestions
