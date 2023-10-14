import React, { useState, useEffect } from 'react'
import { Box, Typography, Card, CardContent } from '@mui/material'
import { useParams } from 'react-router-dom'
import { API_URL } from '../../constants'
import MainWrapper from '../MainWrapper/MainWrapper'
import BackButton from '../BackButton/BackButton'
import StatusChip from '../StatusChip/StatusChip'
import AvatarImage from '../AvatarImage/AvatarImage'
import Loader from '../Loader/Loader'

const CharacterDetails = () => {
    const { id } = useParams()
    const api = `${API_URL}/character/${id}`

    const [isLoading, setIsLoading] = useState(true)

    const [character, setCharacter] = useState([])
    const [episodesRequestToAPI, setEpisodesRequestToAPI] = useState('')
    const [episodesAllData, setEpisodesAllData] = useState([])

    const { name, image, status, gender, location } = character

    useEffect(() => {
        ;(async function () {
            let data = await fetch(api).then((res) => res.json())
            setCharacter(data)
        })()
    }, [api])

    useEffect(() => {
        let text = ''
        for (let e in character?.episode) {
            text += character?.episode[e].replace(`${API_URL}/episode/`, ',')
        }
        setEpisodesRequestToAPI(text)
        setTimeout(() => {
            setIsLoading(false)
        }, 500)
    }, [character])

    useEffect(() => {
        episodesRequestToAPI &&
            (async function () {
                let data = await fetch(`${API_URL}/episode/${episodesRequestToAPI}`).then((res) => res.json())
                setEpisodesAllData(data)
                console.log(data)
            })()
    }, [episodesRequestToAPI])

    return (
        <MainWrapper>
            {!isLoading ? (
                <>
                    <Box display="flex" alignItems="center" mb={2} gap={2}>
                        <BackButton />
                        <Typography sx={{ fontSize: '1.2rem', fontWeight: '700' }}>{name}</Typography>
                    </Box>

                    <Box display="flex" gap={2}>
                        <Box sx={{ maxWidth: '320px', position: 'relative' }}>
                            <Card>
                                <CardContent>
                                    <AvatarImage image={image} name={name} />
                                    <Typography textAlign="center">{location?.name}</Typography>
                                </CardContent>
                            </Card>

                            <StatusChip status={status} />
                            <StatusChip status={gender} top="70px" />
                        </Box>
                        <Box>
                            {episodesAllData?.map((el, i) => (
                                <Typography key={i}>
                                    {el.episode} - {el.name}
                                </Typography>
                            ))}
                        </Box>
                    </Box>
                </>
            ) : (
                <Loader />
            )}
        </MainWrapper>
    )
}

export default CharacterDetails
