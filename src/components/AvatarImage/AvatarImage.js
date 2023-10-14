import { Box } from '@mui/material'

const AvatarImage = ({ image, name }) => {
    return (
        <>
            {image === null || image === '' ? (
                <Box component="img" src={process.env.PUBLIC_URL + '/images/avatar.png'} alt="avatar" maxWidth="100%" />
            ) : (
                <Box component="img" src={image} alt={name} maxWidth="100%" />
            )}
        </>
    )
}
export default AvatarImage
