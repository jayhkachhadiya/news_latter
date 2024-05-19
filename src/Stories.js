import React from 'react'
import { useEffect } from 'react'
const Stories = () => {

    let isLoading=true;
    let API="https://hn.algolia.com/api/v1/search?query=html"

    const fetchApiData=async(url)=>{
        try {
            const res=await fetch(url);
            const data=await res.json();
            console.log(data)
            isLoading=false;
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchApiData(API);
    }, [])

    if(isLoading){
        return <h1>Loading...</h1>
    }
  return (
    <div>
     <h2>Tech news </h2>
    </div>
  )
}

export default Stories
