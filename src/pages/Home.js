import React, { useState, useEffect } from 'react'
import { Typography, Container, Pagination, Box, CircularProgress } from '@mui/material'
import CharacterList from '../components/CharacterList/CharacterList'
import SearchBar from '../components/SearchBar/SearchBar'
import { API_URL } from '../constants'

const Home = () => {
    const [fetchedData, updateFetchedData] = useState([])

    const { info, results } = fetchedData

    const [page, setPage] = useState(1)

    const [search, setSearch] = useState('')

    const api = `${API_URL}/character/?page=${page}&name=${search}`

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

    useEffect(() => {
        console.log(search)
    }, [search])

    return (
        <div className="App">
            <Container sx={{ p: 3, textAlign: 'center' }}>
                <Typography variant="h1" align="center" fontSize="4rem" fontWeight="400">
                    Rick and Morty
                </Typography>

                <SearchBar setSearch={setSearch} />

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

export default Home
