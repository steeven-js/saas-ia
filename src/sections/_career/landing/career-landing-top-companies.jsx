import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { maxLine, stylesMode } from 'src/theme/styles';

import { Image } from 'src/components/image';
import {
  Carousel,
  useCarousel,
  CarouselDotButtons,
  CarouselArrowFloatButtons,
} from 'src/components/carousel';

// ----------------------------------------------------------------------

export function CareerLandingTopCompanies({ companies, sx, ...other }) {
  const carousel = useCarousel({
    slidesToShow: 'auto',
    slideSpacing: '16px',
  });

  return (
    <Box
      component="section"
      sx={{
        pt: { xs: 10, md: 15 },
        bgcolor: 'background.neutral',
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Typography variant="h2" sx={{ textAlign: 'center' }}>
          Top companies
        </Typography>

        <Box sx={{ position: 'relative' }}>
          <CarouselArrowFloatButtons
            {...carousel.arrows}
            options={carousel.options}
            sx={{
              borderRadius: '50%',
              color: 'action.active',
              bgcolor: 'transparent',
              display: { xs: 'none', md: 'inline-flex' },
              [stylesMode.dark]: { color: 'action.active' },
            }}
          />

          <Carousel carousel={carousel} sx={{ py: { xs: 5, md: 10 } }}>
            {companies.map((company) => (
              <CompanyItem key={company.id} company={company} />
            ))}
          </Carousel>
        </Box>
      </Container>

      <CarouselDotButtons
        scrollSnaps={carousel.dots.scrollSnaps}
        selectedIndex={carousel.dots.selectedIndex}
        onClickDot={carousel.dots.onClickDot}
        sx={{
          mb: 10,
          width: 1,
          color: 'primary.main',
          justifyContent: 'center',
          display: { xs: 'inline-flex', md: 'none' },
        }}
      />
    </Box>
  );
}

function CompanyItem({ company }) {
  return (
    <Link component={RouterLink} href={paths.career.jobs} color="inherit" underline="none">
      <Box
        sx={(theme) => ({
          py: 5,
          px: 3,
          width: 200,
          borderRadius: 2,
          cursor: 'pointer',
          textAlign: 'center',
          transition: theme.transitions.create('all', {
            duration: theme.transitions.duration.enteringScreen,
          }),
          '&:hover': {
            bgcolor: 'background.paper',
            boxShadow: theme.customShadows.z24,
          },
        })}
      >
        <Image
          alt={company.name}
          src={company.logo}
          sx={{
            width: 56,
            height: 56,
            borderRadius: 1,
          }}
        />
        <Typography variant="body2" sx={{ color: 'text.disabled', mt: 2.5, mb: 0.5 }}>
          {company.totalJobs} jobs
        </Typography>

        <Typography
          variant="subtitle2"
          sx={(theme) => ({
            ...maxLine({ line: 2, persistent: theme.typography.subtitle2 }),
          })}
        >
          {company.name}
        </Typography>
      </Box>
    </Link>
  );
}
