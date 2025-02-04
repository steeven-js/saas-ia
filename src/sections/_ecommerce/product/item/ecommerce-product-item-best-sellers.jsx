import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Image } from 'src/components/image';

import { ProductPrice } from '../../components/product-price';
import { ProductRating } from '../../components/product-rating';

// ----------------------------------------------------------------------

export function EcommerceProductItemBestSellers({ product, sx, ...other }) {
  return (
    <Box gap={2} display="flex" sx={sx} {...other}>
      <Image
        src={product.coverUrl}
        sx={{
          width: 80,
          height: 80,
          flexShrink: 0,
          borderRadius: 1.5,
          bgcolor: 'background.neutral',
        }}
      />

      <Box gap={0.5} display="flex" flexDirection="column" sx={{ minWidth: 0 }}>
        <Link
          component={RouterLink}
          href={paths.eCommerce.product}
          color="inherit"
          variant="body2"
          noWrap
          sx={{ fontWeight: 'fontWeightMedium' }}
        >
          {product.name}
        </Link>

        <ProductRating value={product.ratingNumber} label={`${product.sold} sold`} />

        <ProductPrice price={product.price} priceSale={product.priceSale} />
      </Box>
    </Box>
  );
}
