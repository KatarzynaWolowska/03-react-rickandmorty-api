import React, { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { useParams, Link } from 'react-router-dom'
import { API_URL } from '../../constants'
import MainWrapper from '../MainWrapper/MainWrapper'
import BackButton from '../BackButton/BackButton'
import StatusChip from '../StatusChip/StatusChip'

const CharacterDetails = () => {
    const { id } = useParams()
    const api = `${API_URL}/character/${id}`

    const [character, setCharacter] = useState([])
    const [episodesNumbers, setEpisodesNumbers] = useState('')
    const [episodesAllData, setEpisodesAllData] = useState([])

    useEffect(() => {
        ;(async function () {
            let data = await fetch(api).then((res) => res.json())
            setCharacter(data)
        })()
    }, [api])

    useEffect(() => {
        // ... to array
        // character?.episode?.map((el, i) => setEpisodes((current) => [...current, el.replace(apiEpisodes, '')]))
        let text = ''
        for (let e in character?.episode) {
            text += character?.episode[e].replace(`${API_URL}/episode/`, ',')
        }
        setEpisodesNumbers(text)
    }, [character])

    useEffect(() => {
        episodesNumbers &&
            (async function () {
                let data = await fetch(`${API_URL}/episode/${episodesNumbers}`).then((res) => res.json())
                setEpisodesAllData(data)
                console.log(data)
            })()
    }, [episodesNumbers])

    return (
        <MainWrapper>
            <BackButton />
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ maxWidth: '320px', pr: 2, pt: 2, position: 'relative' }}>
                    <Box component="img" src={character?.image} alt={character.name} maxWidth="100%"></Box>
                    {character?.status && <StatusChip status={character?.status} />}
                </Box>
                <Box pt={2}>
                    <Typography sx={{ fontSize: '1.2rem', fontWeight: '700' }}>{character?.name}</Typography>
                    <Typography>Gender: {character?.gender}</Typography>
                    <Typography>Location: {character?.location?.name}</Typography>
                    <Box>
                        {episodesAllData?.map((el, i) => (
                            <Typography key={i}>
                                {el.episode} - {el.name}
                            </Typography>
                        ))}
                    </Box>
                </Box>
            </Box>
        </MainWrapper>
    )
}

export default CharacterDetails
