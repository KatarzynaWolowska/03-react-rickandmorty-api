import { Box, Card, CardContent, Typography } from '@mui/material'

const CharacterCard = ({ character }) => {
    return (
        <Card sx={{ maxWidth: '320px' }}>
            <CardContent>
                <Box component="img" src={character.image} alt={character.name} maxWidth="100%"></Box>
                <Typography sx={{ fontSize: '1.2rem' }}>{character.name}</Typography>
                <Typography sx={{ fontSize: '1rem' }}>{character.species}</Typography>
            </CardContent>
        </Card>
    )
}

export default CharacterCard
