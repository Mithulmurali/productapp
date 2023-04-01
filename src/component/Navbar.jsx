import { AppBar, Button,  Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import {Link} from 'react-router-dom'

const Navgbar = () => {
  return (
    <Box>
        <AppBar>
            <Toolbar>
                <Typography>productapp</Typography>
                <Button color="inherit"><Link to='/'>View</Link></Button>
                <Button color="inherit"><Link to='/add'>Add</Link></Button>
            </Toolbar>                
        </AppBar>
    </Box>
  )
}

export default Navgbar