import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { maxLine } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function TravelLandingToursByCity({ tours, sx, ...other }) {
  return (
    <Box
      component="section"
      sx={{
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Box
          display="flex"
          alignItems="center"
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ mb: { xs: 5, md: 10 } }}
        >
          <Box sx={{ textAlign: { xs: 'center', md: 'unset' } }}>
            <Typography variant="h2" sx={{ mb: 3 }}>
              Tours by city
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              {`Our Featured Tours can help you find the trip that's perfect for you!`}
            </Typography>
          </Box>

          <Button
            component={RouterLink}
            href={paths.travel.tours}
            color="inherit"
            endIcon={<Iconify icon="solar:alt-arrow-right-outline" />}
            sx={{ display: { xs: 'none', md: 'inline-flex' } }}
          >
            View all
          </Button>
        </Box>

        <Box
          gap={3}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)',
          }}
        >
          {tours.map((tour) => (
            <TourItem key={tour.id} tour={tour} />
          ))}
        </Box>

        <Box sx={{ mt: 5, textAlign: 'center', display: { md: 'none' } }}>
          <Button
            component={RouterLink}
            href={paths.travel.tours}
            color="inherit"
            endIcon={<Iconify icon="solar:alt-arrow-right-outline" />}
          >
            View all
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

function TourItem({ tour }) {
  return (
    <Link component={RouterLink} href={paths.travel.tour} color="inherit" underline="none">
      <Paper
        variant="outlined"
        sx={{
          p: 3,
          gap: 2.5,
          borderRadius: 2,
          display: 'flex',
          cursor: 'pointer',
          alignItems: 'center',
          bgcolor: 'transparent',
          '&:hover': {
            bgcolor: 'background.paper',
            boxShadow: (theme) => theme.customShadows.z24,
          },
        }}
      >
        <Avatar src={tour.coverUrl} sx={{ width: 64, height: 64 }} />

        <div>
          <Typography variant="h6" sx={{ ...maxLine({ line: 1 }), mb: 0.5 }}>
            {tour.location}
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            196 place
          </Typography>
        </div>
      </Paper>
    </Link>
  );
}
