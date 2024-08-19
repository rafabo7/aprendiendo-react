import { useState, useEffect } from "react";

export function useCatImage ({fact}) {
    const [imgUrl, setImgUrl] = useState()

    useEffect(() => {
        if (!fact) return
        const threeFirstWord = fact.split(' ', 3).join(' ')
            
        setImgUrl(`https://cataas.com/cat/says/${threeFirstWord}?fontColor=white`)
    },[fact])

    return {imgUrl}    
}