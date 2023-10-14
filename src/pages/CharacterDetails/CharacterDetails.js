import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import getData from '../../api/api'
import { Box, Typography, Card, CardContent } from '@mui/material'
import { useParams } from 'react-router-dom'
import { API_URL } from '../../constants'
import MainWrapper from '../../components/MainWrapper/MainWrapper'
import BackButton from '../../components/BackButton/BackButton'
import StatusChip from '../../components/StatusChip/StatusChip'
import AvatarImage from '../../components/AvatarImage/AvatarImage'
import Loader from '../../components/Loader/Loader'

const CharacterDetails = () => {
    const { id } = useParams()
    const api = `${API_URL}/character/${id}`

    const [isLoading, setIsLoading] = useState(true)

    const [character, setCharacter] = useState([])
    const [episodesRequestToAPI, setEpisodesRequestToAPI] = useState('')
    const [episodesAllData, setEpisodesAllData] = useState([])

    const { name, image, status, gender, location } = character

    const navigate = useNavigate()

    useEffect(() => {
        getData(api, navigate, setCharacter, setIsLoading)
    }, [api, navigate])

    useEffect(() => {
        let text = ''
        for (let e in character?.episode) {
            text += character?.episode[e].replace(`${API_URL}/episode/`, ',')
        }
        setEpisodesRequestToAPI(text)
    }, [character])

    useEffect(() => {
        episodesRequestToAPI &&
            getData(`${API_URL}/episode/${episodesRequestToAPI}`, navigate, setEpisodesAllData, setIsLoading)
    }, [episodesRequestToAPI, navigate])

    return (
        <MainWrapper>
            {!isLoading ? (
                <>
                    <Box display="flex" alignItems="center" mb={2} gap={2}>
                        <BackButton />
                        <Typography sx={{ fontSize: '1.2rem', fontWeight: '700' }}>{name}</Typography>
                    </Box>

                    <Box
                        display="flex"
                        sx={{
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: { xs: 'center', md: 'flex-start' },
                        }}
                        gap={2}
                    >
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
