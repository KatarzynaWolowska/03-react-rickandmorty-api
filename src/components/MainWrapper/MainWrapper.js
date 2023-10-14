import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Box } from '@mui/material'

const MainWrapper = ({ children }) => {
    return (
        <Container sx={{ px: 4 }}>
            <Box sx={{ textAlign: 'center' }}>
                <Link to="/" title="Home">
                    <img
                        src={process.env.PUBLIC_URL + '/images/Rick-And-Morty-Logo.png'}
                        alt="Rick and Morty"
                        style={{ width: '400px' }}
                    />
                </Link>
            </Box>

            <Box>{children}</Box>
        </Container>
    )
}

export default MainWrapper
