import React from 'react'
import { CircularProgress, Box } from '@mui/material'

const Loader = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                my: 10,
            }}
        >
            <CircularProgress size={50} />
        </Box>
    )
}

export default Loader
