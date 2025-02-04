import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import {
  Carousel,
  useCarousel,
  CarouselDotButtons,
  CarouselArrowBasicButtons,
} from 'src/components/carousel';

// ----------------------------------------------------------------------

export function CareerTestimonial({ testimonials, sx, ...other }) {
  const carousel = useCarousel();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 15 },
        bgcolor: 'background.neutral',
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Box sx={{ maxWidth: 560, mx: 'auto' }}>
          <Typography variant="h2" sx={{ mb: 5, textAlign: 'center' }}>
            What our customer say
          </Typography>

          <Carousel carousel={carousel}>
            {testimonials.map((testimonial) => (
              <TestimonialItem key={testimonial.id} testimonial={testimonial} />
            ))}
          </Carousel>

          <CarouselArrowBasicButtons
            {...carousel.arrows}
            options={carousel.options}
            sx={{
              mt: 10,
              gap: 1,
              width: 1,
              justifyContent: 'center',
              display: { xs: 'none', md: 'flex' },
            }}
          />

          <CarouselDotButtons
            scrollSnaps={carousel.dots.scrollSnaps}
            selectedIndex={carousel.dots.selectedIndex}
            onClickDot={carousel.dots.onClickDot}
            sx={{
              mt: 5,
              width: 1,
              color: 'primary.main',
              justifyContent: 'center',
              display: { xs: 'flex', md: 'none' },
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}

function TestimonialItem({ testimonial, sx, ...other }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      sx={{ textAlign: 'center', ...sx }}
      {...other}
    >
      <Rating value={testimonial.ratingNumber} readOnly />

      <Typography sx={{ my: 3, lineHeight: 1.75, fontSize: { md: 20 } }}>
        {testimonial.content}
      </Typography>

      <Typography variant="h6" sx={{ mb: 1 }}>
        {testimonial.name}
      </Typography>

      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {testimonial.role}
      </Typography>
    </Box>
  );
}
