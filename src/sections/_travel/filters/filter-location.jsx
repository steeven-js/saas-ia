import Box from '@mui/material/Box';
import { filledInputClasses } from '@mui/material/FilledInput';

import { Iconify } from 'src/components/iconify';
import { CountrySelect } from 'src/components/country-select';

// ----------------------------------------------------------------------

export function FilterLocation({ sx }) {
  return (
    <Box display="flex" alignItems="center" sx={{ width: 1, color: 'text.disabled', ...sx }}>
      <Iconify width={24} icon="carbon:location" />

      <CountrySelect
        fullWidth
        hiddenLabel
        popupIcon={null}
        placeholder="Where we go?"
        sx={{
          color: 'inherit',
          [`& .${filledInputClasses.root}`]: {
            bgcolor: 'transparent',
            '&:hover': {
              bgcolor: 'transparent',
            },
            [`&.${filledInputClasses.focused}`]: {
              bgcolor: 'transparent',
            },
          },
          [`& .${filledInputClasses.input}`]: {
            typography: 'subtitle1',
          },
        }}
      />
    </Box>
  );
}
