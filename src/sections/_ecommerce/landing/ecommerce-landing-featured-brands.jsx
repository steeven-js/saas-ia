import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';

import { EcommerceProductItemFeaturedByBrand } from '../product/item/ecommerce-product-item-featured-by-brand';

// ----------------------------------------------------------------------

export function EcommerceLandingFeaturedBrands({ products, sx, ...other }) {
  const renderBrandBox = (
    <Paper
      variant="outlined"
      sx={{
        p: 5,
        minHeight: 1,
        borderRadius: 2,
        textAlign: 'center',
        bgcolor: 'transparent',
      }}
    >
      <Iconify width={48} icon="ri:apple-fill" />

      <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
        Apple
      </Typography>

      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        While most people enjoy casino gambling, sports betting, lottery and bingo playing.
      </Typography>

      <Button
        color="inherit"
        endIcon={<Iconify width={16} icon="solar:alt-arrow-right-outline" sx={{ ml: -0.5 }} />}
        sx={{ mt: 5 }}
      >
        More details
      </Button>
    </Paper>
  );

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 5, md: 8 },
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Typography
          variant="h3"
          sx={{
            mb: { xs: 5, md: 8 },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          Featured brands
        </Typography>

        <Grid container spacing={3} disableEqualOverflow>
          <Grid xs={12} md={4}>
            {renderBrandBox}
          </Grid>

          <Grid xs={12} md={8}>
            <Box
              gap={3}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
              }}
            >
              {products.map((product) => (
                <EcommerceProductItemFeaturedByBrand key={product.id} product={product} />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
