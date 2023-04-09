import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const Navbar = () => {
const [anchorElNav, setAnchorElNav] = useState(null);
  const pages=["Home","Products","Login"]
   const handleOpenNavMenu=(e)=>
  {
    setAnchorElNav(e.currentTarget)
  }
  const handleCloseNavMenu=()=>
  {
    setAnchorElNav(null)
  }
  return(
    <AppBar position='static' sx={{backgroundColor:'black'}}>
    <Container maxWidth="xl">
      <Toolbar disableGutters >
        <AssignmentTurnedInIcon sx={{display:{xs:"none",md:"flex"},mr:1}}/>
      <Typography
      variant="h6"
      noWrap
      component="a"
      href='/'
      sx={{
        mr:2,
        display:{xs:'none',md:'flex'},
        fontFamily:"monospace",
        fontWeight:700,
        letterSpacing:'.3rem',
        color:'inherit',
        textDecoration:'none'
      }}>
        AssignmentEscape
      </Typography>
      <Box sx={{
        flexGrow:.5,
        display:{xs:'flex',md:'none'}
      }}>
        <IconButton
        size="large"
        onClick={handleOpenNavMenu}
        color='inherit'
        >
          <MenuIcon/>
        </IconButton>
        <Menu
        id="meny-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical:'bottom',
          horizontal:'left'
        }}
        keepMounted
        transformOrigin={{
          vertical:'top',
          horizontal:"left"
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display:{xs:'block',md:'none'}
        }}>
           {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
        </Menu>
      </Box>
      <AssignmentTurnedInIcon sx={{display:{xs:"flex",md:"none"},mr:1}}/>
      <Typography
      variant="h6"
      noWrap
      component="a"
      href='/'
      sx={{
        mr:2,
        display:{xs:'flex',md:'none'},
        fontFamily:"monospace",
        fontWeight:700,
        letterSpacing:'.3rem',
        color:'inherit',
        textDecoration:'none'
      }}>
        AssignmentEscape
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {page}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </Container>
  </AppBar>

  )
}

export default Navbar