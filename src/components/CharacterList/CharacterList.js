import React, { useState, useEffect } from 'react'
import CharacterCard from '../CharacterCard/CharacterCard'
import { Grid } from '@mui/material'

const CharacterList = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then((response) => response.json())
            .then((data) => {
                setCharacters(data.results)
            })
            .catch((error) => {
                console.error('Error fetching character data:', error)
            })
    }, [])

    return (
        <Grid container justifyContent="center" gap={4} my={4}>
            {characters?.map((character) => (
                <Grid item>
                    <CharacterCard key={character.id} character={character} />
                </Grid>
            ))}
        </Grid>
    )
}

export default CharacterList
