import React from 'react'
import CharacterCard from '../CharacterCard/CharacterCard'
import { Grid } from '@mui/material'

const CharacterList = ({ characters }) => {
    return (
        <Grid container justifyContent="center" gap={4} my={4}>
            {characters?.map((character) => (
                <Grid item key={character.id}>
                    <CharacterCard key={character.id} character={character} />
                </Grid>
            ))}
        </Grid>
    )
}

export default CharacterList
