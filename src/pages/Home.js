import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Pagination, Box, CircularProgress } from '@mui/material'
import MainWrapper from '../components/MainWrapper/MainWrapper'
import CharacterList from '../components/CharacterList/CharacterList'
import SearchBar from '../components/SearchBar/SearchBar'
import { API_URL } from '../constants'

const Home = () => {
    const [fetchedData, updateFetchedData] = useState([])

    const { info, results } = fetchedData

    const [page, setPage] = useState(1)

    const [search, setSearch] = useState('')

    const api = `${API_URL}/character/?page=${page}&name=${search}`

    const navigate = useNavigate()

    useEffect(() => {
        async function fetchCharacters() {
            try {
                const response = await fetch(api)

                if (response.status === 404) {
                    throw new Error('404')
                }

                const resData = await response.json()

                updateFetchedData([])

                setTimeout(() => {
                    updateFetchedData(resData)
                }, 500)
            } catch (error) {
                error.message === '404' && navigate('/404')
            }
        }

        fetchCharacters()
        /*
        fetch(api)
            .then((response) => response.json())

            .then((data) => {
                updateFetchedData([])
                setTimeout(() => {
                    updateFetchedData(data)
                }, 500)
            })
            .catch((error) => {
                console.error('Error fetching:', error)
            })
            */
    }, [api])

    useEffect(() => {
        console.log(results)
    }, [results])

    return (
        <div className="App">
            <MainWrapper>
                <Box textAlign="center">
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
                </Box>
            </MainWrapper>
        </div>
    )
}

export default Home
