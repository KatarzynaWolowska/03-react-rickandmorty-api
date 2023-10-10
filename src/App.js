import React, { useEffect, useState } from 'react'
import { Typography, Container, Stack } from '@mui/material'
import CharacterCard from './components/CharacterCard/CharacterCard'
import './App.css'

function App() {
    let api = `https://rickandmortyapi.com/api/character/?page=1`

    let [fetchedData, updateFetchedData] = useState([])
    let { info, results } = fetchedData

    useEffect(() => {
        ;(async function () {
            let data = await fetch(api).then((res) => res.json())
            updateFetchedData(data)
        })()
    }, [api])

    useEffect(() => {
        console.log(results)
    }, [results])

    return (
        <div className="App">
            <Container sx={{ p: 3 }}>
                <Typography variant="h1" align="center">
                    Rick and Morty
                </Typography>

                <Stack
                    spacing={{ xs: 1, sm: 2 }}
                    direction="row"
                    justifyContent="center"
                    flexWrap="wrap"
                    alignItems="center"
                >
                    {results?.map((result, i) => (
                        <CharacterCard key={result.id} result={result} />
                    ))}
                </Stack>
            </Container>
        </div>
    )
}

export default App
