import React from 'react'
import { Typography, Container } from '@mui/material'
import CharacterList from './components/CharacterList/CharacterList'

function App() {
    return (
        <div className="App">
            <Container sx={{ p: 3 }}>
                <Typography variant="h1" align="center">
                    Rick and Morty
                </Typography>

                <CharacterList />
            </Container>
        </div>
    )
}

export default App
