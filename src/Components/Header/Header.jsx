import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
  Box,
  Container,
  TextField,
  InputAdornment,
  Menu,
  MenuItem,
  useScrollTrigger,
  Slide
} from '@mui/material';
import {
  ShoppingCart as ShoppingCartIcon,
  Search as SearchIcon,
  Menu as MenuIcon
} from '@mui/icons-material';
import Cart from '../Cart/Cart';
import * as CartService from '../../Services/MockCartService';;

// Hide AppBar on scroll for better mobile experience
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = (props) => {
  const [show, setShow] = useState(false);
  const [CartItems, setCartItems] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [TextToSearch, setTextToSearch] = useState("");

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleSearchChange = (event) => {
    setTextToSearch(event.target.value);
  }

  const handleCounChange = (count) => {
    console.log(count);
    setCartItems(count);
  }

  const filterItems = (event) => {
    event.preventDefault();
    CartService.GetItemsByFilter({ text: TextToSearch });
  }

  useEffect(() => {
    setCartItems(props.itemsCount);
  }, [props.itemsCount]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    handleMenuClose();
  };

  return (
    <>
      <HideOnScroll>
        <AppBar position="fixed" color="primary">
          <Container maxWidth="lg">
            <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
              <Typography 
                variant="h6" 
                component="div" 
                sx={{ 
                  fontWeight: 700,
                  fontSize: { xs: '1.1rem', md: '1.25rem' }
                }}
              >
                Armería Pro
              </Typography>

              {/* Desktop Navigation */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                {props.Sections?.map(section => (
                  <Button
                    key={section.id}
                    color="inherit"
                    onClick={() => scrollToSection(section.description)}
                    sx={{ fontWeight: 500 }}
                  >
                    {section.description}
                  </Button>
                ))}
              </Box>

              {/* Mobile Navigation */}
              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  color="inherit"
                  onClick={handleMenuOpen}
                  edge="start"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                >
                  {props.Sections?.map(section => (
                    <MenuItem
                      key={section.id}
                      onClick={() => scrollToSection(section.description)}
                    >
                      {section.description}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              {/* Cart Button */}
              <IconButton
                color="inherit"
                onClick={handleShow}
                sx={{ ml: 2 }}
              >
                <Badge badgeContent={CartItems} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* Add spacing for fixed AppBar */}
      <Toolbar />

      {/* Search Bar */}
      <Container maxWidth="lg" sx={{ py: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <TextField
            variant="outlined"
            placeholder="Buscar productos..."
            value={TextToSearch}
            onChange={handleSearchChange}
            size="small"
            sx={{ 
              minWidth: { xs: 200, md: 300 },
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
            }}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                filterItems(e);
              }
            }}
          />
        </Box>
      </Container>

      <Cart 
        showItem={show} 
        handleClose={handleClose} 
        itemsCount={props.itemsCount} 
        handleCounChange={handleCounChange}
      />
    </>
  );
};

export default Header;
