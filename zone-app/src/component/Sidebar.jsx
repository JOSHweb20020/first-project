import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/constants'
import '../App.css'
const Sidebar = ({selectedCategory, setSelectedCategory}) => {

   
  return (
    <Stack
       direction ='row'
        sx = {{
            overflow : 'auto',
            height:{sx: 'auto', md:'95%'},
            flexDirection:{md:'column'}
        }}
        >
            {categories.map((category) => (
                <button
                 className='category-btn'
                 onClick={() => setSelectedCategory(category.name)}
                 style={{
                    background: category.name === selectedCategory && 'red'
                 }}>
                    <span style={{
                        color: category.name === selectedCategory ? 'white' : 'red'
                    }}>{category.icon}</span>
                    <span style={{opacity: category.name === selectedCategory ? '1' : '0.8'}}>{category.name}</span>
                </button>
            ))}

    </Stack>
  )
}

export default Sidebar