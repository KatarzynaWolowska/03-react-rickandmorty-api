import { Link } from 'react-router-dom'
import { Box, Card, CardContent, Typography } from '@mui/material'

const CharacterDetails = ({ character }) => {
    return (
        <Link to={`/character/${character.id}`}>
            <Card sx={{ maxWidth: '320px' }}>
                <CardContent>
                    <Box component="img" src={character.image} alt={character.name} maxWidth="100%"></Box>
                    <Typography sx={{ fontSize: '1.2rem' }}>{character.name}</Typography>
                    <Typography sx={{ fontSize: '1rem' }}>{character.species}</Typography>
                </CardContent>
            </Card>
        </Link>
    )
}

export default CharacterDetails
