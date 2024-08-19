import { useEffect, useState } from "react"
import './App.css'
import { getRandomFact } from "./services/facts"
import { useCatImage } from "./services/hooks/useCatImage"



export function App () {
    const [fact, setFact] = useState()
    const { imgUrl } = useCatImage({fact})

    


    useEffect(() => {
        async () => {
            const newFact = await getRandomFact()
            setFact(newFact)
        }
    }, [])

    

    const handleclick = async () => {
        const newFact = await getRandomFact()
        setFact(newFact)

    }
    
    return (
        <main>

            <h1>App de gatetes</h1>
            <button onClick={() => handleclick()}>Get Random Fact</button>
            {fact && <p>{fact}</p>}
            {imgUrl && <img src={`${imgUrl}`} alt={`random cat with the text`}></img>}

        </main>
    )
}