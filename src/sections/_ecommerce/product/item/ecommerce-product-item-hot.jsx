import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Image } from 'src/components/image';

import { ProductPrice } from '../../components/product-price';

// ----------------------------------------------------------------------

export function EcommerceProductItemHot({ product, isHot = false, sx }) {
  return (
    <Link component={RouterLink} href={paths.eCommerce.product} color="inherit" underline="none">
      <Paper
        variant="outlined"
        sx={{
          p: 2,
          borderRadius: 2,
          bgcolor: 'transparent',
          transition: (theme) =>
            theme.transitions.create('background-color', {
              easing: theme.transitions.easing.easeIn,
              duration: theme.transitions.duration.shortest,
            }),
          '&:hover': {
            bgcolor: 'background.neutral',
          },
          ...sx,
        }}
      >
        <Image
          alt={product.name}
          src={product.coverUrl}
          ratio="1/1"
          sx={{ mb: 2, borderRadius: 1.5, bgcolor: 'background.neutral' }}
        />

        <div>
          <Typography variant="body2" noWrap sx={{ mb: 0.5, fontWeight: 'fontWeightMedium' }}>
            {product.name}
          </Typography>

          <ProductPrice price={product.price} sx={{ ...(isHot && { color: 'error.main' }) }} />
        </div>

        {isHot && (
          <Box gap={1} display="flex" alignItems="center" sx={{ mt: 1 }}>
            <LinearProgress
              color="inherit"
              variant="determinate"
              value={(product.sold / product.stock) * 100}
              sx={{ flex: '1 1 auto' }}
            />

            <Typography
              variant="caption"
              sx={{ flexShrink: 0, color: 'text.disabled' }}
            >{`🔥 ${product.sold} sold`}</Typography>
          </Box>
        )}
      </Paper>
    </Link>
  );
}
