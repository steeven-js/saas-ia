import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { Logo } from 'src/components/logo';

// ----------------------------------------------------------------------

export function HomeFooter({ sx, ...other }) {
  return (
    <Box component="footer" sx={{ py: 8, ...sx }} {...other}>
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Logo isSingle sx={{ mb: 1 }} />

        <Box component="span" sx={{ color: 'text.secondary', typography: 'caption' }}>
          © All rights reserved.
        </Box>
      </Container>
    </Box>
  );
}
