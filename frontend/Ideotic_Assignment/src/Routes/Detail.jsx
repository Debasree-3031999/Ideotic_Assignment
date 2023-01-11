import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from "react-router-dom";


export default function Detail() {
    let [data,setData]=useState("")
    let {detail}=useParams()
    console.log("detail :",detail);
    useEffect(()=>{
       let image=fetch("https://dog.ceo/api/breeds/image/random").then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data.message);
        setData(data.message)
        return data.message
    })
    },[])
  return (
    <div>
        <div id="dogDetail">
            <div id="dogImg">
                <img src={data} alt="dogPic" />
                <p className="dogName">{detail}</p>
            </div>
        </div>
    </div>
  )
}
