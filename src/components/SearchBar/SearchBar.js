import React, { useState } from 'react'
import { TextField } from '@mui/material'

const SearchBar = ({ setSearch }) => {
    const [value, setValue] = useState('')

    const keyboardEvents = (e) => {
        e.persist()
        e.key === 'Enter' && setSearch(value)
    }

    return (
        <TextField
            label="Search character"
            variant="outlined"
            fullWidth
            sx={{ maxWidth: '1024px', mt: 5 }}
            onKeyPress={keyboardEvents}
            onChange={(e) => {
                setValue(e.target.value)
            }}
        />
    )
}

export default SearchBar
