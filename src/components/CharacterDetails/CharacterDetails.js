import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import { API_URL } from '../../constants'
import MainWrapper from '../MainWrapper/MainWrapper'
import BackButton from '../BackButton/BackButton'

const CardDetails = () => {
    const { id } = useParams()
    const api = `${API_URL}/character/${id}`

    const [data, setData] = useState([])

    useEffect(() => {
        ;(async function () {
            let data = await fetch(api).then((res) => res.json())
            setData(data)
        })()
    }, [api])

    return (
        <MainWrapper>
            <BackButton />
            <Box>{data?.name}</Box>
        </MainWrapper>
    )
}

export default CardDetails
