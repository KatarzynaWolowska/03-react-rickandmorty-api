import React from 'react'
import { Typography, Box } from '@mui/material'
import MainWrapper from '../components/MainWrapper/MainWrapper'
import BackButton from '../components/BackButton/BackButton'

const PageNotFound = () => {
    return (
        <MainWrapper>
            <Box sx={{ textAlign: 'center' }}>
                <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
                    <BackButton />
                    <Typography variant="h2" fontSize="1.7rem">
                        404... There's nothing here...
                    </Typography>
                </Box>

                <Box
                    component="img"
                    src={process.env.PUBLIC_URL + '/images/404.png'}
                    alt="404"
                    style={{ margin: 'auto', display: 'block', maxWidth: '100%' }}
                />
            </Box>
        </MainWrapper>
    )
}

export default PageNotFound
