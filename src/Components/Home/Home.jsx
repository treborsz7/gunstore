
import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  IconButton,
  Chip,
  TextField,
  Paper
} from '@mui/material';
import {
  AddShoppingCart as AddShoppingCartIcon,
  ArrowBackIos as ArrowBackIcon,
  ArrowForwardIos as ArrowForwardIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon
} from '@mui/icons-material';
import Header from '../Header/';
import ItemPopup from '../ItemPopup';
import * as DaoService from "./../../Services/MockDaoService"
import * as CartService from "./../../Services/MockCartService"

const Home = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const [selectItem, setSelectItem] = useState({});
  const [Sections, setSections] = useState([]);
  const [itemsCount, setItemsCount] = useState([]);

  const addToCar = (event, item) => {
    event.stopPropagation();
    CartService.AddItemToCar(item)
    handleCounChange(itemsCount - 1);

  }

  const handleCounChange = (count) => {
    console.log(count)
    setItemsCount(count);
  }

  const ViewItem = (item) => {
    setSelectItem(item)
    setShow(true);

    // if (event.target === event.currentTarget) 
    return item
  }

  const fetchUsersData = async () => {
    setSections(await DaoService.GetSectionsTohome());

  };



  function hasSections(prods) {
    return prods.sections.length > 0;
  }

  useEffect(() => {
    fetchUsersData();

  }, []);

  const handleClickR = (parentId) => {
    console.log(parentId)
    var container = document.getElementById(parentId);
    sideScroll(container, 'right', 25, 210, 20);
  };

  const handleClickL = (parentId) => {
    console.log(parentId)
    var container = document.getElementById(parentId);
    sideScroll(container, 'left', 25, 210, 20);
  };

  function sideScroll(element, direction, speed, distance, step) {
    let scrollAmount = 0;
    var slideTimer = setInterval(function () {
      if (direction == 'left') {
        element.scrollLeft -= step;
      } else {
        element.scrollLeft += step;
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed);
  }

  const SectionMap = Sections?.map(element => {
    const products = element.products?.map(x => {
      return (
        <Grid item xs={12} sm={6} md={4} lg={3} key={x.id}>
          <Card 
            sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              cursor: 'pointer',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'scale(1.02)',
              }
            }}
            onClick={() => ViewItem(x)}
          >
            <CardMedia
              component="img"
              height="240"
              image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              alt={x.description}
              sx={{ objectFit: 'cover' }}
            />
            <CardContent sx={{ flexGrow: 1, p: 2 }}>
              <Typography 
                variant="h6" 
                component="h3" 
                gutterBottom
                sx={{ 
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  lineHeight: 1.3
                }}
              >
                {x.description}
              </Typography>
              <Typography 
                variant="h6" 
                color="primary"
                sx={{ 
                  fontWeight: 700,
                  mt: 1
                }}
              >
                RD$ {x.price || 0}
              </Typography>
            </CardContent>
            <CardActions sx={{ p: 2, pt: 0 }}>
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                startIcon={<AddShoppingCartIcon />}
                onClick={(event) => addToCar(event, x)}
                sx={{ fontWeight: 600 }}
              >
                Agregar al carrito
              </Button>
            </CardActions>
          </Card>
        </Grid>
      );
    });

    return (
      <Box key={element.id} id={element.description} sx={{ py: 4 }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom
            sx={{ 
              fontWeight: 700,
              mb: 3,
              color: 'primary.main'
            }}
          >
            {element.description}
          </Typography>

          <Box sx={{ position: 'relative' }}>
            <Grid 
              container 
              spacing={3}
              id={element.id + "section"}
              sx={{ pb: 2 }}
            >
              {products}
            </Grid>

            {/* Navigation Buttons */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
                mt: 2
              }}
            >
              <IconButton
                onClick={() => handleClickL(element.id + "section")}
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  }
                }}
              >
                <ArrowBackIcon />
              </IconButton>
              <IconButton
                onClick={() => handleClickR(element.id + "section")}
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  }
                }}
              >
                <ArrowForwardIcon />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>
    );
  });

  return (
    <>
      <ItemPopup showItem={show} selectItem={selectItem} handleClose={handleClose} />
      <Header handleCounChange={handleCounChange} Sections={Sections} itemsCount={itemsCount} />

      {SectionMap}

      {/* About Section */}
      <Box sx={{ py: 6, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Paper elevation={2} sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
              NOSOTROS
            </Typography>
            <Typography variant="h6" sx={{ fontStyle: 'italic', mb: 3, color: 'text.secondary' }}>
              ¡Especialistas en armamento!
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.primary' }}>
              Somos una empresa familiar reconocida por su trayectoria y seriedad, líder en el mercado.
              <br /><br />
              Atendemos a clientes de todo el país, quienes adquieren nuestros productos a distancia o nos visitan en nuestros locales.
              <br /><br />
              Ofrecemos la mejor opción de compra del mercado, basándonos en los siguientes principios:
              <br />
              • El mejor precio
              <br />
              • La más rápida y eficiente atención personalizada
              <br />
              • Garantía total de satisfacción
            </Typography>
          </Paper>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="Contactos" sx={{ py: 6, backgroundColor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h4" 
            component="h2" 
            align="center" 
            gutterBottom
            sx={{ fontWeight: 700, color: 'primary.main', mb: 2 }}
          >
            Contacto
          </Typography>
          <Typography 
            variant="h6" 
            align="center" 
            sx={{ fontStyle: 'italic', mb: 4, color: 'text.secondary' }}
          >
            ¡Nos encanta atender a nuestros clientes!
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LocationIcon sx={{ mr: 2, color: 'primary.main' }} />
                  <Typography variant="body1">Santo Domingo, RD</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <PhoneIcon sx={{ mr: 2, color: 'primary.main' }} />
                  <Typography variant="body1">+00 1515151515</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <EmailIcon sx={{ mr: 2, color: 'primary.main' }} />
                  <Typography variant="body1">mail@mail.com</Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={8}>
              <Paper elevation={2} sx={{ p: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Nombre"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Comentario"
                      multiline
                      rows={4}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <Button 
                        variant="contained" 
                        color="primary"
                        size="large"
                        sx={{ fontWeight: 600, px: 4 }}
                      >
                        Enviar
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ py: 3, backgroundColor: 'primary.main', color: 'white' }}>
        <Container maxWidth="lg">
          <Typography variant="body2" align="center">
            Copyright © Armería Pro 2023
          </Typography>
        </Container>
      </Box>
    </>
  );
}


export default Home;
