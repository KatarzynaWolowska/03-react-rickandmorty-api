import React from 'react'
import { Chip } from '@mui/material'

const StatusChip = ({ status, top, right, bottom, left, color }) => {
    return (
        <Chip
            label={status}
            color={
                status === 'Alive'
                    ? 'success'
                    : status === 'Dead'
                    ? 'error'
                    : status === 'unknown'
                    ? 'secondary'
                    : color || 'primary'
            }
            sx={{ position: 'absolute', top: top || '30px', right: right || '30px', bottom: bottom, left: left }}
        />
    )
}

export default StatusChip
