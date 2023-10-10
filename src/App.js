import React, { useEffect } from 'react'
import './App.css'

function App() {
    let api = `https://rickandmortyapi.com/api/character/?page=1`

    useEffect(() => {
        ;(async function () {
            let data = await fetch(api).then((res) => res.json())
            console.log(data)
        })()
    }, [api])

    return (
        <div className="App">
            <h1>Rick and Morty</h1>
        </div>
    )
}

export default App
