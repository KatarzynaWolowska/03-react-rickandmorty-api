import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { API_URL } from '../../constants'

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

    return <div>{data?.name}</div>
}

export default CardDetails
