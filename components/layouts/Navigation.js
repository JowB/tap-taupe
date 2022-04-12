import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link'

export default function MenuGame() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <Link href="/" passHref>
                                <MenuItem>
                                    <Typography textAlign="center">Home</Typography>
                                </MenuItem>
                            </Link>
                            <Link href="/game" passHref>
                                <MenuItem>
                                    <Typography textAlign="center">Game</Typography>
                                </MenuItem>
                            </Link>
                            <Link href="/products" passHref>
                                <MenuItem>
                                    <Typography textAlign="center">Produits</Typography>
                                </MenuItem>
                            </Link>
                            <Link href="/messages" passHref>
                                <MenuItem>
                                    <Typography textAlign="center">Messages</Typography>
                                </MenuItem>
                            </Link>
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Link href="/" passHref>
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Home
                            </Button>
                        </Link>
                        <Link href="/game" passHref>
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Game
                            </Button>
                        </Link>
                        <Link href="/products" passHref>
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Produits
                            </Button>
                        </Link>
                        <Link href="/messages" passHref>
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Messages
                            </Button>
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
};