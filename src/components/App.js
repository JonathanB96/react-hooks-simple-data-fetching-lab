// create your App component here
import React, {useEffect, useState} from 'react'

export default function App() {
    const[isLoaded, SetLoad] = useState(false)
    const [url, setUrl] = useState("")
    
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res=>res.json()))
        .then(data=>{
            setUrl(data.message)
            SetLoad(true)
        })

    }, [])
    if (!isLoaded) return  <p>Loading...</p>
    return <>
    <div>
    <img src={url} alt="A Random Dog"></img>
    </div>
    
    </>

  
}

