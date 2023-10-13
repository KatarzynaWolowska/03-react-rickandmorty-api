import { useNavigate } from 'react-router-dom'
import { IconButton } from '@mui/material'

const BackButton = () => {
    const navigate = useNavigate()

    return (
        <IconButton color="primary" aria-label="add to shopping cart" onClick={() => navigate(-1)}>
            go back
        </IconButton>
    )
}

export default BackButton
