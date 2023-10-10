import { Box, Card, CardContent, Typography } from '@mui/material'

const CharacterCard = ({ result }) => {
    return (
        <Card sx={{ maxWidth: '32%', p: 4, m: 2, transform: 'scale(0.8)' }}>
            <CardContent>
                <Box component="img" src={result.image} alt={result.name} maxWidth="100%"></Box>
                <Typography sx={{ fontSize: '2rem' }}>{result.name}</Typography>
                <Typography sx={{ fontSize: '1rem' }}>{result.species}</Typography>
            </CardContent>
        </Card>
    )
}

export default CharacterCard
