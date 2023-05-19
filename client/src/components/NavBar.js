import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { UserContext } from './context/UserContext';
import { Button, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../../src/logo-transparent.png'

function NavBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);

    const { user, setUser } = React.useContext(UserContext)

    const navigate = useNavigate()

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = async event => {
        event.preventDefault();

        const res = await fetch('/api/logout', {
            method: 'DELETE'
        })
        if (res.ok) {
            setUser(null)
            navigate('/')
        }
    }

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleLogout}>Log out {user.username}</MenuItem>
        </Menu>
    );
    
    return (
        <Box sx={{ flexGrow: 1, position: 'sticky'  }}>
            <AppBar position="static" sx={{backgroundColor: '#121212', color: '#646464'}}>
                <Toolbar>
                    <Link href='/home' underline='none'>
                        <img src={logo} width="200px" height="32px" alt='logo'/>
                    </Link>
                    <Box sx={{ flexGrow: 1 }} />
                    <Button variant='outlined' component='a' href='/about' sx={{mr: 5}}>About</Button>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle sx={{'fontSize': '50px'}}/>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMenu}
        </Box>
    );
}


export default NavBar;


/* const {setUser} = useContext(UserContext)


async function handleLogout(e){
    e.preventDefault();
    
    const res = await fetch('/api/logout', {
        method: 'DELETE'
    })
    if (res.ok) setUser(null)
}
return <button onClick={handleLogout}>Logout</button> */