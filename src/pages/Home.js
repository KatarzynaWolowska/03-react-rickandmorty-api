import { API_URL } from '../constants'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Pagination, Box } from '@mui/material'
import MainWrapper from '../components/MainWrapper/MainWrapper'
import CharacterList from '../components/CharacterList/CharacterList'
import SearchBar from '../components/SearchBar/SearchBar'
import Loader from '../components/Loader/Loader'

const Home = () => {
    const [charactersData, setCharactersData] = useState([])

    const { info, results } = charactersData

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

                setTimeout(() => {
                    setCharactersData(resData)
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
                setCharactersData([])
                setTimeout(() => {
                    setCharactersData(data)
                }, 500)
            })
            .catch((error) => {
                console.error('Error fetching:', error)
            })
            */
    }, [api, navigate])

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
                        <Loader />
                    )}
                </Box>
            </MainWrapper>
        </div>
    )
}

export default Home
