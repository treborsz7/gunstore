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
  Chip
} from '@mui/material';
import {
  Close as CloseIcon,
  ShoppingCart as ShoppingCartIcon
} from '@mui/icons-material';

const ItemPopup = (props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(props.showItem);
  }, [props.showItem]);

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
      <DialogTitle sx={{ m: 0, p: 3 }}>
        <Typography variant="h5" component="div" fontWeight={600}>
          {props.selectItem.description}
        </Typography>
        {props.selectItem.price && (
          <Chip
            label={`RD$ ${props.selectItem.price}`}
            color="primary"
            size="large"
            sx={{ mt: 1, fontWeight: 600 }}
          />
        )}
      </DialogTitle>
      
      <DialogContent sx={{ px: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              alt={props.selectItem.description}
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: 2
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              {props.selectItem.text || "Descripción del producto no disponible."}
            </Typography>
            
            {props.selectItem.features && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6" gutterBottom fontWeight={600}>
                  Características:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {props.selectItem.features}
                </Typography>
              </Box>
            )}
          </Grid>
        </Grid>
      </DialogContent>
      
      <DialogActions sx={{ p: 3, pt: 1 }}>
        <Button 
          onClick={props.handleClose}
          variant="outlined"
          size="large"
        >
          Cerrar
        </Button>
        <Button 
          variant="contained"
          size="large"
          startIcon={<ShoppingCartIcon />}
          sx={{ fontWeight: 600 }}
        >
          Agregar al carrito
        </Button>
      </DialogActions>
    </Dialog>
  );
};


export default ItemPopup;
