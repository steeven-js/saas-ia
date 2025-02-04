import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Label } from 'src/components/label';
import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';

import { ProductPrice } from '../../components/product-price';
import { ProductRating } from '../../components/product-rating';

// ----------------------------------------------------------------------

export function EcommerceProductViewListItem({ product, sx, ...other }) {
  return (
    <Box
      display="flex"
      sx={{
        position: 'relative',
        '&:hover .add-to-cart': {
          opacity: 1,
        },
        ...sx,
      }}
      {...other}
    >
      {(product.label === 'new' || product.label === 'sale') && (
        <Box gap={1} display="flex" sx={{ position: 'absolute', top: 8, left: 8, zIndex: 9 }}>
          {product.label === 'new' && <Label color="info">NEW</Label>}
          {product.label === 'sale' && <Label color="error">SALE</Label>}
        </Box>
      )}

      <Fab
        component={RouterLink}
        href={paths.eCommerce.product}
        className="add-to-cart"
        color="primary"
        size="small"
        sx={{
          top: 8,
          right: 8,
          zIndex: 9,
          opacity: 0,
          position: 'absolute',
          transition: (theme) =>
            theme.transitions.create('opacity', {
              easing: theme.transitions.easing.easeIn,
              duration: theme.transitions.duration.shortest,
            }),
        }}
      >
        <Iconify icon="solar:cart-3-outline" />
      </Fab>

      <Image
        src={product.coverUrl}
        sx={{
          mr: 2.5,
          width: 160,
          flexShrink: 0,
          borderRadius: 1.5,
          bgcolor: 'background.neutral',
        }}
      />

      <Stack spacing={1} sx={{ minWidth: 0 }}>
        <Stack spacing={0.5}>
          <Typography variant="caption" sx={{ color: 'text.disabled' }}>
            {product.category}
          </Typography>

          <Link component={RouterLink} href={paths.eCommerce.product} color="inherit" variant="h6">
            {product.name}
          </Link>
        </Stack>

        <ProductRating value={product.ratingNumber} label={`${product.sold} sold`} />

        <Typography variant="body2" noWrap sx={{ color: 'text.secondary' }}>
          {product.caption}
        </Typography>

        <ProductPrice
          price={product.price}
          priceSale={product.priceSale}
          sx={{ typography: 'h6' }}
        />
      </Stack>
    </Box>
  );
}
