import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  AppBar,
  Toolbar,
  Box,
  Paper,
  Chip
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import { ShoppingCart as ShoppingCartIcon } from '@mui/icons-material';

// Sample data for demo
const sampleProducts = [
  { id: 1, name: 'Pistola Glock 17', price: 850, image: 'https://dummyimage.com/300x200/dee2e6/6c757d.jpg' },
  { id: 2, name: 'Rifle AR-15', price: 1200, image: 'https://dummyimage.com/300x200/dee2e6/6c757d.jpg' },
  { id: 3, name: 'Escopeta Remington', price: 750, image: 'https://dummyimage.com/300x200/dee2e6/6c757d.jpg' },
  { id: 4, name: 'Pistola Smith & Wesson', price: 680, image: 'https://dummyimage.com/300x200/dee2e6/6c757d.jpg' },
];

const Demo = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      {/* Header */}
      <AppBar position="static" color="primary">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
              Armería Pro - MUI Version
            </Typography>
            <Button color="inherit" startIcon={<ShoppingCartIcon />}>
              Carrito (0)
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hero Section */}
      <Box sx={{ py: 6, backgroundColor: 'grey.900', color: 'white' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" align="center" gutterBottom fontWeight={700}>
            Tienda de Armería Profesional
          </Typography>
          <Typography variant="h5" align="center" color="grey.300">
            Equipamiento de calidad para profesionales y coleccionistas
          </Typography>
        </Container>
      </Box>

      {/* Products Section */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom fontWeight={600} color="primary">
          Productos Destacados
        </Typography>
        
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {sampleProducts.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="h3" gutterBottom fontWeight={600}>
                    {product.name}
                  </Typography>
                  <Chip
                    label={`RD$ ${product.price}`}
                    color="primary"
                    size="large"
                    sx={{ fontWeight: 600 }}
                  />
                </CardContent>
                <CardActions sx={{ p: 2 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    startIcon={<ShoppingCartIcon />}
                    sx={{ fontWeight: 600 }}
                  >
                    Agregar al carrito
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* About Section */}
      <Box sx={{ py: 6, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Paper elevation={2} sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h4" component="h2" gutterBottom fontWeight={700} color="primary">
              Sobre Nosotros
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, maxWidth: 800, mx: 'auto' }}>
              Somos una empresa familiar reconocida por su trayectoria y seriedad, líder en el mercado.
              Ofrecemos la mejor opción de compra del mercado con el mejor precio y atención personalizada.
            </Typography>
          </Paper>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ py: 3, backgroundColor: 'primary.main', color: 'white' }}>
        <Container maxWidth="lg">
          <Typography variant="body2" align="center">
            © 2023 Armería Pro - Diseño con Material-UI
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Demo;