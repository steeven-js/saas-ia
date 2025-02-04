import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Popover from '@mui/material/Popover';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { useBoolean } from 'src/hooks/use-boolean';
import { usePopover } from 'src/hooks/use-popover';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function AccountPaymentCard({ card, sx, ...other }) {
  const showNumber = useBoolean();

  const openOptions = usePopover();

  return (
    <>
      <Paper
        variant="outlined"
        sx={{
          p: 3,
          pr: 1,
          gap: 3,
          borderRadius: 2,
          display: 'flex',
          bgcolor: 'transparent',
          flexDirection: 'column',
          ...sx,
        }}
        {...other}
      >
        <Box display="flex" alignItems="center" sx={{ typography: 'subtitle1' }}>
          {card.label}

          {card.isPrimary && (
            <Label color="info" startIcon={<Iconify icon="eva:star-fill" />} sx={{ ml: 1 }}>
              Primary
            </Label>
          )}

          <Box flexGrow={1} />

          <Iconify
            width={24}
            icon={
              (card.value === 'visa' && 'logos:visa') ||
              (card.value === 'mastercard' && 'logos:mastercard') ||
              'logos:paypal'
            }
          />

          <IconButton onClick={openOptions.onOpen}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </Box>

        <Box gap={1} display="flex" alignItems="center" sx={{ typography: 'h6' }}>
          {showNumber.value ? card.number : `**** **** **** ${card.number.slice(-4)}`}
          <IconButton onClick={showNumber.onToggle}>
            <Iconify icon={showNumber.value ? 'solar:eye-outline' : 'solar:eye-closed-outline'} />
          </IconButton>
        </Box>

        <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" sx={{ typography: 'subtitle2' }}>
          <div>
            <Typography
              variant="caption"
              sx={{ mb: 0.5, color: 'text.disabled', display: 'block' }}
            >
              Card holder
            </Typography>
            {card.holder}
          </div>
          <div>
            <Typography
              variant="caption"
              sx={{ mb: 0.5, color: 'text.disabled', display: 'block' }}
            >
              Expiry date
            </Typography>
            {card.expired}
          </div>
        </Box>
      </Paper>

      <Popover
        open={openOptions.open}
        anchorEl={openOptions.anchorEl}
        onClose={openOptions.onClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem disabled={card.isPrimary} onClick={openOptions.onClose} sx={{ gap: 1 }}>
          <Iconify icon="eva:star-fill" /> Set primary payment
        </MenuItem>

        <MenuItem onClick={openOptions.onClose} sx={{ gap: 1 }}>
          <Iconify icon="solar:pen-2-outline" /> Edit
        </MenuItem>

        <Divider sx={{ borderStyle: 'dashed', mt: 0.5 }} />

        <MenuItem onClick={openOptions.onClose} sx={{ gap: 1, color: 'error.main' }}>
          <Iconify icon="solar:trash-bin-minimalistic-outline" /> Delete
        </MenuItem>
      </Popover>
    </>
  );
}
