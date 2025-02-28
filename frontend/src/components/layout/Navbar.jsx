import React, { useState } from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Avatar,
    Button,
    Tooltip,
    MenuItem,
} from '@mui/material';
import {
    Menu as MenuIcon,
    AccountCircle,
    Add as AddIcon,
    Notifications as NotificationsIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const pages = [
    { name: 'Recipes', path: '/recipes' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' }
];
const settings = ['Profile', 'My Recipes', 'Settings', 'Logout'];

const Navbar = () => {
    const navigate = useNavigate();
    const { isAuthenticated, logout, user } = useAuth();  // Get user info
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleNavigation = (path) => {
        navigate(path);
        handleCloseNavMenu();
    };

    const handleMenuClick = (setting) => {
        handleCloseUserMenu();
        if (setting === 'Logout') {
            logout();
            navigate('/');
        } else if (setting === 'Profile') {
            navigate('/profile');
        }
        else if(setting === 'My Recipes'){
            navigate('/my-recipes');
        }
        else if(setting === 'Settings'){
            navigate('/settings');
        }
    };

    return (
        <AppBar position="fixed" sx={{ backgroundColor: '#1a1a1a', boxShadow: 'none' }}>
            <Toolbar sx={{ height: 80, px: '0 !important', mr: 5 }}>
                {/* Logo Text */}
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    onClick={() => navigate('/')}
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        fontWeight: 700,
                        color: '#EBC76B',
                        textDecoration: 'none',
                        fontSize: '1.5rem',
                        ml: 2,
                        cursor: 'pointer',
                    }}
                >
                    RecipeNest
                </Typography>

                {/* Mobile Menu */}
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        onClick={handleOpenNavMenu}
                        sx={{ color: 'white' }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorElNav}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{ display: { xs: 'block', md: 'none' } }}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page.name} onClick={() => handleNavigation(page.path)}>
                                <Typography textAlign="center">{page.name}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        onClick={() => navigate('/')}
                        sx={{
                            flexGrow: 1,
                            fontWeight: 700,
                            color: '#EBC76B',
                            textDecoration: 'none',
                            fontSize: '1.2rem',
                            cursor: 'pointer',
                        }}
                    >
                        RecipeNest
                    </Typography>
                </Box>

                {/* Desktop Menu */}
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: 4 }}>
                    {pages.map((page) => (
                        <Button
                            key={page.name}
                            onClick={() => handleNavigation(page.path)}
                            sx={{
                                color: 'white',
                                mx: 1,
                                '&:hover': {
                                    color: '#EBC76B',
                                },
                            }}
                        >
                            {page.name}
                        </Button>
                    ))}
                </Box>

                {/* Right Side - Conditional Rendering */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, ml: 'auto' }}>
                    {isAuthenticated ? (
                        <>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt={user?.name} src={user?.profilePicture || "/static/images/avatar/2.jpg"} />  
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={() => handleMenuClick(setting)}>
                                        <Typography>{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button onClick={() => navigate('/login')} sx={{ color: 'white' }}>Login</Button>
                            <Button onClick={() => navigate('/register')} sx={{ color: 'white' }}>Sign Up</Button>
                        </>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;