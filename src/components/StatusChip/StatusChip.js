import React from 'react'
import { Chip } from '@mui/material'

const StatusChip = ({ status }) => {
    return (
        <Chip
            label={status}
            color={status === 'Alive' ? 'success' : status === 'Dead' ? 'error' : 'primary'}
            sx={{ position: 'absolute', top: '30px', right: '30px' }}
        />
    )
}

export default StatusChip
