import { useNavigate } from 'react-router-dom'
import { IconButton } from '@mui/material'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'

const BackButton = () => {
    const navigate = useNavigate()

    return (
        <IconButton aria-label="Go back" onClick={() => navigate(-1)}>
            <ArrowBackRoundedIcon fontSize="large" />
        </IconButton>
    )
}

export default BackButton
