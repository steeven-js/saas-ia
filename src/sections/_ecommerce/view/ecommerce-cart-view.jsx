import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { EcommerceCartList } from '../cart/ecommerce-cart-list';
import { EcommerceCartSummary } from '../cart/ecommerce-cart-summary';

// ----------------------------------------------------------------------

export function EcommerceCartView({ products }) {
  return (
    <Container sx={{ pb: 10 }}>
      <Typography variant="h3" sx={{ my: { xs: 3, md: 5 } }}>
        Cart ({products?.length})
      </Typography>

      <Grid container disableEqualOverflow spacing={{ xs: 5, md: 8 }}>
        <Grid xs={12} md={8}>
          <EcommerceCartList products={products || []} />
        </Grid>

        <Grid xs={12} md={4}>
          <EcommerceCartSummary
            tax={7}
            total={357.09}
            subtotal={89.09}
            shipping={55.47}
            discount={16.17}
          />
        </Grid>
      </Grid>

      <Button
        component={RouterLink}
        href={paths.eCommerce.products}
        color="inherit"
        startIcon={<Iconify icon="solar:alt-arrow-left-outline" />}
        sx={{ mt: 3 }}
      >
        Continue shopping
      </Button>
    </Container>
  );
}
