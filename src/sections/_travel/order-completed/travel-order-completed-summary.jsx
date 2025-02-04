import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { fDate } from 'src/utils/format-time';
import { fCurrency } from 'src/utils/format-number';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function TravelOrderCompletedSummary({ sx, ...other }) {
  return (
    <Box
      gap={3}
      display="flex"
      flexDirection="column"
      sx={{
        borderRadius: 2,
        p: { xs: 3, sm: 5 },
        border: (theme) => `dashed 1px ${theme.vars.palette.divider}`,
        ...sx,
      }}
      {...other}
    >
      <Typography component="h6" variant="h5">
        Booking details
      </Typography>

      <Row icon="solar:calendar-mark-outline" label="Departure day" value={fDate(new Date())} />

      <Row icon="solar:users-group-rounded-outline" label="Guests" value="2 guest" />

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Row icon="carbon:barcode" label="Booking code" value="KU_H8SDM" />

      <Row icon="solar:calendar-mark-outline" label="Booking day" value={fDate(new Date())} />

      <Row icon="solar:bill-list-outline" label="Total" value={fCurrency(1112)} />

      <Row icon="solar:card-outline" label="Payment method" value="Paypal" />
    </Box>
  );
}

function Row({ icon, label, value }) {
  return (
    <Box
      gap={1}
      display="flex"
      alignItems="center"
      sx={{ typography: 'body2', color: 'text.secondary' }}
    >
      <Iconify icon={icon} width={24} /> {label}
      <Typography
        variant="subtitle2"
        sx={{ color: 'text.primary', flexGrow: 1, textAlign: 'right' }}
      >
        {value}
      </Typography>
    </Box>
  );
}
