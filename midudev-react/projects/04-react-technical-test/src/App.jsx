import { useEffect, useState } from "react"
import './App.css'

export function App () {
    const [fact, setFact] = useState()
    const [imgUrl, setImgUrl] = useState()


    const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(response => response.json())
        .then(data => {
            const { fact } = data

            setFact(fact)

        })
    }, [])

    useEffect(() => {
        if (!fact) return
        const threeFirstWord = fact.split(' ', 3).join(' ')
            
        setImgUrl(`https://cataas.com/cat/says/${threeFirstWord}?fontColor=white`)
    },[fact])
    
    return (
        <main>
            <h1>App de gatetes</h1>
            {fact && <p>{fact}</p>}
            {imgUrl && <img src={`${imgUrl}`} alt={`random cat with the text`}></img>}

        </main>
    )
}