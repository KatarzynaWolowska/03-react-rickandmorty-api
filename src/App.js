import React, { useState, useEffect } from 'react'
import { Typography, Container, Pagination, Box, CircularProgress } from '@mui/material'
import CharacterList from './components/CharacterList/CharacterList'

function App() {
    const [fetchedData, updateFetchedData] = useState([])
    const { info, results } = fetchedData

    const [page, setPage] = useState(1)

    const api = `https://rickandmortyapi.com/api/character/?page=${page}`

    useEffect(() => {
        fetch(api)
            .then((response) => response.json())
            .then((data) => {
                updateFetchedData([])
                setTimeout(() => {
                    updateFetchedData(data)
                }, 500)
            })
            .catch((error) => {
                console.error('Error fetching character data:', error)
            })
    }, [api])

    return (
        <div className="App">
            <Container sx={{ p: 3 }}>
                <Typography variant="h1" align="center">
                    Rick and Morty
                </Typography>

                {results?.length > 0 ? (
                    <>
                        <CharacterList characters={results} />

                        <Pagination
                            page={page}
                            count={info?.pages}
                            size="large"
                            onChange={(e) => {
                                setPage(Number(e.target.textContent))
                            }}
                            sx={{ display: 'flex', justifyContent: 'center' }}
                        />
                    </>
                ) : (
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            my: 10,
                        }}
                    >
                        <CircularProgress size={50} />
                    </Box>
                )}
            </Container>
        </div>
    )
}

export default App
