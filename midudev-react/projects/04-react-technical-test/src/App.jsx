import { useEffect, useState } from "react"

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

            const threeFirstWord = fact.split(' ', 3).join(' ')
            
            setImgUrl(`https://cataas.com/cat/says/${threeFirstWord}?fontSize=80&fontColor=white`)

        })
    }, [])
    
    return (
        <main>
            <h1>App de gatetes</h1>
            {fact && <p>{fact}</p>}
            {imgUrl && <img src={`${imgUrl}`} alt={`random cat with the text`}></img>}

        </main>
    )
}