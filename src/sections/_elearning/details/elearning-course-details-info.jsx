import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { fCurrency } from 'src/utils/format-number';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function ElearningCourseDetailsInfo({
  sx,
  price,
  priceSale,
  totalLessons,
  resources,
  ...other
}) {
  return (
    <Card
      sx={{
        p: 3,
        gap: 2,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        ...sx,
      }}
      {...other}
    >
      <Box display="flex" sx={{ typography: 'h3' }}>
        {!!priceSale && (
          <Box
            component="span"
            sx={{
              mr: 1,
              typography: 'h4',
              color: 'text.disabled',
              textDecoration: 'line-through',
            }}
          >
            {fCurrency(priceSale)}
          </Box>
        )}
        {fCurrency(price)}
      </Box>

      <Typography>This course includes:</Typography>

      <Box gap={1} display="flex" alignItems="center" sx={{ typography: 'body2' }}>
        <Iconify icon="solar:documents-minimalistic-outline" />
        <span>
          <strong>{totalLessons}</strong>
          {` Lessons`}
        </span>
      </Box>

      <Box gap={1} display="flex" alignItems="center" sx={{ typography: 'body2' }}>
        <Iconify icon="solar:file-download-outline" />
        <span>
          <strong>{resources}</strong>
          {` Resources`}
        </span>
      </Box>

      <Box gap={1} display="flex" alignItems="center" sx={{ typography: 'body2' }}>
        <Iconify icon="carbon:data-accessor" />
        Full lifetime access
      </Box>

      <Box gap={1} display="flex" alignItems="center" sx={{ typography: 'body2' }}>
        <Iconify icon="solar:monitor-smartphone-outline" />
        Access on desktops, tablets, mobile
      </Box>

      <Box gap={1} display="flex" alignItems="center" sx={{ typography: 'body2' }}>
        <Iconify icon="carbon:certificate" />
        Certificate of completion
      </Box>

      <Button variant="contained" size="large" color="inherit" sx={{ mt: 1 }}>
        Enrol now
      </Button>
    </Card>
  );
}
