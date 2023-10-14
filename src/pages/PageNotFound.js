import React from 'react'
import { Typography, Box } from '@mui/material'
import MainWrapper from '../components/MainWrapper/MainWrapper'
import BackButton from '../components/BackButton/BackButton'

const PageNotFound = () => {
    return (
        <MainWrapper>
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2">404... There's nothing here...</Typography>
                <BackButton />
                <Box
                    component="img"
                    src={process.env.PUBLIC_URL + '/images/404.png'}
                    alt="404"
                    style={{ margin: 'auto', display: 'block' }}
                />
            </Box>
        </MainWrapper>
    )
}

export default PageNotFound
