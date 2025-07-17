import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Grid,
  IconButton,
  Avatar,
  Divider,
  Paper,
  Chip,
  Badge
} from '@mui/material';
import {
  Remove as RemoveIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
  ShoppingCart as ShoppingCartIcon
} from '@mui/icons-material';
import * as CartService from '../../Services/CartService';

const Cart = (props) => {
  const [show, setShow] = useState(false);
  const [CartItems, setCartItems] = useState([]);


  useEffect(() => {
    setShow(props.showItem);
  }, [props.showItem]);


  useEffect(() => {
    setCartItems(CartService.CartItems);
  }, [CartService.CartItems]);


  const removeItem = (item) => {
    CartService.RemoveItemToCart(item);
    setCartItems(CartService.GetItemsOnCart());
  }

  const digreseItem = (item) => {
    CartService.DigreseItemToCart(item);
    setCartItems(CartService.GetItemsOnCart());
  }

  const addItem = (item) => {
    CartService.AddItemToCar(item);
    setCartItems(CartService.GetItemsOnCart());
  }

  let total = 0;
  let itemsCount = 0;

  const handleCounChange = (count) => {
    props.handleCounChange(count);
  }

  const items = CartItems.map(x => {
    total += x.ItemsCount * (x.price || 0);
    itemsCount += x.ItemsCount;

    return (
      <Paper key={x.Íd} elevation={1} sx={{ p: 2, mb: 2 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={2}>
            <Avatar
              src="https://dummyimage.com/60x60/dee2e6/6c757d.jpg"
              alt={x.description}
              sx={{ width: 50, height: 50 }}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle1" fontWeight={600}>
              {x.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              RD$ {x.price || "0.00"}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton 
                size="small" 
                onClick={() => digreseItem(x)}
                sx={{ 
                  backgroundColor: 'grey.100',
                  '&:hover': { backgroundColor: 'grey.200' }
                }}
              >
                <RemoveIcon fontSize="small" />
              </IconButton>
              <Chip
                label={x.ItemsCount}
                size="small"
                color="primary"
                sx={{ minWidth: 40 }}
              />
              <IconButton 
                size="small" 
                onClick={() => addItem(x)}
                sx={{ 
                  backgroundColor: 'grey.100',
                  '&:hover': { backgroundColor: 'grey.200' }
                }}
              >
                <AddIcon fontSize="small" />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="subtitle1" fontWeight={600} color="primary">
              RD$ {x.ItemsCount * (x.price || 0)}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <IconButton 
              onClick={() => removeItem(x)}
              color="error"
              size="small"
            >
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    );
  });
  //setTotalItemsCount(itemsCount)
  //props.itemsCount = itemsCount;
  handleCounChange(itemsCount);

  return (
    <Dialog
      open={show}
      onClose={props.handleClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: { borderRadius: 2 }
      }}
    >
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 2, pb: 1 }}>
        <ShoppingCartIcon color="primary" />
        <Typography variant="h5" component="div" fontWeight={600}>
          Carrito de compras
        </Typography>
      </DialogTitle>
      
      <DialogContent sx={{ px: 3 }}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Tu canasta
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Tienes {items.length} productos en tu canasta
          </Typography>
        </Box>

        {items.length > 0 ? (
          <>
            {items}
            
            <Divider sx={{ my: 2 }} />
            
            <Paper elevation={2} sx={{ p: 2, backgroundColor: 'primary.main', color: 'white' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6" fontWeight={600}>
                  Total:
                </Typography>
                <Typography variant="h5" fontWeight={700}>
                  RD$ {total.toFixed(2)}
                </Typography>
              </Box>
            </Paper>
          </>
        ) : (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <ShoppingCartIcon sx={{ fontSize: 64, color: 'grey.400', mb: 2 }} />
            <Typography variant="h6" color="text.secondary">
              Tu carrito está vacío
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Agrega algunos productos para comenzar
            </Typography>
          </Box>
        )}
      </DialogContent>
      
      <DialogActions sx={{ p: 3, pt: 1 }}>
        <Button 
          onClick={props.handleClose}
          variant="outlined"
          size="large"
        >
          Continuar comprando
        </Button>
        <Button 
          variant="contained"
          size="large"
          disabled={items.length === 0}
          sx={{ fontWeight: 600 }}
        >
          Proceder al pago
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Cart;
