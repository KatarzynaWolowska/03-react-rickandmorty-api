import React from 'react'
import { Container, Typography, Box } from '@mui/material'

const MainWrapper = ({ children }) => {
    return (
        <Container p={3}>
            <Typography variant="h1" align="center" fontSize="4rem" fontWeight="400">
                Rick and Morty
            </Typography>
            <Box>{children}</Box>
        </Container>
    )
}

export default MainWrapper
