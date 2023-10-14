import { API_URL } from '../constants'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import getData from '../api/api'
import { Pagination, Box } from '@mui/material'
import MainWrapper from '../components/MainWrapper/MainWrapper'
import CharacterList from '../components/CharacterList/CharacterList'
import SearchBar from '../components/SearchBar/SearchBar'
import Loader from '../components/Loader/Loader'

const Home = () => {
    const [isLoading, setIsLoading] = useState(true)

    const [charactersData, setCharactersData] = useState([])

    const { info, results } = charactersData

    const [page, setPage] = useState(1)

    const [search, setSearch] = useState('')

    const api = `${API_URL}/character/?page=${page}&name=${search}`

    const navigate = useNavigate()

    useEffect(() => {
        getData(api, navigate, setCharactersData, setIsLoading)
    }, [api, navigate])

    return (
        <div className="App">
            <MainWrapper>
                <Box textAlign="center">
                    <SearchBar setSearch={setSearch} />

                    {!isLoading ? (
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
