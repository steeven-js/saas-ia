import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fAdd } from 'src/utils/format-time';
import { fCurrency } from 'src/utils/format-number';

import { varAlpha } from 'src/theme/styles';

import { ProductCountdownBlock } from '../../components/product-countdown-block';

// ----------------------------------------------------------------------

export function EcommerceProductItemCountDown({ product, sx, ...other }) {
  return (
    <Box
      sx={{
        p: 3,
        minWidth: 0,
        borderRadius: 2,
        color: 'primary.darker',
        bgcolor: 'primary.lighter',
        transition: (theme) =>
          theme.transitions.create('background-color', {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.shortest,
          }),
        '&:hover': { bgcolor: 'primary.light' },
        ...sx,
      }}
      {...other}
    >
      <Box
        component="img"
        alt={product.name}
        src={product.coverUrl}
        sx={(theme) => ({
          aspectRatio: '1/1',
          objectFit: 'cover',
          filter: `drop-shadow(20px 20px 24px ${varAlpha(theme.vars.palette.common.blackChannel, 0.16)})`,
        })}
      />

      <Box display="flex" flexDirection="column" sx={{ my: 3, textAlign: 'center' }}>
        <Link
          component={RouterLink}
          href={paths.eCommerce.product}
          color="inherit"
          underline="none"
          variant="subtitle2"
          noWrap
          sx={{ mb: 1, opacity: 0.72 }}
        >
          {product.name}
        </Link>

        <Typography variant="h5">{`From ${fCurrency(product.price)}`}</Typography>
      </Box>

      <ProductCountdownBlock expired={new Date(fAdd({ days: 1, hours: 8 }))} />
    </Box>
  );
}
