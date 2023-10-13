import { Box, Card, CardContent, Typography } from '@mui/material'

const CharacterCard = ({ character }) => {
    return (
        <Card>
            <CardContent>
                <Box component="img" src={character.image} alt={character.name} maxWidth="100%"></Box>
                <Typography sx={{ fontSize: '1.5rem' }}>{character.name}</Typography>
                <Typography sx={{ fontSize: '1rem' }}>{character.species}</Typography>
            </CardContent>
        </Card>
    )
}

export default CharacterCard
