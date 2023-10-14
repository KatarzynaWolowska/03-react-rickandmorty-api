import { Link } from 'react-router-dom'
import { Box, Card, CardContent, Typography } from '@mui/material'
import StatusChip from '../StatusChip/StatusChip'
import styles from './CharacterCard.module.css'

const CharacterCard = ({ character }) => {
    const { id, name, image, species, status, gender } = character

    return (
        <Link to={`/character/${id}`} style={{ textDecoration: 'none' }}>
            <Card sx={{ maxWidth: '320px' }}>
                <CardContent className={styles.grow} sx={{ position: 'relative' }}>
                    <Box sx={{ width: '100%', height: '288px', overflow: 'hidden', mb: 2 }}>
                        <Box component="img" src={image} alt={name} maxWidth="100%"></Box>
                    </Box>
                    <Typography sx={{ fontSize: '1.2rem', fontWeight: '700' }}>{name}</Typography>
                    <Typography>{species}</Typography>
                    <StatusChip status={status} />
                    <StatusChip status={gender} top="70px" />
                </CardContent>
            </Card>
        </Link>
    )
}

export default CharacterCard
