import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fCurrency } from 'src/utils/format-number';

import { maxLine } from 'src/theme/styles';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function TravelTourItem({ tour, sx, ...other }) {
  const [favorite, setFavorite] = useState(tour.favorited);

  const handleChangeFavorite = useCallback((event) => {
    setFavorite(event.target.checked);
  }, []);

  return (
    <Card sx={sx} {...other}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pl: 2,
          top: 0,
          pt: 1.5,
          pr: 1.5,
          width: 1,
          zIndex: 9,
          position: 'absolute',
        }}
      >
        <Box
          gap={0.5}
          display="flex"
          sx={{
            px: 1,
            borderRadius: 0.75,
            typography: 'subtitle2',
            bgcolor: 'text.primary',
            color: 'background.paper',
          }}
        >
          {tour.priceSale > 0 && (
            <Box
              component="span"
              sx={{ mr: 0.5, color: 'grey.500', textDecoration: 'line-through' }}
            >
              {fCurrency(tour.priceSale)}
            </Box>
          )}
          {fCurrency(tour.price)}
        </Box>

        <Checkbox
          color="error"
          checked={favorite}
          onChange={handleChangeFavorite}
          icon={<Iconify icon="solar:heart-outline" />}
          checkedIcon={<Iconify icon="solar:heart-bold" />}
          inputProps={{
            id: `favorite-checkbox-${tour.id}`,
            'aria-label': 'Favorite checkbox',
          }}
          sx={{ color: 'common.white' }}
        />
      </Box>

      <Image alt={tour.slug} src={tour.coverUrl} ratio="1/1" />

      <Box sx={{ p: 2.5 }}>
        <Typography variant="body2" sx={{ mb: 0.5, color: 'text.secondary' }}>
          {tour.location}
        </Typography>

        <Link
          component={RouterLink}
          href={paths.travel.tour}
          color="inherit"
          variant="h6"
          sx={(theme) => ({
            ...maxLine({ line: 2, persistent: theme.typography.h6 }),
          })}
        >
          {tour.slug}
        </Link>
      </Box>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Box display="flex" alignItems="center" sx={{ p: 2.5 }}>
        <Box
          gap={0.5}
          flexGrow={1}
          display="flex"
          alignItems="center"
          sx={{ typography: 'body2', color: 'text.disabled' }}
        >
          <Iconify width={16} icon="solar:clock-circle-outline" /> {tour.duration}
        </Box>

        <Box gap={0.5} display="flex" alignItems="center">
          <Iconify icon="eva:star-fill" sx={{ color: 'warning.main' }} />
          <Box component="span" sx={{ typography: 'h6' }}>
            {Number.isInteger(tour.ratingNumber) ? `${tour.ratingNumber}.0` : tour.ratingNumber}
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
