import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import ListDogs from '../components/ListDogs'

export default function List() {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get("https://dog.ceo/api/breeds/list/all").then((res)=>{
            console.log(res.data.message);
            let arr=[]
            for(let x in res.data.message){
                console.log(x);
                arr.push(x)
            }
            setData(arr)
            return res
        })
    },[])
    console.log("data: ",data);

    const logout=()=>{
        alert(`${loggedIn.name} logging you out!`)
        localStorage.setItem("ifLogged",false)
        window.location="/"
    }

    let loggedIn=JSON.parse(localStorage.getItem("loggedIn"))
  return (
    <div>
        {
           loggedIn?<div>
            <button onClick={logout}>Log-Out!</button>
           </div>:"" 
        }
        <div id="dogCont">
            {
                data.map((e,i)=>{
                    return <ListDogs dogs={e} key={i} />
                })
            }
        </div>
    </div>
  )
}

