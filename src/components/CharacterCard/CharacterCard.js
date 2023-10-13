import { Link } from 'react-router-dom'
import { Box, Card, CardContent, Typography } from '@mui/material'
import StatusChip from '../StatusChip/StatusChip'

const CharacterCard = ({ character }) => {
    const { id, name, image, species, status } = character

    return (
        <Link to={`/character/${id}`} style={{ textDecoration: 'none' }}>
            <Card sx={{ maxWidth: '320px' }}>
                <CardContent sx={{ position: 'relative' }}>
                    <Box component="img" src={image} alt={name} maxWidth="100%"></Box>
                    <Typography sx={{ fontSize: '1.2rem', fontWeight: '700' }}>{name}</Typography>
                    <Typography sx={{ fontSize: '1rem' }}>{species}</Typography>
                    <StatusChip status={status} />
                </CardContent>
            </Card>
        </Link>
    )
}

export default CharacterCard
